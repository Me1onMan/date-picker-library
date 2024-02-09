import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size.s};

  width: 250px;
`;

export const Label = styled.p``;
