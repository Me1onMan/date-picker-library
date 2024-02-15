import {
  getDayBgColor,
  getDayBorderRadius,
  getHoverBgColor,
  getTextColor,
} from "@utils/calculateStyles";
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
    $isToday ? `1px solid ${theme.color.daySelected}` : "transparent"};
  border-radius: ${({ $rangeType }) => getDayBorderRadius($rangeType)};

  color: ${({ $isSelected, $rangeType, $isWeekend, $isHoliday }) =>
    $rangeType
      ? getTextColor($rangeType, $isWeekend || $isHoliday)
      : getTextColor($isSelected, $isWeekend || $isHoliday)};

  &:hover {
    background-color: ${({ $isSelected, $rangeType }) => getHoverBgColor($isSelected, $rangeType)};
  }

  &:disabled {
    cursor: default;

    color: ${({ theme }) => theme.color.grayPrimary};
  }

  &:disabled:hover {
    background-color: ${({ theme }) => theme.color.white};
  }
`;

export default Button;
