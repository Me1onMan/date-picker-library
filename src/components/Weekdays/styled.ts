import styled from "styled-components";

const WIDTH = "224px";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  width: ${WIDTH};
`;

export const Weekday = styled.p`
  width: ${({ theme }) => theme.size.l};
  height: ${({ theme }) => theme.size.l};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.font.size.m};
`;
