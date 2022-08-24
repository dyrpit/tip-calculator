import { Action, State } from '../interface/interface';
import { initialState } from '../tipStore';

export enum ACTION_TYPE {
  BILL = 'BILL',
  CUSTOM_TIP = 'CUSTOM_TIP',
  PEOPLE_COUNT = 'PEOPLE_COUNT',
  RESET = 'RESET',
  TIP_PERCENT = 'TIP_PERCENT',
}

const tipReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION_TYPE.BILL:
      return {
        ...state,
        bill: action.payload || 0,
      };
    case ACTION_TYPE.PEOPLE_COUNT:
      return {
        ...state,
        peopleCount: action.payload || 0,
      };
    case ACTION_TYPE.TIP_PERCENT:
      return {
        ...state,
        tipPercent: action.payload || 0,
        customTip: 0,
      };
    case ACTION_TYPE.CUSTOM_TIP:
      return {
        ...state,
        tipPercent: 0,
        customTip: action.payload || 0,
      };
    case ACTION_TYPE.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default tipReducer;
