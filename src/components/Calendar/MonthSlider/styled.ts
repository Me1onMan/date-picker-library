import styled from "styled-components";

import { IArrowBtnProps } from "./interfaces";

export const SliderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 224px;
`;

export const MiddleContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  cursor: pointer;

  padding: 5px;

  background-color: ${({ theme }) => theme.colors.bg.white};
  border: none;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.gray};
  }
`;

export const ArrowButton = styled.img<IArrowBtnProps>`
  src: ${({ src }) => src};

  cursor: pointer;

  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.gray};
  }
`;
