import React, { ChangeEvent, FC, useState } from "react";
import calendarIcon from "@assets/Calendar.svg";
import clearIcon from "@assets/Clear.svg";
import withTheme from "@decorators/withTheme";
// import { useCalendar } from "@providers/CalendarProvider";
import formatDate from "@utils/formatDate";
import formatInput from "@utils/formatInput";

import { IInputProps } from "./interfaces";
import { Button, Container, Input } from "./styled";

const DateInput: FC<IInputProps> = ({ onClick, selectedDay, setSelectedDay }) => {
  // const { selectedDay, setSelectedDay } = useCalendar();
  const [inputValue, setInputValue] = useState<string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawInputValue = e.target.value;
    const formattedValue = formatInput(rawInputValue);
    if (formattedValue.length === 10) {
      const [day, month, year] = formattedValue.split(".").map((el) => +el);
      setSelectedDay(new Date(year, month - 1, day));
    } else {
      setSelectedDay(undefined);
    }
    setInputValue(formattedValue);
  };

  const clearInput = () => {
    if (selectedDay) setSelectedDay(undefined);
    setInputValue("");
  };

  return (
    <Container>
      <Button src={calendarIcon} onClick={onClick} />
      <Input
        value={selectedDay ? formatDate(selectedDay) : inputValue}
        onChange={handleChange}
        maxLength={10}
        placeholder="DD.MM.YYYY"
      />
      <Button src={clearIcon} onClick={clearInput} />
    </Container>
  );
};

export default withTheme(DateInput);
