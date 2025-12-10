export interface Transaction {
  name: string;
  date: string;
  category: string;
  amount: number;
  type: '+' | '-';
}
