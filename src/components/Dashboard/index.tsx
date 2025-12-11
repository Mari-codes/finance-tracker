import { useState, useCallback } from 'react';
import { Card } from '../Card';
import up from '../../assets/svg/up.svg';
import down from '../../assets/svg/down.svg';
import styles from './Dashboard.module.css';
import type { Transaction } from '../../types/transaction';
import { initialTransactions } from '../../data/transactions';
import { TransactionButton } from '../TransactionButton';
import { TransactionModal } from '../Modal';
import { TransactionHistory } from '../TransactionHistory';
import { useTotals } from '../../hooks/useTotals';

export function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactions, setTransactions] =
    useState<Transaction[]>(initialTransactions);

  const addTransaction = useCallback((transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
    setIsModalOpen(false);
  }, []);

  const { entradas, saidas, saldo } = useTotals(transactions);

  const cards = [
    { svg: up, title: 'Entradas', value: entradas },
    { svg: down, title: 'Saídas', value: saidas },
    { symbol: '$', title: 'Saldo', value: saldo },
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.cardContainer}>
        {cards.map((c, i) => (
          <Card key={i} {...c} />
        ))}
        <TransactionButton onClick={() => setIsModalOpen(true)} />
      </div>

      <TransactionHistory transactions={transactions} />

      {isModalOpen && (
        <TransactionModal
          onClose={() => setIsModalOpen(false)}
          onAddTransaction={addTransaction}
          transactions={transactions}
        />
      )}
    </div>
  );
}
