import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { walletApi, tokenStorage } from '../api/walletApi';
import type { UserInfo, LoginRequest } from '../api/types';

interface AuthContextType {
  user: UserInfo | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => Promise<void>;
  refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Auth Provider
 * 
 * Quản lý authentication state và cung cấp auth methods
 */
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Decode JWT token to get payload
   */
  const decodeJWT = (token: string): any => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error decoding JWT:', error);
      return null;
    }
  };

  /** Set user from decoded JWT payload (sub, email, role, fullName, ...) */
  const setUserFromDecoded = (decoded: Record<string, unknown>) => {
    setUser({
      id: (decoded.sub as string) || (decoded.userId as string) || '',
      email: (decoded.email as string) || '',
      fullName: (decoded.fullName as string) || (decoded.name as string) || '',
      status: (decoded.status as string) || 'ACTIVE',
      role: (decoded.role as string) || 'USER',
    });
  };

  // Check if user is authenticated on mount (restore session from localStorage)
  useEffect(() => {
    const checkAuth = async () => {
      const token = tokenStorage.getAccessToken();
      if (token) {
        try {
          const decoded = decodeJWT(token);
          if (!decoded) {
            tokenStorage.clearTokens();
            setUser(null);
            setIsLoading(false);
            return;
          }
          // Có exp: kiểm tra hết hạn và refresh nếu cần. Không có exp: coi token hợp lệ, set user (backend sẽ 401 nếu hết hạn).
          const hasExp = typeof decoded.exp === 'number';
          const notExpired = hasExp ? Date.now() < decoded.exp * 1000 : true;

          if (notExpired) {
            setUserFromDecoded(decoded);
            setIsLoading(false);
            return;
          }

          // Token hết hạn → thử refresh
          const refreshToken = tokenStorage.getRefreshToken();
          if (refreshToken) {
            try {
              await walletApi.auth.refreshToken(refreshToken);
              const newToken = tokenStorage.getAccessToken();
              if (newToken) {
                const newDecoded = decodeJWT(newToken);
                if (newDecoded) setUserFromDecoded(newDecoded);
              }
            } catch {
              tokenStorage.clearTokens();
              setUser(null);
            }
          } else {
            tokenStorage.clearTokens();
            setUser(null);
          }
        } catch (error) {
          console.error('Auth check error:', error);
          tokenStorage.clearTokens();
          setUser(null);
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  /**
   * Login với email và password
   */
  const login = async (credentials: LoginRequest): Promise<void> => {
    try {
      const authResponse = await walletApi.auth.login(credentials);
      // Ưu tiên user từ response (có fullName từ backend), fallback JWT decode
      const token = tokenStorage.getAccessToken();
      const nameFromApi = authResponse.fullName ?? authResponse.user?.fullName ?? '';
      if (token) {
        const decoded = decodeJWT(token);
        if (decoded) {
          setUser({
            id: authResponse.user?.id ?? (decoded.sub as string) ?? (decoded.userId as string) ?? '',
            email: authResponse.user?.email ?? (decoded.email as string) ?? credentials.email,
            fullName: nameFromApi || (decoded.fullName as string) || (decoded.name as string) || '',
            status: authResponse.user?.status ?? (decoded.status as string) ?? 'ACTIVE',
            role: authResponse.user?.role ?? (decoded.role as string) ?? 'USER',
          });
        } else {
          setUser({
            ...authResponse.user,
            fullName: nameFromApi || authResponse.user?.fullName || '',
          });
        }
      } else {
        setUser({
          ...authResponse.user,
          fullName: nameFromApi || authResponse.user?.fullName || '',
        });
      }
    } catch (error) {
      throw error;
    }
  };

  /**
   * Logout - clear tokens và user state
   */
  const logout = async (): Promise<void> => {
    try {
      await walletApi.auth.logout();
    } catch (error) {
      // Log error nhưng vẫn clear local state
      console.error('Logout error:', error);
    } finally {
      tokenStorage.clearTokens();
      setUser(null);
    }
  };

  /**
   * Refresh authentication - verify token và get user info
   */
  const refreshAuth = async (): Promise<void> => {
    const token = tokenStorage.getAccessToken();
    if (!token) {
      setUser(null);
      return;
    }

    try {
      // Decode JWT to get user info
      const decoded = decodeJWT(token);
      if (decoded && decoded.exp) {
        const expirationTime = decoded.exp * 1000;
        if (Date.now() < expirationTime) {
          setUserFromDecoded(decoded);
        } else {
          // Token expired, try refresh
          const refreshToken = tokenStorage.getRefreshToken();
          if (refreshToken) {
            await walletApi.auth.refreshToken(refreshToken);
            const newToken = tokenStorage.getAccessToken();
            if (newToken) {
              const newDecoded = decodeJWT(newToken);
              if (newDecoded) setUserFromDecoded(newDecoded);
            }
          } else {
            throw new Error('No refresh token');
          }
        }
      }
    } catch (error) {
      tokenStorage.clearTokens();
      setUser(null);
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    refreshAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
