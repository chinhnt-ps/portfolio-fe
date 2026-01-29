import { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';
import { API_CONFIG } from '@/config/api.config';
import { Icon } from '../../components/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

/**
 * Settings Page
 * 
 * Cài đặt: thông tin user, sync status, categories, accounts management
 */
export const Settings = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSync = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement sync
      alert('Tính năng sync đang được phát triển');
    } catch (error) {
      console.error('Sync error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SettingsWrapper className="settings-wrapper">
      <h1 className="title">Cài đặt</h1>

      {/* User Info */}
      <section className="section">
        <h2 className="section-title">Thông tin tài khoản</h2>
        <Card className="card">
          <CardContent className="p-6">
            <div className="info-row">
              <span className="info-label">Email</span>
              <span className="info-value">{user?.email || '-'}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Họ tên</span>
              <span className="info-value">{user?.fullName || '-'}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Trạng thái</span>
              <Badge variant={user?.status === 'ACTIVE' ? 'default' : 'secondary'} className={`status-badge status-badge--${user?.status === 'ACTIVE' ? 'active' : 'inactive'}`}>
                {user?.status || 'UNKNOWN'}
              </Badge>
            </div>
            <div className="info-row">
              <span className="info-label">Vai trò</span>
              <span className="info-value">{user?.role || '-'}</span>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sync Status */}
      <section className="section">
        <h2 className="section-title">Đồng bộ dữ liệu</h2>
        <Card className="card">
          <CardContent className="p-6">
            <div className="info-row">
              <span className="info-label">Trạng thái</span>
              <Badge variant="default" className="status-badge status-badge--active">Đã kết nối</Badge>
            </div>
            <div className="info-row">
              <span className="info-label">API Environment</span>
              <span className="info-value">{API_CONFIG.MODE}</span>
            </div>
            <div className="info-row">
              <span className="info-label">API Base URL</span>
              <span className="info-value" style={{ fontSize: '12px', wordBreak: 'break-all' }}>
                {API_CONFIG.BASE_URL}
              </span>
            </div>
            <div style={{ marginTop: '16px' }}>
              <Button className="sync-button" onClick={handleSync} disabled={isLoading}>
                {isLoading ? 'Đang đồng bộ...' : '🔄 Đồng bộ ngay'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quick Links */}
      <section className="section">
        <h2 className="section-title">Quản lý</h2>
        <Card className="card">
          <CardContent className="p-6">
            <div className="info-row info-row--clickable" onClick={() => {
              window.location.hash = '#accounts';
            }}>
              <span className="info-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Icon icon="Accounts" size={16} color="currentColor" />
                <span>Tài khoản</span>
              </span>
              <span className="info-value">→</span>
            </div>
            <div className="info-row info-row--clickable" onClick={() => {
              window.location.hash = '#categories';
            }}>
              <span className="info-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Icon icon="Categories" size={16} color="currentColor" />
                <span>Danh mục</span>
              </span>
              <span className="info-value">→</span>
            </div>
          </CardContent>
        </Card>
      </section>
    </SettingsWrapper>
  );
};

const SettingsWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;

  .title {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0 0 ${({ theme }) => theme.spacing[8]} 0;
  }

  .section {
    margin-bottom: ${({ theme }) => theme.spacing[8]};

    .section-title {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
      color: ${({ theme }) => theme.colors.text.primary};
      margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;
    }

    .card {
      padding: ${({ theme }) => theme.spacing[6]};
      background: ${({ theme }) => theme.colors.surface};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.borderRadius.lg};
      box-shadow: ${({ theme }) => theme.shadows.md};

      .info-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${({ theme }) => theme.spacing[3]} 0;
        border-bottom: 1px solid ${({ theme }) => theme.colors.border};

        &:last-child {
          border-bottom: none;
        }

        &--clickable {
          cursor: pointer;
        }

        .info-label {
          font-size: ${({ theme }) => theme.typography.fontSize.base};
          color: ${({ theme }) => theme.colors.text.secondary};
        }

        .info-value {
          font-size: ${({ theme }) => theme.typography.fontSize.base};
          font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
          color: ${({ theme }) => theme.colors.text.primary};
        }
      }

      .status-badge {
        padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
        border-radius: ${({ theme }) => theme.borderRadius.sm};
        font-size: ${({ theme }) => theme.typography.fontSize.xs};
        font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

        &--active {
          background: ${({ theme }) => (theme.colors.success?.[500] || '#10b981') + '20'};
          color: ${({ theme }) => theme.colors.success?.[500] || '#10b981'};
        }

        &--inactive {
          background: ${({ theme }) => (theme.colors.error || '#ef4444') + '20'};
          color: ${({ theme }) => theme.colors.error || '#ef4444'};
        }
      }
    }
  }
`;

export default Settings;
