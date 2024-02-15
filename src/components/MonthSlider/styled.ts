import styled from "styled-components";

const WIDTH = "224px";
const BORDER_RAD_PRIMARY = "8px";

export const SliderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${WIDTH};

  & svg:hover {
    cursor: pointer;
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.size.s};
`;

export const Button = styled.button`
  cursor: pointer;

  padding: ${({ theme }) => theme.size.s};

  background-color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: ${BORDER_RAD_PRIMARY};

  font-size: ${({ theme }) => theme.font.size.m};

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }
`;

export const ArrowButton = styled.img`
  width: ${({ theme }) => theme.size.l};
  height: ${({ theme }) => theme.size.l};

  padding: ${({ theme }) => theme.size.s};

  cursor: pointer;

  border-radius: ${BORDER_RAD_PRIMARY};

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }
`;
