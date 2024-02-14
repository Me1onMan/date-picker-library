import React, { FC } from "react";
import ArrowNext from "@components/Icons/ArrowNext";
import ArrowPrev from "@components/Icons/ArrowPrev";
import MONTH_NAMES from "@constants/monthNames";
import theme from "@constants/theme";
import { ThemeProvider } from "styled-components";

import { IMonthSliderProps } from "./interfaces";
import { Button, MiddleContainer, SliderContainer } from "./styled";

const MonthSlider: FC<IMonthSliderProps> = ({ year, month, goPrevMonth, goNextMonth }) => {
  return (
    <ThemeProvider theme={theme}>
      <SliderContainer>
        <ArrowPrev
          alt="double arrow brackets prev"
          title="to previous month"
          onClick={goPrevMonth}
        />
        <MiddleContainer>
          <Button>{MONTH_NAMES[month]}</Button>
          <Button>{year}</Button>
        </MiddleContainer>
        <ArrowNext
          alt="double arrow brackets prev"
          title="to previous month"
          onClick={goNextMonth}
        />
      </SliderContainer>
    </ThemeProvider>
  );
};

export default MonthSlider;
