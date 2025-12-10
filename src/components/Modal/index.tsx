import styles from './Modal.module.css';
import { useState } from 'react';
import type { Transaction } from '../../types/transaction';
import up from '../../assets/svg/up.svg';
import down from '../../assets/svg/down.svg';
import cancel from '../../assets/svg/cancel.svg';
import add from '../../assets/svg/add.svg';
import type { TransactionModalProps } from './Modal.types';

export function TransactionModal({
  onClose,
  onAddTransaction,
}: TransactionModalProps) {
  const [name, setName] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<'+' | '-'>('-');

  const handleAddTransaction = () => {
    const newTransaction: Transaction = {
      name,
      date,
      category,
      amount,
      type,
    };
    onAddTransaction(newTransaction);

    setName('');
    setDate('');
    setCategory('');
    setAmount(0);
    setType('+');
  };
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>Nova transação</h2>
        <div className={styles.form}>
          <label className={styles.normalInput}>Nome</label>
          <input
            className={styles.text}
            type="text"
            placeholder="Digite o nome da sua transação"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className={styles.normalInput}>Data</label>
          <input
            className={styles.text}
            type="text"
            placeholder="Selecione a data da transação"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label className={styles.normalInput}>Categoria</label>
          <input
            className={styles.text}
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label className={styles.normalInput}>Valor</label>
          <input
            className={styles.text}
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
          <label>Tipo</label>
          <div className={styles.radioLabel}>
            <label className={styles.radioButton}>
              <input
                className={styles.expense}
                type="radio"
                value="+"
                checked={type === '+'}
                onChange={() => setType('+')}
              />
              <img src={up} alt="Expense Icon" className={styles.radioIcon} />
              Entrada
            </label>
            <div className={styles.radioLabel}>
              <label className={styles.radioButton}>
                <input
                  className={styles.income}
                  type="radio"
                  value="-"
                  checked={type === '-'}
                  onChange={() => setType('-')}
                />
                <img
                  src={down}
                  alt="Income Icon"
                  className={styles.radioIcon}
                />
                Saída
              </label>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button
            className={`${styles.cancel} ${styles.btn}`}
            onClick={onClose}
          >
            {' '}
            <img src={cancel}></img>Cancelar
          </button>
          <button
            className={`${styles.add} ${styles.btn}`}
            onClick={handleAddTransaction}
          >
            {' '}
            <img src={add}></img>Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
