import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${({ theme }) => theme.size.s};

  border: ${({ theme }) => theme.border.line.primary} ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.border.radius.primary};
`;

export default Container;
