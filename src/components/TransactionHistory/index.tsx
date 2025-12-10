import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/formatDate';
import styles from './TransactionHistory.module.css';
import type { TransactionHistoryTableProps } from './TransactionHistory.types';

export function TransactionHistory({
  transactions,
}: TransactionHistoryTableProps) {
  return (
    <div className={styles.tableTransaction}>
      <div className={styles.transactionHistory}>
        <h2>Histórico de Transações</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Data</th>
              <th scope="col">Categoria</th>
              <th scope="col">Valor</th>
              <th scope="col">Tipo</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={`${transaction.name}-${transaction.date}`}>
                <td>{transaction.name}</td>
                <td>{formatDate(transaction.date)}</td>
                <td>{transaction.category}</td>
                <td>{formatCurrency(transaction.amount)}</td>
                <td
                  className={
                    transaction.type === '+' ? styles.positive : styles.negative
                  }
                >
                  {transaction.type === '+' ? '+' : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
