import React from "react";
import DayButton from "@components/DayButton/DayButton";
import theme from "@constants/theme";
import {
  checkWeekend,
  getDaysSelectedMonth,
  getMissingNextDays,
  getMissingPrevDays,
} from "@utils/calculateDates";
import { ThemeProvider } from "styled-components";

import { IGridProps } from "./interfaces";
import Grid from "./styled";

const DaysGridContainer = ({ year, month }: IGridProps) => {
  const selectedYear = year;
  const selectedMonth = month;

  const prevMonthDays = [...getMissingPrevDays(selectedYear, selectedMonth)];
  const currentMonthDays = [...getDaysSelectedMonth(selectedYear, selectedMonth)];
  const nextMonthDays = [...getMissingNextDays(selectedYear, selectedMonth)];

  return (
    <ThemeProvider theme={theme}>
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
