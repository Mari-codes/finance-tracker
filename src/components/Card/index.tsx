import styles from './Card.module.css';
import type { CardProps } from './Card.types';

export function Card({ svg, title, value, symbol }: CardProps) {
  const reais = Math.floor(value);
  const centavos = (value - reais) * 100;

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
      <p className={styles.cardPrice}>
        R$ {reais},{' '}
        <span className={styles.centavos}>
          {centavos.toFixed(0).padStart(2, '0')}
        </span>
      </p>
    </div>
  );
}
