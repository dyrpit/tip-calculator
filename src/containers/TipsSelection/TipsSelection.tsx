import { FC, useContext } from 'react';

import { ACTION_TYPE } from '../../store/reducers/tipReducer';

import { TipContext } from '../../store/tipStore';

import Input from '../../components/Input/Input';
import RadioButton from '../../components/RadioButton/RadioButton';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

import styles from './TipsSelection.module.css';

const radioButtonValues = [5, 10, 15, 25, 50];

const TipsSelection: FC = () => {
  const [state, dispatch] = useContext(TipContext);

  const handleTipPercent = (payload: number) =>
    dispatch({ type: ACTION_TYPE.TIP_PERCENT, payload });

  const handleCustomTip = (payload: number) => dispatch({ type: ACTION_TYPE.CUSTOM_TIP, payload });

  return (
    <>
      <SectionTitle text='select tip %' />
      <div className={styles.container}>
        {radioButtonValues.map((value) => (
          <RadioButton
            key={value}
            checked={value === state.tipPercent}
            dispatch={handleTipPercent}
            name='tip'
            value={value}
          />
        ))}
        <Input
          dispatch={handleCustomTip}
          min='0'
          name='customTip'
          placeholder='Custom'
          step='1'
          style={styles.tipInput}
          type='number'
          value={state.customTip}
        />
      </div>
    </>
  );
};

export default TipsSelection;
