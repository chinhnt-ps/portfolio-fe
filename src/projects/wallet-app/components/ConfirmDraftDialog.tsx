import { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Icon } from './icons';
import { AmountInput } from './AmountInput';
import type {
  ConfirmDraftData,
  Account,
  Category,
  TransactionDraft,
  ReceivableDraft,
  LiabilityDraft,
  SettlementDraft,
  BalanceAdjustmentDraft,
} from '../api/types';
import styled from 'styled-components';

/**
 * Parse date string from backend (GMT+7 with timezone) to local datetime string for input
 * Backend returns dates in format "YYYY-MM-DDTHH:mm:ss+07:00"
 * 
 * Strategy: Extract date/time components directly from the string (don't let JS convert to UTC)
 */
const parseVNDateToLocalInput = (dateString: string | undefined): string => {
  if (!dateString) return '';
  
  // Backend date is in format "YYYY-MM-DDTHH:mm:ss+07:00" (with timezone)
  // Extract components directly from string to avoid timezone conversion issues
  // Example: "2026-01-10T00:00:00+07:00" -> extract "2026-01-10T00:00"
  
  // Remove timezone part if present
  const dateStrWithoutTz = dateString.replace(/[+-]\d{2}:\d{2}$/, '').replace(/Z$/, '');
  
  // Extract date and time parts (format: YYYY-MM-DDTHH:mm:ss)
  const match = dateStrWithoutTz.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}):\d{2}$/);
  if (match) {
    const [, datePart, timePart] = match;
    return `${datePart}T${timePart}`;
  }
  
  // Fallback: try to parse and extract (but this may have timezone issues)
  const vnDate = new Date(dateString);
  const year = vnDate.getUTCFullYear();
  const month = String(vnDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(vnDate.getUTCDate()).padStart(2, '0');
  const hours = String(vnDate.getUTCHours()).padStart(2, '0');
  const minutes = String(vnDate.getUTCMinutes()).padStart(2, '0');
  
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

/**
 * Convert local datetime input value to ISO string (GMT+7, no timezone for backend)
 * Input format: "YYYY-MM-DDTHH:mm" (user input, treated as GMT+7)
 * Output: "YYYY-MM-DDTHH:mm:ss" (GMT+7 time, no timezone suffix - backend will parse as GMT+7)
 * 
 * Strategy: Extract directly from input string to avoid timezone conversion issues
 */
const convertLocalInputToVNISO = (inputValue: string): string => {
  if (!inputValue) {
    // Default to current time in GMT+7
    const now = new Date();
    // Get current time in GMT+7
    const vnOffset = 7 * 60; // GMT+7 in minutes
    const vnTime = new Date(now.getTime() + (vnOffset - now.getTimezoneOffset()) * 60000);
    return vnTime.toISOString().slice(0, 19); // Remove 'Z' and milliseconds
  }
  
  // User input is in format "YYYY-MM-DDTHH:mm" (treated as GMT+7)
  // Simply append ":00" to make it "YYYY-MM-DDTHH:mm:ss" (no timezone)
  // Backend will parse this as GMT+7 (assuming server timezone is GMT+7)
  return `${inputValue}:00`;
};

interface ConfirmDraftDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  draftData: ConfirmDraftData;
  accounts: Account[];
  categories: Category[];
  onConfirm: (draft: ConfirmDraftData['draft']) => Promise<void>;
  onCancel?: () => void;
}

/**
 * Dialog component for confirming and editing draft transaction
 */
export const ConfirmDraftDialog = ({
  open,
  onOpenChange,
  draftData,
  accounts,
  categories,
  onConfirm,
  onCancel,
}: ConfirmDraftDialogProps) => {
  const [draft, setDraft] = useState<ConfirmDraftData['draft'] | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (draftData && draftData.draft) {
      setDraft({ ...draftData.draft });
    }
  }, [draftData]);

  // Auto-focus vào input đầu tiên khi dialog mở
  useEffect(() => {
    if (open && firstInputRef.current) {
      // Delay một chút để đảm bảo dialog đã render xong
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);
    }
  }, [open]);

  const handleConfirm = async () => {
    if (!draft) return;
    
    setIsSubmitting(true);
    try {
      await onConfirm(draft);
      onOpenChange(false);
    } catch (error) {
      console.error('Error confirming draft:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    onOpenChange(false);
  };

  // Handle Escape key to close dialog
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open && !isSubmitting) {
        if (onCancel) {
          onCancel();
        } else {
          onOpenChange(false);
        }
      }
    };
    
    if (open) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [open, isSubmitting, onCancel, onOpenChange]);

  if (!draft || !draftData) {
    return null;
  }

  // Handle different draft types
  const isTransaction = draftData.draftType === 'TRANSACTION';
  const isReceivable = draftData.draftType === 'RECEIVABLE';
  const isLiability = draftData.draftType === 'LIABILITY';
  const isSettlement = draftData.draftType === 'SETTLEMENT';
  const isBalanceAdjustment = draftData.draftType === 'BALANCE_ADJUSTMENT';

  const transactionDraft = isTransaction ? (draft as TransactionDraft) : null;

  const receivableDraft = isReceivable ? (draft as ReceivableDraft) : null;

  const liabilityDraft = isLiability ? (draft as LiabilityDraft) : null;

  const settlementDraft = isSettlement ? (draft as SettlementDraft) : null;

  const balanceAdjustmentDraft = isBalanceAdjustment ? (draft as BalanceAdjustmentDraft) : null;

  const formatCurrency = (amount: number, currency: string = 'VND') => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const needConfirmFields = draftData.needConfirmFields || [];
  const autoFilledFields = draftData.autoFilledFields || [];

  const getDialogTitle = () => {
    switch (draftData.draftType) {
      case 'TRANSACTION':
        return 'Xác nhận giao dịch';
      case 'RECEIVABLE':
        return 'Xác nhận khoản cho vay';
      case 'LIABILITY':
        return 'Xác nhận khoản nợ';
      case 'SETTLEMENT':
        return settlementDraft?.type === 'RECEIVABLE' ? 'Xác nhận nhận tiền trả nợ' : 'Xác nhận trả nợ';
      case 'BALANCE_ADJUSTMENT':
        return 'Xác nhận điều chỉnh số dư';
      default:
        return 'Xác nhận';
    }
  };

  const canSubmit = () => {
    if (isTransaction && transactionDraft) {
      if (transactionDraft.type === 'TRANSFER') {
        return (
          !!transactionDraft.amount &&
          !!transactionDraft.fromAccountId &&
          !!transactionDraft.toAccountId &&
          transactionDraft.fromAccountId !== transactionDraft.toAccountId
        );
      }
      return !!transactionDraft.amount && !!transactionDraft.categoryId && !!transactionDraft.accountId;
    }
    if (isReceivable && receivableDraft) {
      return receivableDraft.amount && receivableDraft.counterpartyName;
    }
    if (isLiability && liabilityDraft) {
      return liabilityDraft.amount && liabilityDraft.counterpartyName;
    }
    if (isSettlement && settlementDraft) {
      return settlementDraft.amount && settlementDraft.accountId && 
             (settlementDraft.receivableId || settlementDraft.liabilityId);
    }
    if (isBalanceAdjustment && balanceAdjustmentDraft) {
      return !!balanceAdjustmentDraft.accountId && balanceAdjustmentDraft.targetBalance >= 0;
    }
    return false;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="confirm-draft-dialog" style={{ maxWidth: '500px' }}>
        <DialogHeader>
          <DialogTitle>{getDialogTitle()}</DialogTitle>
          <DialogDescription>
            {draftData.autoFilledFields && draftData.autoFilledFields.length > 0 && (
              <AutoFilledInfo>
                <Icon icon="CheckCircle" size={16} color="currentColor" />
                <span>Đã tự động điền {draftData.autoFilledFields.length} trường</span>
              </AutoFilledInfo>
            )}
          </DialogDescription>
        </DialogHeader>

        <DraftContent>
          {/* Transaction Form */}
          {isTransaction && transactionDraft && (
            <>
          {/* Amount */}
          <div className="draft-field">
            <Label>Số tiền</Label>
            {transactionDraft.amount ? (
              <div className="draft-value">
                {formatCurrency(transactionDraft.amount, transactionDraft.currency)}
                {autoFilledFields.find(f => f.field === 'amount') && (
                  <Badge variant="secondary" className="auto-filled-badge">Tự động</Badge>
                )}
              </div>
            ) : (
              <AmountInput
                value={transactionDraft.amount || 0}
                onChange={(value) => {
                  if (isTransaction && transactionDraft) {
                    setDraft({ ...transactionDraft, amount: value || undefined } as TransactionDraft);
                  }
                }}
                placeholder="Nhập số tiền"
              />
            )}
          </div>

          {/* Type */}
          <div className="draft-field">
            <Label>Loại giao dịch</Label>
            <Select
              value={transactionDraft.type || 'EXPENSE'}
              onValueChange={(value) => {
                if (isTransaction && transactionDraft) {
                  const nextType = value as 'EXPENSE' | 'INCOME' | 'TRANSFER';
                  setDraft({
                    ...transactionDraft,
                    type: nextType,
                    // TRANSFER không dùng categoryId/accountId
                    categoryId: nextType === 'TRANSFER' ? undefined : transactionDraft.categoryId,
                    categoryName: nextType === 'TRANSFER' ? undefined : transactionDraft.categoryName,
                    accountId: nextType === 'TRANSFER' ? undefined : transactionDraft.accountId,
                    accountName: nextType === 'TRANSFER' ? undefined : transactionDraft.accountName,
                  } as TransactionDraft);
                }
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="EXPENSE">Chi tiêu</SelectItem>
                <SelectItem value="INCOME">Thu nhập</SelectItem>
                <SelectItem value="TRANSFER">Chuyển khoản</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {transactionDraft.type === 'TRANSFER' ? (
            <>
              <div className="draft-field">
                <Label>Tài khoản nguồn <span className="required">*</span></Label>
                <Select
                  value={transactionDraft.fromAccountId || ''}
                  onValueChange={(value) => {
                    const account = accounts.find(a => a.id === value);
                    if (isTransaction && transactionDraft) {
                      setDraft({
                        ...transactionDraft,
                        fromAccountId: value,
                        fromAccountName: account?.name,
                        // Nếu chọn trùng, reset account đích để tránh invalid
                        toAccountId: transactionDraft.toAccountId === value ? undefined : transactionDraft.toAccountId,
                        toAccountName: transactionDraft.toAccountId === value ? undefined : transactionDraft.toAccountName,
                      } as TransactionDraft);
                    }
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn tài khoản nguồn" />
                  </SelectTrigger>
                  <SelectContent>
                    {accounts.map((account) => (
                      <SelectItem key={account.id} value={account.id}>
                        {account.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="draft-field">
                <Label>Tài khoản đích <span className="required">*</span></Label>
                <Select
                  value={transactionDraft.toAccountId || ''}
                  onValueChange={(value) => {
                    const account = accounts.find(a => a.id === value);
                    if (isTransaction && transactionDraft) {
                      setDraft({
                        ...transactionDraft,
                        toAccountId: value,
                        toAccountName: account?.name,
                      } as TransactionDraft);
                    }
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn tài khoản đích" />
                  </SelectTrigger>
                  <SelectContent>
                    {accounts
                      .filter((account) => account.id !== transactionDraft.fromAccountId)
                      .map((account) => (
                        <SelectItem key={account.id} value={account.id}>
                          {account.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </>
          ) : (
            <>
              {/* Category */}
              <div className="draft-field">
                <Label>Danh mục {needConfirmFields.includes('categoryId') && <span className="required">*</span>}</Label>
                <div className="draft-select-wrapper">
                  <Select
                    value={transactionDraft.categoryId || ''}
                    onValueChange={(value) => {
                      const category = categories.find(c => c.id === value);
                      if (isTransaction && transactionDraft) {
                        setDraft({
                          ...transactionDraft,
                          categoryId: value,
                          categoryName: category?.name,
                        } as TransactionDraft);
                      }
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn danh mục" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories
                        .filter(cat => !cat.isSystem || transactionDraft.type === 'EXPENSE' || transactionDraft.type === 'INCOME')
                        .map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  {autoFilledFields.find(f => f.field === 'categoryId') && (
                    <Badge variant="secondary" className="auto-filled-badge">Tự động</Badge>
                  )}
                </div>
              </div>

              {/* Account */}
              <div className="draft-field">
                <Label>Tài khoản {needConfirmFields.includes('accountId') && <span className="required">*</span>}</Label>
                {transactionDraft.accountId && transactionDraft.accountName ? (
                  <div className="draft-value">
                    {transactionDraft.accountName}
                    {autoFilledFields.find(f => f.field === 'accountId') && (
                      <Badge variant="secondary" className="auto-filled-badge">Tự động</Badge>
                    )}
                  </div>
                ) : (
                  <Select
                    value={transactionDraft.accountId || ''}
                    onValueChange={(value) => {
                      const account = accounts.find(a => a.id === value);
                      if (isTransaction && transactionDraft) {
                        setDraft({
                          ...transactionDraft,
                          accountId: value,
                          accountName: account?.name,
                        } as TransactionDraft);
                      }
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn tài khoản" />
                    </SelectTrigger>
                    <SelectContent>
                      {accounts.map((account) => (
                        <SelectItem key={account.id} value={account.id}>
                          {account.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
            </>
          )}

          {/* Note */}
          <div className="draft-field">
            <Label>Ghi chú</Label>
            <Input
              value={transactionDraft.note || ''}
              onChange={(e) => {
                if (isTransaction && transactionDraft) {
                  setDraft({ ...transactionDraft, note: e.target.value } as TransactionDraft);
                }
              }}
              placeholder="Nhập ghi chú (tùy chọn)"
            />
          </div>

          {/* Date */}
          <div className="draft-field">
            <Label>Ngày giao dịch</Label>
            <Input
              type="datetime-local"
              value={parseVNDateToLocalInput(transactionDraft.occurredAt)}
              onChange={(e) => {
                const value = e.target.value ? convertLocalInputToVNISO(e.target.value) : new Date().toISOString().slice(0, 19);
                if (isTransaction && transactionDraft) {
                  setDraft({ ...transactionDraft, occurredAt: value } as TransactionDraft);
                }
              }}
            />
          </div>
            </>
          )}

          {/* Receivable Form */}
          {isReceivable && receivableDraft && (
            <>
              <div className="draft-field">
                <Label>Người vay {needConfirmFields.includes('counterpartyName') && <span className="required">*</span>}</Label>
                {receivableDraft.counterpartyName ? (
                  <div className="draft-value">
                    {receivableDraft.counterpartyName}
                    {autoFilledFields.find(f => f.field === 'counterpartyName') && (
                      <Badge variant="secondary" className="auto-filled-badge">Tự động</Badge>
                    )}
                  </div>
                ) : (
                  <Input
                    value={receivableDraft.counterpartyName || ''}
                    onChange={(e) => {
                      if (isReceivable && receivableDraft) {
                        setDraft({ ...receivableDraft, counterpartyName: e.target.value } as ReceivableDraft);
                      }
                    }}
                    placeholder="Nhập tên người vay"
                  />
                )}
              </div>

              <div className="draft-field">
                <Label>Số tiền {needConfirmFields.includes('amount') && <span className="required">*</span>}</Label>
                {receivableDraft.amount ? (
                  <div className="draft-value">
                    {formatCurrency(receivableDraft.amount, receivableDraft.currency)}
                    {autoFilledFields.find(f => f.field === 'amount') && (
                      <Badge variant="secondary" className="auto-filled-badge">Tự động</Badge>
                    )}
                  </div>
                ) : (
                  <AmountInput
                    value={receivableDraft.amount || 0}
                    onChange={(value) => {
                      if (isReceivable && receivableDraft) {
                        setDraft({ ...receivableDraft, amount: value || 0 } as ReceivableDraft);
                      }
                    }}
                    placeholder="Nhập số tiền"
                  />
                )}
              </div>

              <div className="draft-field">
                <Label>Ngày cho vay</Label>
                <Input
                  type="datetime-local"
                  value={parseVNDateToLocalInput(receivableDraft.occurredAt)}
                  onChange={(e) => {
                    const value = e.target.value ? convertLocalInputToVNISO(e.target.value) : new Date().toISOString().slice(0, 19);
                    if (isReceivable && receivableDraft) {
                      setDraft({ ...receivableDraft, occurredAt: value } as ReceivableDraft);
                    }
                  }}
                />
              </div>

              <div className="draft-field">
                <Label>Ghi chú</Label>
                <Input
                  value={receivableDraft.note || ''}
                  onChange={(e) => {
                    if (isReceivable && receivableDraft) {
                      setDraft({ ...receivableDraft, note: e.target.value } as ReceivableDraft);
                    }
                  }}
                  placeholder="Nhập ghi chú (tùy chọn)"
                />
              </div>
            </>
          )}

          {/* Liability Form */}
          {isLiability && liabilityDraft && (
            <>
              <div className="draft-field">
                <Label>Người cho vay {needConfirmFields.includes('counterpartyName') && <span className="required">*</span>}</Label>
                {liabilityDraft.counterpartyName ? (
                  <div className="draft-value">
                    {liabilityDraft.counterpartyName}
                    {autoFilledFields.find(f => f.field === 'counterpartyName') && (
                      <Badge variant="secondary" className="auto-filled-badge">Tự động</Badge>
                    )}
                  </div>
                ) : (
                  <Input
                    value={liabilityDraft.counterpartyName || ''}
                    onChange={(e) => {
                      if (isLiability && liabilityDraft) {
                        setDraft({ ...liabilityDraft, counterpartyName: e.target.value } as LiabilityDraft);
                      }
                    }}
                    placeholder="Nhập tên người cho vay"
                  />
                )}
              </div>

              <div className="draft-field">
                <Label>Số tiền {needConfirmFields.includes('amount') && <span className="required">*</span>}</Label>
                {liabilityDraft.amount ? (
                  <div className="draft-value">
                    {formatCurrency(liabilityDraft.amount, liabilityDraft.currency)}
                    {autoFilledFields.find(f => f.field === 'amount') && (
                      <Badge variant="secondary" className="auto-filled-badge">Tự động</Badge>
                    )}
                  </div>
                ) : (
                  <AmountInput
                    value={liabilityDraft.amount || 0}
                    onChange={(value) => {
                      if (isLiability && liabilityDraft) {
                        setDraft({ ...liabilityDraft, amount: value || 0 } as LiabilityDraft);
                      }
                    }}
                    placeholder="Nhập số tiền"
                  />
                )}
              </div>

              <div className="draft-field">
                <Label>Ngày vay</Label>
                <Input
                  type="datetime-local"
                  value={parseVNDateToLocalInput(liabilityDraft.occurredAt)}
                  onChange={(e) => {
                    const value = e.target.value ? convertLocalInputToVNISO(e.target.value) : new Date().toISOString().slice(0, 19);
                    if (isLiability && liabilityDraft) {
                      setDraft({ ...liabilityDraft, occurredAt: value } as LiabilityDraft);
                    }
                  }}
                />
              </div>

              <div className="draft-field">
                <Label>Ghi chú</Label>
                <Input
                  value={liabilityDraft.note || ''}
                  onChange={(e) => {
                    if (isLiability && liabilityDraft) {
                      setDraft({ ...liabilityDraft, note: e.target.value } as LiabilityDraft);
                    }
                  }}
                  placeholder="Nhập ghi chú (tùy chọn)"
                />
              </div>
            </>
          )}

          {/* Settlement Form */}
          {isSettlement && settlementDraft && (
            <>
              <div className="draft-field">
                <Label>Loại {needConfirmFields.includes('type') && <span className="required">*</span>}</Label>
                <Select
                  value={settlementDraft.type || ''}
                  onValueChange={(value) => {
                    if (isSettlement && settlementDraft) {
                      setDraft({ 
                        ...settlementDraft, 
                        type: value as 'RECEIVABLE' | 'LIABILITY',
                        receivableId: value === 'RECEIVABLE' ? settlementDraft.receivableId : undefined,
                        liabilityId: value === 'LIABILITY' ? settlementDraft.liabilityId : undefined,
                      } as SettlementDraft);
                    }
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn loại" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="RECEIVABLE">Nhận tiền trả nợ</SelectItem>
                    <SelectItem value="LIABILITY">Trả nợ</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {settlementDraft.counterpartyName && (
                <div className="draft-field">
                  <Label>Người liên quan</Label>
                  <div className="draft-value">
                    {settlementDraft.counterpartyName}
                    {autoFilledFields.find(f => f.field === 'receivableId' || f.field === 'liabilityId') && (
                      <Badge variant="secondary" className="auto-filled-badge">Tự động</Badge>
                    )}
                  </div>
                </div>
              )}

              <div className="draft-field">
                <Label>Số tiền {needConfirmFields.includes('amount') && <span className="required">*</span>}</Label>
                {settlementDraft.amount ? (
                  <div className="draft-value">
                    {formatCurrency(settlementDraft.amount, settlementDraft.currency)}
                    {autoFilledFields.find(f => f.field === 'amount') && (
                      <Badge variant="secondary" className="auto-filled-badge">Tự động</Badge>
                    )}
                  </div>
                ) : (
                  <AmountInput
                    value={settlementDraft.amount || 0}
                    onChange={(value) => {
                      if (isSettlement && settlementDraft) {
                        setDraft({ ...settlementDraft, amount: value || 0 } as SettlementDraft);
                      }
                    }}
                    placeholder="Nhập số tiền"
                  />
                )}
              </div>

              <div className="draft-field">
                <Label>Tài khoản {needConfirmFields.includes('accountId') && <span className="required">*</span>}</Label>
                {settlementDraft.accountId && settlementDraft.accountName ? (
                  <div className="draft-value">
                    {settlementDraft.accountName}
                    {autoFilledFields.find(f => f.field === 'accountId') && (
                      <Badge variant="secondary" className="auto-filled-badge">Tự động</Badge>
                    )}
                  </div>
                ) : (
                  <Select
                    value={settlementDraft.accountId || ''}
                    onValueChange={(value) => {
                      const account = accounts.find(a => a.id === value);
                      if (isSettlement && settlementDraft) {
                        setDraft({
                          ...settlementDraft,
                          accountId: value,
                          accountName: account?.name,
                        } as SettlementDraft);
                      }
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn tài khoản" />
                    </SelectTrigger>
                    <SelectContent>
                      {accounts.map((account) => (
                        <SelectItem key={account.id} value={account.id}>
                          {account.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>

              <div className="draft-field">
                <Label>Ngày thanh toán</Label>
                <Input
                  type="datetime-local"
                  value={parseVNDateToLocalInput(settlementDraft.settledAt)}
                  onChange={(e) => {
                    const value = e.target.value ? convertLocalInputToVNISO(e.target.value) : new Date().toISOString().slice(0, 19);
                    if (isSettlement && settlementDraft) {
                      setDraft({ ...settlementDraft, settledAt: value } as SettlementDraft);
                    }
                  }}
                />
              </div>

              <div className="draft-field">
                <Label>Ghi chú</Label>
                <Input
                  value={settlementDraft.note || ''}
                  onChange={(e) => {
                    if (isSettlement && settlementDraft) {
                      setDraft({ ...settlementDraft, note: e.target.value } as SettlementDraft);
                    }
                  }}
                  placeholder="Nhập ghi chú (tùy chọn)"
                />
              </div>
            </>
          )}

          {/* Balance Adjustment Form */}
          {isBalanceAdjustment && balanceAdjustmentDraft && (
            <>
              <div className="draft-field">
                <Label>Tài khoản {needConfirmFields.includes('accountId') && <span className="required">*</span>}</Label>
                {balanceAdjustmentDraft.accountId && balanceAdjustmentDraft.accountName ? (
                  <div className="draft-value">
                    {balanceAdjustmentDraft.accountName}
                    {autoFilledFields.find((f) => f.field === 'accountId') && (
                      <Badge variant="secondary" className="auto-filled-badge">
                        Tự động
                      </Badge>
                    )}
                  </div>
                ) : (
                  <Select
                    value={balanceAdjustmentDraft.accountId || ''}
                    onValueChange={(value) => {
                      const account = accounts.find((a) => a.id === value);
                      if (isBalanceAdjustment && balanceAdjustmentDraft) {
                        setDraft({
                          ...balanceAdjustmentDraft,
                          accountId: value,
                          accountName: account?.name,
                        } as BalanceAdjustmentDraft);
                      }
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn tài khoản" />
                    </SelectTrigger>
                    <SelectContent>
                      {accounts.map((account) => (
                        <SelectItem key={account.id} value={account.id}>
                          {account.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>

              <div className="draft-field">
                <Label>Số dư thực tế sau điều chỉnh <span className="required">*</span></Label>
                <AmountInput
                  value={
                    typeof balanceAdjustmentDraft.targetBalance === 'number'
                      ? balanceAdjustmentDraft.targetBalance
                      : 0
                  }
                  onChange={(value) => {
                    if (isBalanceAdjustment && balanceAdjustmentDraft) {
                      setDraft({
                        ...balanceAdjustmentDraft,
                        targetBalance: value,
                      } as BalanceAdjustmentDraft);
                    }
                  }}
                  placeholder="Nhập số dư thực tế"
                  min={0}
                />
              </div>

              <div className="draft-field">
                <Label>Ghi chú</Label>
                <Input
                  value={balanceAdjustmentDraft.note || ''}
                  onChange={(e) => {
                    if (isBalanceAdjustment && balanceAdjustmentDraft) {
                      setDraft({
                        ...balanceAdjustmentDraft,
                        note: e.target.value,
                      } as BalanceAdjustmentDraft);
                    }
                  }}
                  placeholder="Nhập lý do điều chỉnh (tùy chọn)"
                />
              </div>
            </>
          )}
        </DraftContent>

        <DialogFooter>
          <Button 
            variant="outline" 
            onClick={handleCancel} 
            disabled={isSubmitting}
            tabIndex={-1}
          >
            Hủy
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={isSubmitting || !canSubmit()}
            tabIndex={-1}
          >
            {isSubmitting ? (
              <>
                <Icon icon="Loader" size={16} color="currentColor" className="animate-spin" />
                <span>Đang tạo...</span>
              </>
            ) : (
              <span>Xác nhận</span>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const AutoFilledInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #10b981;
  font-size: 14px;
  margin-top: 8px;
  padding: 8px 12px;
  background: #f0fdf4;
  border-radius: 6px;
  border: 1px solid #bbf7d0;
`;

const DraftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* margin: 24px 0; */

  .draft-field {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      font-size: 14px;
      font-weight: 500;
      color: #1f2937;
      margin-bottom: 4px;

      .required {
        color: #ef4444;
        margin-left: 2px;
      }
    }

    .draft-value {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 12px;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      font-size: 14px;
      color: #1f2937;
      min-height: 40px;

      .auto-filled-badge {
        font-size: 12px;
        padding: 2px 8px;
        background: #ecfdf5;
        color: #059669;
        border-radius: 4px;
        font-weight: 500;
      }
    }

    .draft-select-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;

      .auto-filled-badge {
        font-size: 12px;
        padding: 2px 8px;
        background: #ecfdf5;
        color: #059669;
        border-radius: 4px;
        font-weight: 500;
        white-space: nowrap;
      }
    }

    /* Style date/datetime-local input calendar icon for dark mode */
    input[type="date"],
    input[type="datetime-local"] {
      &::-webkit-calendar-picker-indicator {
        cursor: pointer;
        opacity: 0.7;
        filter: ${({ theme }) => 
          theme.colors.background === '#0a0a0a' || theme.colors.background === '#1a1a1a'
            ? 'invert(1) brightness(1.2)' 
            : 'none'};
      }

      &::-webkit-calendar-picker-indicator:hover {
        opacity: 1;
      }
    }
  }
`;
