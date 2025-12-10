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
              <th>Nome</th>
              <th>Data</th>
              <th>Categoria</th>
              <th>Valor</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.name}</td>
                <td>{transaction.date}</td>
                <td>{transaction.category}</td>
                <td>
                  {transaction.amount.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </td>
                <td
                  className={
                    transaction.type === '+' ? styles.positive : styles.negative
                  }
                >
                  {transaction.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
