import { FC } from 'react';

import styles from './Summary.module.css';

interface IProps {
  amount: number;
  title: string;
}

const Summary: FC<IProps> = ({ amount, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.titleSmall}>/ person</p>
      </div>
      <p className={styles.amount}>${amount}</p>
    </div>
  );
};

export default Summary;
