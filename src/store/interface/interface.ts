import { ACTION_TYPE } from '../reducers/tipReducer';

export interface State {
  bill: number;
  peopleCount: number;
  tipPercent: number;
  customTip: number;
}

export interface Action {
  type: ACTION_TYPE;
  payload?: number;
}
