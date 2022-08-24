import { FC, useContext } from 'react';

import { ACTION_TYPE } from '../../store/reducers/tipReducer';

import { TipContext } from '../../store/tipStore';

import Input from '../../components/Input/Input';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

import styles from './PeopleNumber.module.css';

const PeopleNumber: FC = () => {
  const [state, dispatch] = useContext(TipContext);

  const handlePeopleCount = (payload: number) =>
    dispatch({ type: ACTION_TYPE.PEOPLE_COUNT, payload });

  return (
    <div className={styles.container}>
      <SectionTitle text='number of people' />
      <Input
        icon='person'
        min='0'
        name='peopleCount'
        dispatch={handlePeopleCount}
        placeholder='0'
        type='number'
        value={state.peopleCount}
      />
    </div>
  );
};

export default PeopleNumber;
