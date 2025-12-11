import Credit from '../../assets/svg/credit.svg';
import UserImg from '../../assets/images/userImg.png';
import styles from './Header.module.css';
import type { HeaderProps } from './Header.types';

export function Header({ name, email }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Credit} alt="credito" />
        <h1>Finance Tracker</h1>
      </div>

      <div className={styles.user}>
        <div className={styles.details}>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
        <img src={UserImg} className={styles.userImg} alt="user" />
      </div>
    </header>
  );
}
