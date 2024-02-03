const MONTHES_IN_YEAR = 12;
const DAYS_IN_WEEK = 7;

type YearMonth = {
  year: number;
  month: number;
};

export const getPrevMonthYear = (year: number, month: number): YearMonth => {
  const yearMonth =
    month > 0 ? { year, month: month - 1 } : { year: year - 1, month: MONTHES_IN_YEAR - 1 };

  return yearMonth;
};

export const getNextMonthYear = (year: number, month: number): YearMonth => {
  const yearMonth =
    month < MONTHES_IN_YEAR - 1 ? { year, month: month + 1 } : { year: year + 1, month: 0 };
  return yearMonth;
};

export const getLastDayNumberMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

export const getMissingPrevDays = (year: number, month: number): Date[] => {
  const firstWeekday = new Date(year, month, 1).getDay();
  // добавить проверку на первый день недели
  if (firstWeekday === 1) return [];

  // добавить проверку на первый день недели
  const countOfDays = firstWeekday === 0 ? 6 : firstWeekday - 1;
  const { year: prevYear, month: prevMonth } = getPrevMonthYear(year, month);
  const lastDayNumber = getLastDayNumberMonth(prevYear, prevMonth);

  const datesPrevMonth = Array.from(
    { length: countOfDays },
    (_, i) => new Date(prevYear, prevMonth, lastDayNumber - countOfDays + 1 + i),
  );
  return datesPrevMonth;
};

export const getMissingNextDays = (year: number, month: number): Date[] => {
  const lastWeekday = new Date(year, month + 1, 0).getDay();

  // добавить проверку на первый день недели
  if (lastWeekday === 0) return [];

  // добавить проверку на первый день недели
  const countOfDays = DAYS_IN_WEEK - lastWeekday;

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
