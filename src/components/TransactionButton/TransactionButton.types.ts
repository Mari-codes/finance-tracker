import type { Transaction } from '../../types/transaction';

export interface TransactionButtonProps {
  onClick: (transaction: Transaction) => void;
}
