import { useCallback, useMemo } from "react";
import type { Transaction } from "../types/transaction";

export function useTotals(transactions: Transaction[]) {
  const calculateTotal = useCallback(
    (type: '+' | '-') =>
      transactions
        .filter(t => t.type === type)
        .reduce((total, t) => total + t.amount, 0),
    [transactions]
  );

  const entradas = useMemo(() => calculateTotal('+'), [calculateTotal]);
  const saidas = useMemo(() => calculateTotal('-'), [calculateTotal]);
  const saldo = useMemo(() => entradas - saidas, [entradas, saidas]);

  return { entradas, saidas, saldo };
}