import React from "react";
import arrowNext from "@assets/Next.svg";
import arrowPrev from "@assets/Prev.svg";
import theme from "@constants/theme";
import { ThemeProvider } from "styled-components";

import { ArrowButton, Button, MiddleContainer, SliderContainer } from "./styled";

const MonthSlider = () => {
  return (
    <ThemeProvider theme={theme}>
      <SliderContainer>
        <ArrowButton src={arrowPrev} alt="double arrow brackets prev" title="to previous month" />
        <MiddleContainer>
          <Button>February</Button>
          <Button>2024</Button>
        </MiddleContainer>
        <ArrowButton src={arrowNext} alt="double arrow brackets next" title="to next month" />
      </SliderContainer>
    </ThemeProvider>
  );
};

export default MonthSlider;
