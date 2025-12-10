import type { Transaction } from '../../types/transaction';

export interface TransactionModalProps {
  onClose: () => void;
  onAddTransaction: (transaction: Transaction) => void;
  transactions: Transaction[];
}
