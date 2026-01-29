import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { walletApi, handleApiError } from '../../api/walletApi';
import { useAccounts } from '../../api/hooks';
import type { Liability, PaginatedResponse } from '../../api/types';
import { Icon } from '../../components/icons';
import { LiabilityCard } from './LiabilityCard';
import { LiabilityModal } from './LiabilityModal';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';

/**
 * Liabilities Page
 * 
 * Quản lý các khoản nợ (CRUD)
 */
export const Liabilities = () => {
  const { accounts } = useAccounts();
  
  const [liabilities, setLiabilities] = useState<Liability[]>([]);
  const [pagination, setPagination] = useState<PaginatedResponse<Liability> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLiability, setEditingLiability] = useState<Liability | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const loadLiabilities = useCallback(async (page: number = 0) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await walletApi.liabilities.getAll(page, 10);
      setLiabilities(result.content);
      setPagination(result);
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadLiabilities(currentPage);
  }, [currentPage, loadLiabilities]);

  const handleOpenModal = (liability?: Liability) => {
    setEditingLiability(liability || null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingLiability(null);
  };

  const handleSuccess = () => {
    loadLiabilities(currentPage);
  };

  const handleDelete = async (liability: Liability) => {
    if (!window.confirm(`Bạn có chắc muốn xóa khoản nợ "${liability.counterpartyName}"?`)) {
      return;
    }

    try {
      await walletApi.liabilities.delete(liability.id);
      await loadLiabilities(currentPage);
    } catch (err) {
      setError(handleApiError(err));
    }
  };

  if (isLoading && liabilities.length === 0) {
    return (
      <LiabilitiesWrapper>
        <div className="header">
          <h1 className="title">Nợ</h1>
          <Button onClick={() => handleOpenModal()} className="gap-2">
            <Icon icon="Add" size={18} color="currentColor" />
            <span>Thêm khoản nợ</span>
          </Button>
        </div>
        <div className="loading-state">
          <Skeleton className="h-8 w-48 mb-4" />
          <Skeleton className="h-32 w-full" />
        </div>
      </LiabilitiesWrapper>
    );
  }

  return (
    <LiabilitiesWrapper>
      <div className="header">
        <h1 className="title">Nợ</h1>
        <Button onClick={() => handleOpenModal()} className="gap-2">
          <Icon icon="Add" size={18} color="currentColor" />
          <span>Thêm khoản nợ</span>
        </Button>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {liabilities.length === 0 ? (
        <div className="empty-state">
          <p>Chưa có khoản nợ nào</p>
          <Button onClick={() => handleOpenModal()} className="gap-2">
            <Icon icon="Add" size={18} color="currentColor" />
            <span>Thêm khoản nợ đầu tiên</span>
          </Button>
        </div>
      ) : (
        <>
          <div className="liabilities-grid">
            {liabilities.map((liability) => (
              <LiabilityCard
                key={liability.id}
                liability={liability}
                onClick={() => handleOpenModal(liability)}
                onEdit={() => handleOpenModal(liability)}
                onDelete={() => handleDelete(liability)}
              />
            ))}
          </div>

          {pagination && pagination.totalPages > 1 && (
            <div className="pagination">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(pagination.page - 1)}
                disabled={!pagination.hasPrevious}
              >
                ← Trước
              </Button>
              <span>
                Trang {pagination.page + 1} / {pagination.totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() => setCurrentPage(pagination.page + 1)}
                disabled={!pagination.hasNext}
              >
                Sau →
              </Button>
            </div>
          )}
        </>
      )}

      <LiabilityModal
        open={isModalOpen}
        onOpenChange={handleCloseModal}
        liability={editingLiability}
        accounts={accounts}
        onSuccess={handleSuccess}
      />
    </LiabilitiesWrapper>
  );
};

const LiabilitiesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing[4]};

    .title {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
      color: ${({ theme }) => theme.colors.text.primary};
      margin: 0;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
      }
    }
  }

  .loading-state {
    padding: ${({ theme }) => theme.spacing[8]};
  }

  .empty-state {
    padding: ${({ theme }) => theme.spacing[12]};
    text-align: center;
    color: ${({ theme }) => theme.colors.text.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[4]};

    p {
      font-size: ${({ theme }) => theme.typography.fontSize.lg};
      margin: 0;
    }
  }

  .liabilities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${({ theme }) => theme.spacing[4]};
    margin-bottom: ${({ theme }) => theme.spacing[6]};
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing[4]};
    margin-top: ${({ theme }) => theme.spacing[8]};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export default Liabilities;
