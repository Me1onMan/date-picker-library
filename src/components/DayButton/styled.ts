import styled from "styled-components";

import { IDayStyledProps } from "./interfaces";

const Button = styled.button<IDayStyledProps>`
  cursor: pointer;

  width: ${({ theme }) => theme.size.px32};
  height: ${({ theme }) => theme.size.px32};

  background-color: ${({ theme }) => theme.colors.bg.white};
  border-color: transparent;
  border-radius: ${({ theme }) => theme.size.px8};

  color: ${({ isWeekend, theme }) => (isWeekend ? "red" : theme.colors.text.black)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.gray};
  }
`;

export default Button;
