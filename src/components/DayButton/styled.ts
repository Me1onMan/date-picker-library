/* eslint-disable no-nested-ternary */
import { getDayBgColor, getDayBorderRadius, getTextColor } from "@utils/calculateStyles";
import styled from "styled-components";

import { IDayStyledProps } from "./interfaces";

const Button = styled.button<IDayStyledProps>`
  cursor: pointer;

  width: ${({ theme }) => theme.size.l};
  height: ${({ theme }) => theme.size.l};

  background-color: ${({ $isSelected, $rangeType }) =>
    $rangeType ? getDayBgColor($rangeType) : getDayBgColor($isSelected)};
  border-color: transparent;
  border: ${({ $isToday, theme }) =>
    $isToday ? `${theme.border.line.primary} ${theme.color.daySelected}` : "transparent"};
  border-radius: ${({ $rangeType }) => getDayBorderRadius($rangeType)};

  color: ${({ $isSelected, $rangeType, $isWeekend, $isHoliday }) =>
    $rangeType
      ? getTextColor($rangeType, $isWeekend || $isHoliday)
      : getTextColor($isSelected, $isWeekend || $isHoliday)};

  &:hover {
    background-color: ${({ $isSelected, $rangeType, theme }) =>
      $rangeType
        ? getDayBgColor($rangeType)
        : $isSelected
          ? getDayBgColor($isSelected)
          : theme.color.white};
  }

  &:disabled {
    cursor: default;

    color: ${({ theme }) => theme.color.grayPrimary};
  }

  &:disabled:hover {
    background-color: ${({ $isSelected, $rangeType, theme }) =>
      $rangeType
        ? getDayBgColor($rangeType)
        : $isSelected
          ? getDayBgColor($isSelected)
          : theme.color.white};
  }
`;

export default Button;
