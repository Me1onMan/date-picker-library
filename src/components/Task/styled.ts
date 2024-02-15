import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.size.s};
  height: ${({ theme }) => theme.size.xl};
`;

export const Checkbox = styled.input`
  cursor: pointer;
`;

export const TaskTitle = styled.p``;

export const DeleteButton = styled.button`
  cursor: pointer;

  padding: ${({ theme }) => theme.size.s};

  background-color: ${({ theme }) => theme.color.white};

  border: ${({ theme }) => theme.border.line.primary};
  border-color: ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.border.radius.primary};

  color: ${({ theme }) => theme.color.textSecondary};

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }
`;
