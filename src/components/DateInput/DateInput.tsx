import React, { ChangeEvent, FC, useState } from "react";
import calendarIcon from "@assets/Calendar.svg";
import clearIcon from "@assets/Clear.svg";
import theme from "@constants/theme";
import formatInput from "@utils/formatInput";
import { ThemeProvider } from "styled-components";

import { Button, Container, Input } from "./styled";

const DateInput: FC = () => {
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
    <ThemeProvider theme={theme}>
      <Container>
        <Button src={calendarIcon} />
        <Input value={inputValue} onChange={handleChange} maxLength={10} placeholder="DD.MM.YYYY" />
        <Button src={clearIcon} onClick={clearInput} />
      </Container>
    </ThemeProvider>
  );
};

export default DateInput;
