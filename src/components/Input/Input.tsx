import { ChangeEvent, FC, ReactElement } from 'react';

import { convertStringToNumber } from '../../utils/numbers-utils';

import styles from './Input.module.css';

interface IProps {
  dispatch: (value: number) => void;
  icon?: string;
  max?: string;
  min?: string;
  name: string;
  placeholder: string;
  step?: string;
  style?: string;
  type?: string;
  value: number | string;
}

interface Icons {
  dolar: ReactElement;
  person: ReactElement;
}

const Input: FC<IProps> = ({
  dispatch,
  icon,
  max,
  min,
  name,
  placeholder,
  step,
  style = '',
  type = 'text',
  value,
}) => {
  const icons: Icons = {
    dolar: <span className={`material-symbols-outlined ${styles.icon}`}>attach_money</span>,
    person: <span className={`material-symbols-outlined ${styles.icon}`}>person</span>,
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    dispatch(convertStringToNumber(value));
  };

  return (
    <div className={styles.inputContainer}>
      {icons[icon as keyof Icons] || null}
      <input
        type={type}
        placeholder={placeholder}
        step={step}
        min={min}
        max={max}
        name={name}
        className={`${styles.input} ${style}`}
        value={value === 0 ? '' : value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
