export const convertStringToNumber = (value: string) => {
  const parsedValue = parseFloat(value);

  if (!value && Number.isNaN(parsedValue)) return 0;

  return parsedValue;
};

export const roundNumberToTwoDecimals = (value: number) => {
  if (!value) return 0;

  return Number((Math.round(value * 100) / 100).toFixed(2));
};
