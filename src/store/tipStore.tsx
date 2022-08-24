import { createContext, Dispatch, FC, ReactNode, useReducer } from 'react';

import { Action, State } from './interface/interface';

import tipReducer from './reducers/tipReducer';

interface IProps {
  children: ReactNode;
}

export type DefaultDispatch = Dispatch<Action>;

export const initialState: State = {
  bill: 0,
  customTip: 0,
  peopleCount: 0,
  tipPercent: 0,
};

const initDispatch = () => null;

export const TipContext = createContext<[State, DefaultDispatch]>([initialState, initDispatch]);

const TipStore: FC<IProps> = ({ children }) => {
  const [state, dispatch] = useReducer(tipReducer, initialState);

  return <TipContext.Provider value={[state, dispatch]}>{children}</TipContext.Provider>;
};

export default TipStore;
