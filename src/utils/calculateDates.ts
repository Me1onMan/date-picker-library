const MONTHES_IN_YEAR = 12;
const DAYS_IN_WEEK = 7;

type YearMonth = {
  year: number;
  month: number;
};

const getPrevMonthYear = (year: number, month: number): YearMonth => {
  const yearMonth =
    month > 0 ? { year, month: month - 1 } : { year: year - 1, month: MONTHES_IN_YEAR - 1 };

  return yearMonth;
};

const getNextMonthYear = (year: number, month: number): YearMonth => {
  const yearMonth =
    month < MONTHES_IN_YEAR - 1 ? { year, month: month + 1 } : { year: year + 1, month: 0 };
  return yearMonth;
};

const getLastDayNumberMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

export const getMissingPrevDays = (year: number, month: number, isSundayFirst: boolean): Date[] => {
  const firstWeekday = new Date(year, month, 1).getDay();

  let countOfDays = 0;
  if (isSundayFirst) {
    if (firstWeekday === 0) return [];
    countOfDays = firstWeekday === 0 ? 0 : firstWeekday;
  } else {
    if (firstWeekday === 1) return [];
    countOfDays = firstWeekday === 0 ? 6 : firstWeekday - 1;
  }

  const { year: prevYear, month: prevMonth } = getPrevMonthYear(year, month);
  const lastDayNumber = getLastDayNumberMonth(prevYear, prevMonth);

  const datesPrevMonth = Array.from(
    { length: countOfDays },
    (_, i) => new Date(prevYear, prevMonth, lastDayNumber - countOfDays + 1 + i),
  );
  return datesPrevMonth;
};

export const getMissingNextDays = (year: number, month: number, isSundayFirst: boolean): Date[] => {
  const lastWeekday = new Date(year, month + 1, 0).getDay();

  let countOfDays = 0;
  if (isSundayFirst) {
    if (lastWeekday === 6) return [];
    countOfDays = lastWeekday === 6 ? 0 : 6 - lastWeekday;
  } else {
    if (lastWeekday === 0) return [];
    countOfDays = lastWeekday === 0 ? 0 : DAYS_IN_WEEK - lastWeekday;
  }

  const { year: nextYear, month: nextMonth } = getNextMonthYear(year, month);

  const datesNextMonth = Array.from(
    { length: countOfDays },
    (_, i) => new Date(nextYear, nextMonth, i + 1),
  );
  return datesNextMonth;
};

export const getDaysSelectedMonth = (year: number, month: number) => {
  const countOfDays = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: countOfDays }, (_, i) => new Date(year, month, i + 1));
};

export const checkWeekend = (date: Date) => {
  const dayOfWeek = date.getDay();
  return !!(dayOfWeek === 0 || dayOfWeek === 6);
};

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

export const isFirstDateGreaterOrEqual = (date1: Date, date2: Date) => {
  if (!date1 || !date2) return false;

  const first = new Date(date1).getTime();
  const second = new Date(date2).getTime();

  return first >= second;
};
