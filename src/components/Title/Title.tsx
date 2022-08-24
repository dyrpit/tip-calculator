import { FC } from 'react';

import styles from './Title.module.css';

interface IProps {
  text: string;
}

const Title: FC<IProps> = ({ text }) => {
  const halfLength = Math.round(text.length / 2);

  const firstPart = text.substring(0, halfLength);
  const secondPart = text.substring(halfLength);

  return (
    <>
      <h1 className={styles.title}>{firstPart}</h1>
      <h1 className={styles.title}>{secondPart}</h1>
    </>
  );
};

export default Title;
