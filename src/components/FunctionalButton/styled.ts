import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;

  width: 100%;
  height: 36px;

  background-color: ${({ theme }) => theme.color.white};

  border: ${({ theme }) => theme.border.line.primary};
  border-color: ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.border.radius.bottom};

  color: ${({ theme }) => theme.color.textSecondary};

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }
`;

export default Button;
