import styled from "styled-components";

import { IButtonProps } from "./interfaces";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.size.s};

  padding: ${({ theme }) => theme.size.s} ${({ theme }) => theme.size.m};

  border: ${({ theme }) => theme.border.line.primary};
  border-color: ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.border.radius.primary};
`;

export const Button = styled.img<IButtonProps>`
  cursor: pointer;
`;

export const Input = styled.input`
  width: 172px;
  height: 20px;

  font-size: ${({ theme }) => theme.font.size.l};

  border: none;
`;
