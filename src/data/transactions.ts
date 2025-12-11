import type { Transaction } from '../types/transaction';

export const initialTransactions: Transaction[] = [
  {
    name: 'Compra de Alimentos',
    date: '01/07/2025',
    category: 'Alimentação',
    amount: 50.0,
    type: '-',
  },
  {
    name: 'Salário',
    date: '01/08/2025',
    category: 'Renda',
    amount: 1000.0,
    type: '+',
  },
  {
    name: 'Conta de Luz',
    date: '10/08/2025',
    category: 'Despesas',
    amount: 80.0,
    type: '-',
  },
];
