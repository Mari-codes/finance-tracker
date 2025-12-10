import { formatCurrency } from '../../utils/formatCurrency';
import styles from './Card.module.css';
import type { CardProps } from './Card.types';

export function Card({ svg, title, value, symbol }: CardProps) {

  return (
    <div className={styles.card}>
      <div className={styles.cardValue}>
        <h4 className={styles.cardTitle}>{title}</h4>
        {svg ? (
          <img className={styles.cardIcon} src={svg} alt={title} />
        ) : (
          <span className={styles.symbol}>{symbol}</span>
        )}
      </div>
      <p className={styles.cardPrice} title={String(value)}>
        {formatCurrency(value)}
      </p>
    </div>
  );
}
