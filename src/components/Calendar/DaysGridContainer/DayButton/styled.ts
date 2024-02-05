import styled from "styled-components";

import { IDayStyledProps } from "./interfaces";

const Button = styled.button<IDayStyledProps>`
  cursor: pointer;

  width: ${({ theme }) => theme.size.l};
  height: ${({ theme }) => theme.size.l};

  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.daySelected : theme.color.white};
  border-color: transparent;
  border: ${({ isToday, theme }) =>
    isToday ? `${theme.border.line.primary} ${theme.color.daySelected}` : "transparent"};
  border-radius: ${({ theme }) => theme.border.radius.primary};

  color: ${({ isWeekend, theme }) => (isWeekend ? "red" : theme.color.textSecondary)};

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
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
