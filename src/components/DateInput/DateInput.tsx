import React, { ChangeEvent, FC, useState } from "react";
import calendarIcon from "@assets/Calendar.svg";
import clearIcon from "@assets/Clear.svg";
import withTheme from "@decorators/withTheme";
import formatInput from "@utils/formatInput";

import { IInputProps } from "./interfaces";
import { Button, Container, Input } from "./styled";

const DateInput: FC<IInputProps> = ({ onClick }) => {
  const [inputValue, setInputValue] = useState<string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawInputValue = e.target.value;
    const formattedValue = formatInput(rawInputValue);
    setInputValue(formattedValue);
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <Container>
      <Button src={calendarIcon} onClick={onClick} />
      <Input value={inputValue} onChange={handleChange} maxLength={10} placeholder="DD.MM.YYYY" />
      <Button src={clearIcon} onClick={clearInput} />
    </Container>
  );
};

export default withTheme(DateInput);
