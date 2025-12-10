import styles from './TransactionButton.module.css';
import transaction from '../../assets/svg/transaction.svg';
import type { Transaction } from '../../types/transaction';
import type { TransactionButtonProps } from './TransactionButton.types';

export function TransactionButton({ onClick }: TransactionButtonProps) {
  const handleButtonClick = () => {
    const newTransaction: Transaction = {
      amount: 30.0,
      type: '+',
      name: '',
      date: '',
      category: '',
    };
    onClick(newTransaction);
  };

  return (
    <button onClick={handleButtonClick} className={styles.transactionBtn}>
      <img
        className={styles.transactionIcon}
        src={transaction}
        alt="Transaction Icon"
      />
      TRANSAÇÃO
    </button>
  );
}
