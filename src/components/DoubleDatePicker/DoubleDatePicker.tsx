import React, { useState } from "react";
import Calendar from "@components/Calendar/Calendar";
import DateInput from "@components/DateInput/DateInput";
import withTheme from "@decorators/withTheme";
import CalendarProvider from "@providers/CalendarProvider";
import RangeProvider from "@providers/RangeProvider";

import { Container, Label } from "./styled";

const DoubleDatePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <CalendarProvider>
      <RangeProvider>
        <Container>
          <Label>From</Label>
          <DateInput onClick={handleClick} />
          <Label>To</Label>
          <DateInput onClick={handleClick} />
          {isOpen && <Calendar />}
        </Container>
      </RangeProvider>
    </CalendarProvider>
  );
};

export default withTheme(DoubleDatePicker);
