import { FC } from 'react';

import { useSummary } from '../../hooks/useSummary';

import ResetButton from '../../components/ResetButton/ResetButton';
import Summary from '../Summary/Summary';

import styles from './ResultContainer.module.css';

const ResultContainer: FC = () => {
  const { totalPerPerson, tipAmountPerPerson } = useSummary();

  return (
    <section className={styles.container}>
      <Summary amount={tipAmountPerPerson} title='tip amount' />
      <Summary amount={totalPerPerson} title='total' />
      <ResetButton />
    </section>
  );
};

export default ResultContainer;
