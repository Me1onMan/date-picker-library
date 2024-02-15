const MONTHES_IN_YEAR = 12;

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
