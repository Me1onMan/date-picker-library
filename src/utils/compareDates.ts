export const isDaysEqual = (date1: Date, date2: Date): boolean => {
  if (!date1 || !date2) return false;

  const first = new Date(date1);
  const second = new Date(date2);

  if (first.getFullYear() !== second.getFullYear()) return false;
  if (first.getMonth() !== second.getMonth()) return false;
  if (first.getDate() !== second.getDate()) return false;
  return true;
};

export const isMonthAndDayEqual = (date1: Date, date2: Date): boolean => {
  if (!date1 || !date2) return false;

  const first = new Date(date1);
  const second = new Date(date2);

  if (first.getMonth() !== second.getMonth()) return false;
  if (first.getDate() !== second.getDate()) return false;
  return true;
};

export const isFirstDateGreaterOrEqual = (date1: Date, date2: Date): boolean => {
  if (!date1 || !date2) return false;

  const first = new Date(date1).getTime();
  const second = new Date(date2).getTime();

  return first >= second;
};
