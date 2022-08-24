import { FC, useContext, useMemo } from 'react';

import { ACTION_TYPE } from '../../store/reducers/tipReducer';
import { TipContext } from '../../store/tipStore';

import styles from './ResetButton.module.css';

const ResetButton: FC = () => {
  const [{ bill, customTip, peopleCount, tipPercent }, dispatch] = useContext(TipContext);

  const isDisabled = useMemo(
    () => !bill && !customTip && !peopleCount && !tipPercent,
    [bill, customTip, peopleCount, tipPercent]
  );

  const handleClick = () => dispatch({ type: ACTION_TYPE.RESET });

  return (
    <button className={styles.button} onClick={handleClick} disabled={isDisabled}>
      reset
    </button>
  );
};

export default ResetButton;
