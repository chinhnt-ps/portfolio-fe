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

  // Check if user is authenticated on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = tokenStorage.getAccessToken();
      if (token) {
        try {
          // Decode JWT to get user info
          const decoded = decodeJWT(token);
          if (decoded && decoded.exp) {
            // Check if token is expired
            const expirationTime = decoded.exp * 1000; // Convert to milliseconds
            if (Date.now() < expirationTime) {
              // Token is valid, extract user info
              setUser({
                id: decoded.sub || decoded.userId || '',
                email: decoded.email || '',
                fullName: decoded.fullName || decoded.name || 'User',
                status: decoded.status || 'ACTIVE',
                role: decoded.role || 'USER',
              });
            } else {
              // Token expired, try to refresh
              const refreshToken = tokenStorage.getRefreshToken();
              if (refreshToken) {
                try {
                  await walletApi.auth.refreshToken(refreshToken);
                  // After refresh, decode new token
                  const newToken = tokenStorage.getAccessToken();
                  if (newToken) {
                    const newDecoded = decodeJWT(newToken);
                    if (newDecoded) {
                      setUser({
                        id: newDecoded.sub || newDecoded.userId || '',
                        email: newDecoded.email || '',
                        fullName: newDecoded.fullName || newDecoded.name || 'User',
                        status: newDecoded.status || 'ACTIVE',
                        role: newDecoded.role || 'USER',
                      });
                    }
                  }
                } catch (refreshError) {
                  // Refresh failed, clear tokens
                  tokenStorage.clearTokens();
                  setUser(null);
                }
              } else {
                // No refresh token, clear
                tokenStorage.clearTokens();
                setUser(null);
              }
            }
          }
        } catch (error) {
          // Token invalid, clear it
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
      // Decode JWT to get user info (in case user object is not in response)
      const token = tokenStorage.getAccessToken();
      if (token) {
        const decoded = decodeJWT(token);
        if (decoded) {
          setUser({
            id: authResponse.user?.id || decoded.sub || decoded.userId || '',
            email: authResponse.user?.email || decoded.email || credentials.email,
            fullName: authResponse.user?.fullName || decoded.fullName || decoded.name || 'User',
            status: authResponse.user?.status || decoded.status || 'ACTIVE',
            role: authResponse.user?.role || decoded.role || 'USER',
          });
        } else {
          // Fallback to response user if JWT decode fails
          setUser(authResponse.user);
        }
      } else {
        setUser(authResponse.user);
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
          setUser({
            id: decoded.sub || decoded.userId || '',
            email: decoded.email || '',
            fullName: decoded.fullName || decoded.name || 'User',
            status: decoded.status || 'ACTIVE',
            role: decoded.role || 'USER',
          });
        } else {
          // Token expired, try refresh
          const refreshToken = tokenStorage.getRefreshToken();
          if (refreshToken) {
            await walletApi.auth.refreshToken(refreshToken);
            const newToken = tokenStorage.getAccessToken();
            if (newToken) {
              const newDecoded = decodeJWT(newToken);
              if (newDecoded) {
                setUser({
                  id: newDecoded.sub || newDecoded.userId || '',
                  email: newDecoded.email || '',
                  fullName: newDecoded.fullName || newDecoded.name || 'User',
                  status: newDecoded.status || 'ACTIVE',
                  role: newDecoded.role || 'USER',
                });
              }
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
