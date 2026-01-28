import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useWalletAppRouter } from '../../App';
import { walletApi } from '../../api/walletApi';
import { handleApiError } from '../../api/walletApi';
import { useAccounts, useCategories } from '../../api/hooks';
import { Icon } from '../../components/icons';
import { NLPInput } from '../../components/NLPInput';
import { ConfirmDraftDialog } from '../../components/ConfirmDraftDialog';
import { useToast } from '@/hooks/use-toast';
import { removeTimezoneFromDate } from '../../utils/formatters';
import type {
  NLPResponse,
  ConfirmDraftData,
  TransactionDraft,
  ReceivableDraft,
  LiabilityDraft,
  SettlementDraft,
  BalanceAdjustmentDraft,
} from '../../api/types';

interface QuickAddTransactionProps {
  onTransactionCreated?: () => void;
}

/**
 * QuickAddTransaction Component
 * 
 * Section 3: Thêm giao dịch mới (NLP + manual)
 */
export const QuickAddTransaction = ({ onTransactionCreated }: QuickAddTransactionProps) => {
  const { t } = useTranslation();
  const { navigate } = useWalletAppRouter();
  const { toast } = useToast();
  
  // SWR hooks for data needed in draft dialog
  const { accounts, refresh: refreshAccounts, adjustAccountBalance } = useAccounts();
  const { categories, refresh: refreshCategories } = useCategories();
  
  // NLP state
  const [isParsing, setIsParsing] = useState(false);
  const [nlpResponse, setNlpResponse] = useState<NLPResponse | null>(null);
  const [showDraftDialog, setShowDraftDialog] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleParseText = useCallback(async (text: string) => {
    setIsParsing(true);
    setNlpResponse(null);
    setError(null);
    
    try {
      const response = await walletApi.nlp.parseTransaction(text);
      setNlpResponse(response);
      
      if (response.responseType === 'CONFIRM_DRAFT') {
        setShowDraftDialog(true);
      }
    } catch (err) {
      const errorMessage = handleApiError(err);
      setNlpResponse({
        responseType: 'ERROR',
        intent: 'UNKNOWN',
        confidence: 0,
        message: errorMessage,
        data: {
          code: 'PARSE_ERROR',
          message: errorMessage,
          details: undefined,
        },
      });
    } finally {
      setIsParsing(false);
    }
  }, []);

  const handleConfirmDraft = useCallback(async (draft: ConfirmDraftData['draft']) => {
    try {
      if (!draft || typeof draft !== 'object') {
        throw new Error('Invalid draft data');
      }
      
      if (!nlpResponse || nlpResponse.responseType !== 'CONFIRM_DRAFT') {
        throw new Error('Invalid response type');
      }
      
      const confirmData = nlpResponse.data as ConfirmDraftData;
      
      if (confirmData.draftType === 'TRANSACTION') {
        const transactionDraft = draft as TransactionDraft;

        if (!transactionDraft.amount) {
          throw new Error('Thiếu thông tin bắt buộc: số tiền');
        }

        const occurredAt = removeTimezoneFromDate(transactionDraft.occurredAt);

        if (transactionDraft.type === 'TRANSFER') {
          if (!transactionDraft.fromAccountId || !transactionDraft.toAccountId) {
            throw new Error('Thiếu thông tin bắt buộc: tài khoản nguồn và đích');
          }
          await walletApi.transactions.create({
            type: 'TRANSFER',
            amount: transactionDraft.amount,
            currency: transactionDraft.currency || 'VND',
            occurredAt,
            fromAccountId: transactionDraft.fromAccountId,
            toAccountId: transactionDraft.toAccountId,
            note: transactionDraft.note,
          });
        } else {
          if (!transactionDraft.accountId || !transactionDraft.categoryId) {
            throw new Error('Thiếu thông tin bắt buộc: tài khoản và danh mục');
          }
          await walletApi.transactions.create({
            type: transactionDraft.type,
            amount: transactionDraft.amount,
            currency: transactionDraft.currency || 'VND',
            occurredAt,
            categoryId: transactionDraft.categoryId,
            accountId: transactionDraft.accountId,
            note: transactionDraft.note,
          });
        }

        toast({
          title: 'Thành công',
          description: 'Đã tạo giao dịch thành công',
        });
      } else if (confirmData.draftType === 'RECEIVABLE') {
        const receivableDraft = draft as ReceivableDraft;
        
        if (!receivableDraft.amount || !receivableDraft.counterpartyName) {
          throw new Error('Thiếu thông tin bắt buộc: số tiền và tên người vay');
        }
        
        await walletApi.receivables.create({
          counterpartyName: receivableDraft.counterpartyName,
          amount: receivableDraft.amount,
          currency: receivableDraft.currency || 'VND',
          occurredAt: removeTimezoneFromDate(receivableDraft.occurredAt),
          dueAt: receivableDraft.dueAt ? removeTimezoneFromDate(receivableDraft.dueAt) : undefined,
          note: receivableDraft.note,
        });
        
        toast({
          title: 'Thành công',
          description: 'Đã tạo khoản cho vay thành công',
        });
      } else if (confirmData.draftType === 'LIABILITY') {
        const liabilityDraft = draft as LiabilityDraft;
        
        if (!liabilityDraft.amount || !liabilityDraft.counterpartyName) {
          throw new Error('Thiếu thông tin bắt buộc: số tiền và tên người cho vay');
        }
        
        await walletApi.liabilities.create({
          counterpartyName: liabilityDraft.counterpartyName,
          amount: liabilityDraft.amount,
          currency: liabilityDraft.currency || 'VND',
          occurredAt: removeTimezoneFromDate(liabilityDraft.occurredAt),
          dueAt: liabilityDraft.dueAt ? removeTimezoneFromDate(liabilityDraft.dueAt) : undefined,
          note: liabilityDraft.note,
        });
        
        toast({
          title: 'Thành công',
          description: 'Đã tạo khoản nợ thành công',
        });
      } else if (confirmData.draftType === 'SETTLEMENT') {
        const settlementDraft = draft as SettlementDraft;
        
        if (!settlementDraft.amount || !settlementDraft.accountId || 
            (!settlementDraft.receivableId && !settlementDraft.liabilityId)) {
          throw new Error('Thiếu thông tin bắt buộc: số tiền, tài khoản và khoản nợ/khoản cho vay');
        }
        
        await walletApi.settlements.create({
          type: settlementDraft.type === 'RECEIVABLE' ? 'RECEIVABLE' : 'LIABILITY',
          receivableId: settlementDraft.receivableId,
          liabilityId: settlementDraft.liabilityId,
          amount: settlementDraft.amount,
          currency: settlementDraft.currency || 'VND',
          occurredAt: removeTimezoneFromDate(settlementDraft.settledAt),
          note: settlementDraft.note,
        });
        
        toast({
          title: 'Thành công',
          description: 'Đã thanh toán thành công',
        });
      } else if (confirmData.draftType === 'BALANCE_ADJUSTMENT') {
        const balanceDraft = draft as BalanceAdjustmentDraft;

        if (!balanceDraft.accountId) {
          throw new Error('Thiếu thông tin bắt buộc: tài khoản cần điều chỉnh');
        }
        if (balanceDraft.targetBalance == null || balanceDraft.targetBalance < 0) {
          throw new Error('Thiếu hoặc sai số dư thực tế');
        }

        await adjustAccountBalance(
          balanceDraft.accountId,
          balanceDraft.targetBalance,
          balanceDraft.note
        );

        toast({
          title: 'Thành công',
          description: 'Đã điều chỉnh số dư tài khoản',
        });
      }
      
      // Refresh data
      refreshAccounts();
      refreshCategories();
      onTransactionCreated?.();
      
      setShowDraftDialog(false);
      setNlpResponse(null);
    } catch (err) {
      const errorMessage = handleApiError(err);
      setError(errorMessage);
      throw err;
    }
  }, [nlpResponse, toast, refreshAccounts, refreshCategories, onTransactionCreated]);

  return (
    <QuickAddTransactionWrapper className="quick-add-transaction">
      <div className="section-header">
        <h2 className="section-title">{t('wallet.dashboard.addTransaction') || 'Thêm giao dịch mới'}</h2>
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="add-transaction-section">
            <NLPInput
              onParse={handleParseText}
              isLoading={isParsing}
              placeholder={t('wallet.dashboard.commandPlaceholder') || 'Nhập lệnh... (ví dụ: "ăn bún 50k", "cho Nam vay 2tr")'}
              error={nlpResponse?.responseType === 'ERROR' ? nlpResponse.message : (error || null)}
            />
            <Button onClick={() => navigate('transactions/add')} className="gap-2">
              <Icon icon="Add" size={18} color="currentColor" />
              <span>{t('wallet.dashboard.addManualTransaction') || 'Thêm giao dịch thủ công'}</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Confirm Draft Dialog */}
      {nlpResponse && nlpResponse.responseType === 'CONFIRM_DRAFT' && (
        <ConfirmDraftDialog
          open={showDraftDialog}
          onOpenChange={setShowDraftDialog}
          draftData={nlpResponse.data as ConfirmDraftData}
          accounts={accounts}
          categories={categories}
          onConfirm={handleConfirmDraft}
          onCancel={() => {
            setNlpResponse(null);
            setShowDraftDialog(false);
          }}
        />
      )}
    </QuickAddTransactionWrapper>
  );
};

const QuickAddTransactionWrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing[10]};

  .section-header {
    margin-bottom: ${({ theme }) => theme.spacing[6]};
  }

  .section-title {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    letter-spacing: -0.01em;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    }
  }

  .add-transaction-section {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[4]};

    button {
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: ${({ theme }) => theme.spacing[2]};
      border-radius: ${({ theme }) => theme.borderRadius.lg};
    }
  }
`;

export default QuickAddTransaction;
