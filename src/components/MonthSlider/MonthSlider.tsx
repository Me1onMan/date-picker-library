import React, { FC, memo } from "react";
import nextIcon from "@assets/Next.svg";
import prevIcon from "@assets/Prev.svg";
import MONTH_NAMES from "@constants/monthNames";
import theme from "@constants/theme";
import { ThemeProvider } from "styled-components";

import { IMonthSliderProps } from "./interfaces";
import { ArrowButton, Button, MiddleContainer, SliderContainer } from "./styled";

const MonthSlider: FC<IMonthSliderProps> = memo(({ year, month, goPrevMonth, goNextMonth }) => {
  return (
    <ThemeProvider theme={theme}>
      <SliderContainer>
        <ArrowButton
          src={prevIcon}
          alt="double arrow brackets prev"
          title="to previous month"
          onClick={goPrevMonth}
        />
        <MiddleContainer>
          <Button>{MONTH_NAMES[month]}</Button>
          <Button>{year}</Button>
        </MiddleContainer>
        <ArrowButton
          src={nextIcon}
          alt="double arrow brackets prev"
          title="to previous month"
          onClick={goNextMonth}
        />
      </SliderContainer>
    </ThemeProvider>
  );
});

MonthSlider.displayName = "MonthSlider";

export default MonthSlider;
