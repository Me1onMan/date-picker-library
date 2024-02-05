import React, { useState } from "react";
import Calendar from "@components/Calendar/Calendar";
import DateInput from "@components/DateInput/DateInput";
import withTheme from "@decorators/withTheme";
import CalendarProvider from "@providers/CalendarProvider";

import { Container, Label } from "./styled";

const DatePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <CalendarProvider>
      <Container>
        <Label>Date</Label>
        <DateInput onClick={handleClick} />
        {isOpen && <Calendar />}
      </Container>
    </CalendarProvider>
  );
};

export default withTheme(DatePicker);
