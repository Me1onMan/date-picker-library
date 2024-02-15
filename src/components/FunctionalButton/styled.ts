import styled from "styled-components";

const P_100 = "100%";
const BTN_HEIGHT = "36px";
const BORDER_RAD_PRIMARY = "8px";

const Button = styled.button`
  cursor: pointer;

  width: ${P_100};
  height: ${BTN_HEIGHT};

  background-color: ${({ theme }) => theme.color.white};

  border: 1px solid;
  border-color: ${({ theme }) => theme.color.border};
  border-radius: ${BORDER_RAD_PRIMARY};

  color: ${({ theme }) => theme.color.textSecondary};

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }
`;

export default Button;
