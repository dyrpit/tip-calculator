import { FC } from 'react';

import styles from './SectionTitle.module.css';

interface IProps {
  text: string;
}

const SectionTitle: FC<IProps> = ({ text }) => {
  return <p className={styles.title}>{text}</p>;
};

export default SectionTitle;
