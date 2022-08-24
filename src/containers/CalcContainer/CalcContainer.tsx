import { FC } from 'react';

import Bill from '../Bill/Bill';
import PeopleNumber from '../PeopleNumber/PeopleNumber';
import TipsSelection from '../TipsSelection/TipsSelection';

const CalcContainer: FC = () => {
  return (
    <section>
      <Bill />
      <TipsSelection />
      <PeopleNumber />
    </section>
  );
};

export default CalcContainer;
