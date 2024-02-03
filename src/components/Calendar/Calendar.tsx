import React, { FC, useState } from "react";
import DaysGridContainer from "@components/DaysGridContainer/DaysGridContainer";
import MonthSlider from "@components/MonthSlider/MonthSlider";
import Weekdays from "@components/Weekdays/Weekdays";
import theme from "@constants/theme";
import { ThemeProvider } from "styled-components";

import { ICalendarProps } from "./interfaces";
import Container from "./styled";

const Calendar: FC<ICalendarProps> = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState(1);

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
        <Weekdays />
        <DaysGridContainer year={selectedYear} month={selectedMonth} />
      </Container>
    </ThemeProvider>
  );
};

export default Calendar;
