import React, { FC, useState } from "react";
import theme from "@constants/theme";
import { ThemeProvider } from "styled-components";

import DaysGridContainer from "./DaysGridContainer/DaysGridContainer";
import MonthSlider from "./MonthSlider/MonthSlider";
import { ICalendarProps } from "./interfaces";
import Container from "./styled";

const Calendar: FC<ICalendarProps> = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const isSundayFirst = false;

  const goPrevMonth = () => {
    setSelectedYear((prevSM) => (selectedMonth === 0 ? prevSM - 1 : prevSM));
    setSelectedMonth((prevSM) => (prevSM > 0 ? prevSM - 1 : 11));
  };

  const goNextMonth = () => {
    setSelectedYear((prevSM) => (selectedMonth === 11 ? prevSM + 1 : prevSM));
    setSelectedMonth((prevSM) => (prevSM < 11 ? prevSM + 1 : 0));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MonthSlider
          year={selectedYear}
          month={selectedMonth}
          goPrevMonth={goPrevMonth}
          goNextMonth={goNextMonth}
        />
        <DaysGridContainer
          year={selectedYear}
          month={selectedMonth}
          isSundayFirst={isSundayFirst}
        />
      </Container>
    </ThemeProvider>
  );
};

export default Calendar;
