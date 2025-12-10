import { useState } from 'react';
import { Card } from '../Card';
import up from '../../assets/svg/up.svg';
import down from '../../assets/svg/down.svg';
import styles from './Dashboard.module.css';
import type { Transaction } from '../../types/transaction';
import { TransactionButton } from '../TransactionButton';
import { TransactionModal } from '../Modal';
import { TransactionHistory } from '../TransactionHistory';

export function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      name: 'Compra de Alimentos',
      date: '15/08/2023',
      category: 'Alimentação',
      amount: 50.0,
      type: '-',
    },
    {
      name: 'Salário',
      date: '01/08/2023',
      category: 'Renda',
      amount: 1000.0,
      type: '+',
    },
    {
      name: 'Conta de Luz',
      date: '10/08/2023',
      category: 'Despesas',
      amount: 80.0,
      type: '-',
    },
  ]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);
    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const calculateTotal = (type: '+' | '-') => {
    return transactions
      .filter((transaction) => transaction.type === type)
      .reduce((total, transaction) => total + transaction.amount, 0);
  };

  const totalEntradas = calculateTotal('+');
  const totalSaidas = calculateTotal('-');
  const saldo = totalEntradas - totalSaidas;

  return (
    <div className={styles.dashboard}>
      <div className={styles.cardContainer}>
        <Card svg={up} title="Entradas" value={totalEntradas} />
        <Card svg={down} title="Saídas" value={totalSaidas} />
        <Card symbol="$" title="Saldo" value={saldo} />
        <TransactionButton onClick={openModal} />
      </div>
      <TransactionHistory transactions={transactions} />
      {isModalOpen && (
        <TransactionModal
          onClose={closeModal}
          onAddTransaction={addTransaction}
          transactions={transactions}
        />
      )}
    </div>
  );
}
