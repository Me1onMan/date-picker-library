import React from "react";
import DaysGridContainer from "@components/DaysGridContainer/DaysGridContainer";
import MonthSlider from "@components/MonthSlider/MonthSlider";
import Weekdays from "@components/Weekdays/Weekdays";
import theme from "@constants/theme";
import { ThemeProvider } from "styled-components";

import Container from "./styled";

const Calendar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MonthSlider />
        <Weekdays />
        <DaysGridContainer />
      </Container>
    </ThemeProvider>
  );
};

export default Calendar;
