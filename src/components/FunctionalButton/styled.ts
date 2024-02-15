import styled from "styled-components";

const P_100 = "100%";
const BTN_HEIGHT = "36px";

const Button = styled.button`
  cursor: pointer;

  width: ${P_100};
  height: ${BTN_HEIGHT};

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
