import React, { ChangeEvent, FC, memo, useEffect, useState } from "react";
import calendar from "@assets/Calendar.svg";
// import Calendar from "@components/Icons/Calendar";
import Cross from "@components/Icons/Cross";
import withTheme from "@decorators/withTheme";
import { useCalendar } from "@providers/CalendarProvider";
import { useDateLimits } from "@providers/DateLimitsProvider";
import { isDateInRange } from "@utils/calculateRange";
import formatDate from "@utils/formatDate";
import formatInput from "@utils/formatInput";

import { IInputProps } from "./interfaces";
import { Button, Container, ErrorMessage, Input } from "./styled";

const DateInput: FC<IInputProps> = memo(({ onClick, selectedDay, setSelectedDay }) => {
  const { setSelectedMonth, setSelectedYear } = useCalendar();
  const { minDate, maxDate } = useDateLimits();
  const [inputValue, setInputValue] = useState<string>();
  const [isShowError, setIsShowError] = useState(false);

  useEffect(() => {
    if (selectedDay && !isDateInRange(selectedDay, minDate, maxDate)) {
      setIsShowError(true);
    } else {
      setIsShowError(false);
    }
  }, [selectedDay, minDate, maxDate]);

  const setDateValues = (formattedString: string) => {
    const [day, month, year] = formattedString.split(".").map((el) => +el);
    const inputDate = new Date(year, month - 1, day);
    setSelectedDay(inputDate);
    setSelectedMonth(inputDate.getMonth());
    setSelectedYear(inputDate.getFullYear());
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawInputValue = e.target.value;
    const formattedValue = formatInput(rawInputValue);
    if (formattedValue.length === 10) {
      setDateValues(formattedValue);
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
    <>
      <Container>
        {/* <Calendar onClick={onClick} /> */}
        <Button src={calendar} onClick={onClick} />
        <Input
          value={selectedDay ? formatDate(selectedDay) : inputValue}
          onChange={handleChange}
          maxLength={10}
          placeholder="DD.MM.YYYY"
        />
        <Cross onClick={clearInput} />
      </Container>
      {isShowError && <ErrorMessage>Invalid date!</ErrorMessage>}
    </>
  );
});

DateInput.displayName = "DateInput";

export default withTheme(DateInput);
