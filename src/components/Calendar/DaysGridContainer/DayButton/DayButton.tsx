import React from "react";
import withTheme from "@decorators/withTheme";
import { checkWeekend, isToday } from "@utils/calculateDates";

import { IDayProps } from "./interfaces";
import Button from "./styled";

const DayButton = ({ date, isDisabled = false }: IDayProps) => {
  return (
    <Button isWeekend={checkWeekend(date)} isToday={isToday(date)} disabled={isDisabled}>
      {date.getDate()}
    </Button>
  );
};

export default withTheme(DayButton);
