import styled from "styled-components";

const WIDTH = "250px";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size.s};

  width: ${WIDTH};
`;

export const Label = styled.p``;
