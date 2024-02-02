import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;

  width: 224px;
  height: 36px;

  background-color: ${({ theme }) => theme.colors.bg.white};
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.border.gray};
  border-radius: 0 0 8px 8px;

  color: ${({ theme }) => theme.colors.text.black};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.gray};
  }
`;

export default Button;
