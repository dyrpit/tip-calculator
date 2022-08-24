import { useContext, FC } from 'react';

import { ACTION_TYPE } from '../../store/reducers/tipReducer';

import { TipContext } from '../../store/tipStore';

import Input from '../../components/Input/Input';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

import styles from './Bill.module.css';

const Bill: FC = () => {
  const [state, dispatch] = useContext(TipContext);

  const handleTotalBill = (payload: number) => dispatch({ type: ACTION_TYPE.BILL, payload });

  return (
    <div className={styles.container}>
      <SectionTitle text='bill' />
      <Input
        icon='dolar'
        min='0'
        name='bill'
        dispatch={handleTotalBill}
        placeholder='0'
        step='0.01'
        type='number'
        value={state.bill}
      />
    </div>
  );
};

export default Bill;
