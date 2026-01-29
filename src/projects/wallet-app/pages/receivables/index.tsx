import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { walletApi, handleApiError } from '../../api/walletApi';
import { useAccounts } from '../../api/hooks';
import type { Receivable, PaginatedResponse } from '../../api/types';
import { Icon } from '../../components/icons';
import { ReceivableCard } from './ReceivableCard';
import { ReceivableModal } from './ReceivableModal';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';

/**
 * Receivables Page
 * 
 * Quản lý các khoản cho vay (CRUD)
 */
export const Receivables = () => {
  const { accounts } = useAccounts();
  
  const [receivables, setReceivables] = useState<Receivable[]>([]);
  const [pagination, setPagination] = useState<PaginatedResponse<Receivable> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReceivable, setEditingReceivable] = useState<Receivable | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const loadReceivables = useCallback(async (page: number = 0) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await walletApi.receivables.getAll(page, 10);
      setReceivables(result.content);
      setPagination(result);
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadReceivables(currentPage);
  }, [currentPage, loadReceivables]);

  const handleOpenModal = (receivable?: Receivable) => {
    setEditingReceivable(receivable || null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingReceivable(null);
  };

  const handleSuccess = () => {
    loadReceivables(currentPage);
  };

  const handleDelete = async (receivable: Receivable) => {
    if (!window.confirm(`Bạn có chắc muốn xóa khoản cho vay "${receivable.counterpartyName}"?`)) {
      return;
    }

    try {
      await walletApi.receivables.delete(receivable.id);
      await loadReceivables(currentPage);
    } catch (err) {
      setError(handleApiError(err));
    }
  };

  if (isLoading && receivables.length === 0) {
    return (
      <ReceivablesWrapper>
        <div className="header">
          <h1 className="title">Cho vay</h1>
          <Button onClick={() => handleOpenModal()} className="gap-2">
            <Icon icon="Add" size={18} color="currentColor" />
            <span>Thêm khoản cho vay</span>
          </Button>
        </div>
        <div className="loading-state">
          <Skeleton className="h-8 w-48 mb-4" />
          <Skeleton className="h-32 w-full" />
        </div>
      </ReceivablesWrapper>
    );
  }

  return (
    <ReceivablesWrapper>
      <div className="header">
        <h1 className="title">Cho vay</h1>
        <Button onClick={() => handleOpenModal()} className="gap-2">
          <Icon icon="Add" size={18} color="currentColor" />
          <span>Thêm khoản cho vay</span>
        </Button>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {receivables.length === 0 ? (
        <div className="empty-state">
          <p>Chưa có khoản cho vay nào</p>
          <Button onClick={() => handleOpenModal()} className="gap-2">
            <Icon icon="Add" size={18} color="currentColor" />
            <span>Thêm khoản cho vay đầu tiên</span>
          </Button>
        </div>
      ) : (
        <>
          <div className="receivables-grid">
            {receivables.map((receivable) => (
              <ReceivableCard
                key={receivable.id}
                receivable={receivable}
                onClick={() => handleOpenModal(receivable)}
                onEdit={() => handleOpenModal(receivable)}
                onDelete={() => handleDelete(receivable)}
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

      <ReceivableModal
        open={isModalOpen}
        onOpenChange={handleCloseModal}
        receivable={editingReceivable}
        accounts={accounts}
        onSuccess={handleSuccess}
      />
    </ReceivablesWrapper>
  );
};

const ReceivablesWrapper = styled.div`
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

  .receivables-grid {
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

export default Receivables;
