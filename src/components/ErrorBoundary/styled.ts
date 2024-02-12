import styled from "styled-components";

export const ErrorBoundaryWrapper = styled.div`
  max-width: 100vw;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.size.m};
  padding: 0 ${({ theme }) => theme.size.m};
  text-align: center;
`;

export const Error = styled.p`
  color: red;
  font-size: ${({ theme }) => theme.font.size.l};
`;

export const ErrorInfoText = styled.span`
  font-size: ${({ theme }) => theme.font.size.l};
`;
