import styled from "styled-components";

import { IButtonProps } from "./interfaces";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  padding: 8px 15px;

  border: 1px solid ${({ theme }) => theme.colors.border.gray};
  border-radius: 8px;
`;

export const Button = styled.img<IButtonProps>`
  src: ${({ src }) => src};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.gray};
  }
`;

export const Input = styled.input`
  width: 172px;
  height: 20px;

  border: none;
`;
