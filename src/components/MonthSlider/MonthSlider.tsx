import React, { FC } from "react";
import arrowNext from "@assets/Next.svg";
import arrowPrev from "@assets/Prev.svg";
import MONTH_NAMES from "@constants/monthNames";
import theme from "@constants/theme";
import { ThemeProvider } from "styled-components";

import { IMonthSliderProps } from "./interfaces";
import { ArrowButton, Button, MiddleContainer, SliderContainer } from "./styled";

const MonthSlider: FC<IMonthSliderProps> = ({ year, month, goPrevMonth, goNextMonth }) => {
  return (
    <ThemeProvider theme={theme}>
      <SliderContainer>
        <ArrowButton
          src={arrowPrev}
          alt="double arrow brackets prev"
          title="to previous month"
          onClick={goPrevMonth}
        />
        <MiddleContainer>
          <Button>{MONTH_NAMES[month]}</Button>
          <Button>{year}</Button>
        </MiddleContainer>
        <ArrowButton
          src={arrowNext}
          alt="double arrow brackets next"
          title="to next month"
          onClick={goNextMonth}
        />
      </SliderContainer>
    </ThemeProvider>
  );
};

export default MonthSlider;
