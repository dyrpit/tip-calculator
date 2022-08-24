import { FC } from 'react';

import CalcContainer from '../CalcContainer/CalcContainer';
import ResultContainer from '../ResultContainer/ResultContainer';

import styles from './MainContainer.module.css';

const MainContainer: FC = () => {
  return (
    <main className={styles.container}>
      <CalcContainer />
      <ResultContainer />
    </main>
  );
};

export default MainContainer;
