import { ChangeEvent, FC } from 'react';

import { convertStringToNumber } from '../../utils/numbers-utils';

import styles from './RadioButton.module.css';

interface IProps {
  checked: boolean;
  dispatch: (value: number) => void;
  name: string;
  value: number;
}

const RadioButton: FC<IProps> = ({ checked, dispatch, name, value }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    dispatch(convertStringToNumber(value));
  };

  return (
    <label className={`${styles.label} ${checked ? styles.selected : ''} `}>
      <span>{value}%</span>
      <input
        type='radio'
        name={name}
        value={value}
        className={styles.radioButton}
        onChange={handleChange}
        checked={checked}
      />
    </label>
  );
};

export default RadioButton;
