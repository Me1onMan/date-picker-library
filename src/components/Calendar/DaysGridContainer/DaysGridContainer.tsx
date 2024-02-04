import React from "react";
import theme from "@constants/theme";
import {
  checkWeekend,
  getDaysSelectedMonth,
  getMissingNextDays,
  getMissingPrevDays,
} from "@utils/calculateDates";
import { ThemeProvider } from "styled-components";

import DayButton from "./DayButton/DayButton";
import Weekdays from "./Weekdays/Weekdays";
import { IGridProps } from "./interfaces";
import Grid from "./styled";

const DaysGridContainer = ({ year, month, isSundayFirst }: IGridProps) => {
  const selectedYear = year;
  const selectedMonth = month;

  const prevMonthDays = [...getMissingPrevDays(selectedYear, selectedMonth, isSundayFirst)];
  const currentMonthDays = [...getDaysSelectedMonth(selectedYear, selectedMonth)];
  const nextMonthDays = [...getMissingNextDays(selectedYear, selectedMonth, isSundayFirst)];

  return (
    <ThemeProvider theme={theme}>
      <Weekdays isSundayFirst={isSundayFirst} />

      <Grid>
        {prevMonthDays.map((date) => (
          <DayButton date={date} isDisabled key={date.toString()} />
        ))}
        {currentMonthDays.map((date) => (
          <DayButton date={date} isWeekend={checkWeekend(date)} key={date.toString()} />
        ))}
        {nextMonthDays.map((date) => (
          <DayButton date={date} isDisabled key={date.toString()} />
        ))}
      </Grid>
    </ThemeProvider>
  );
};

export default DaysGridContainer;
