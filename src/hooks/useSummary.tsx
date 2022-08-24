import { useContext, useMemo } from 'react';

import { TipContext } from '../store/tipStore';

import { roundNumberToTwoDecimals } from '../utils/numbers-utils';

export const useSummary = () => {
  const [{ bill, customTip, peopleCount, tipPercent }] = useContext(TipContext);

  const tipAmountPerPerson = useMemo(() => {
    if (!bill || !peopleCount) return 0;

    if (customTip === 0 && tipPercent === 0) return 0;

    const percentValue = tipPercent || customTip;

    const tip = bill * (percentValue / 100);
    const tipPerPerson = tip / peopleCount;

    return roundNumberToTwoDecimals(tipPerPerson);
  }, [bill, customTip, peopleCount, tipPercent]);

  const totalPerPerson = useMemo(() => {
    if (!bill || !peopleCount) return 0;

    const totalPerPerson = bill / peopleCount + tipAmountPerPerson;

    return roundNumberToTwoDecimals(totalPerPerson);
  }, [bill, peopleCount, tipAmountPerPerson]);

  return { tipAmountPerPerson, totalPerPerson };
};
