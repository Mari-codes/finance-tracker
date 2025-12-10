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
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState<'+' | '-'>('-');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const resetForm = () => {
    setName('');
    setDate('');
    setCategory('');
    setAmount(0);
    setType('+');
    setErrors({});
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (name.trim() === '') newErrors.name = 'Nome é obrigatório';
    if (date.trim() === '') newErrors.date = 'Data é obrigatória';
    if (category.trim() === '') newErrors.category = 'Categoria é obrigatória';
    if (amount <= 0) newErrors.amount = 'Informe um valor maior que zero';
    return newErrors;
  };

  const handleAddTransaction = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newTransaction: Transaction = { name, date, category, amount, type };
    onAddTransaction(newTransaction);
    resetForm();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>Nova transação</h2>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTransaction();
          }}
        >
          <label htmlFor="name" className={styles.normalInput}>
            Nome
          </label>
          <input
            id="name"
            className={styles.text}
            type="text"
            placeholder="Digite o nome da sua transação"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}

          <label htmlFor="date" className={styles.normalInput}>
            Data
          </label>
          <input
            id="date"
            className={styles.text}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {errors.date && <span className={styles.error}>{errors.date}</span>}

          <label htmlFor="category" className={styles.normalInput}>
            Categoria
          </label>
          <input
            id="category"
            className={styles.text}
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {errors.category && (
            <span className={styles.error}>{errors.category}</span>
          )}

          <label htmlFor="amount" className={styles.normalInput}>
            Valor
          </label>
          <input
            id="amount"
            className={styles.text}
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value) || 0)}
          />
          {errors.amount && (
            <span className={styles.error}>{errors.amount}</span>
          )}

          <fieldset className={styles.radioGroup}>
            <legend>Tipo</legend>
            <label className={styles.radioButton}>
              <input
                type="radio"
                value="+"
                checked={type === '+'}
                onChange={() => setType('+')}
              />
              <img src={up} alt="Entrada" className={styles.radioIcon} />
              Entrada
            </label>

            <label className={styles.radioButton}>
              <input
                type="radio"
                value="-"
                checked={type === '-'}
                onChange={() => setType('-')}
              />
              <img src={down} alt="Saída" className={styles.radioIcon} />
              Saída
            </label>
          </fieldset>

          <div className={styles.buttons}>
            <button
              type="button"
              className={`${styles.cancel} ${styles.btn}`}
              onClick={onClose}
            >
              <img src={cancel} alt="Cancelar" /> Cancelar
            </button>

            <button type="submit" className={`${styles.add} ${styles.btn}`}>
              <img src={add} alt="Adicionar" /> Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
