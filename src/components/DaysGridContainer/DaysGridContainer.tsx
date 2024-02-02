import React from "react";
import DayButton from "@components/DayButton/DayButton";
import theme from "@constants/theme";
import { ThemeProvider } from "styled-components";

import Grid from "./styled";

const dates = [];
for (let i = 1; i <= 35; i += 1) {
  dates.push(new Date(2024, 0, i));
}

const DaysGridContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid>
        {dates.map((date) => (
          <DayButton date={date} key={date} />
        ))}
      </Grid>
    </ThemeProvider>
  );
};

export default DaysGridContainer;
