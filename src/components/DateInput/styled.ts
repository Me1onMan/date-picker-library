import styled from "styled-components";

const INPUT_W = "172px";
const INPUT_H = "20px";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.size.s};

  padding: ${({ theme }) => theme.size.s} ${({ theme }) => theme.size.m};

  border: ${({ theme }) => theme.border.line.primary};
  border-color: ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.border.radius.primary};

  & svg:hover {
    cursor: pointer;
  }
`;

export const Button = styled.img`
  cursor: pointer;
`;

export const Input = styled.input`
  width: ${INPUT_W};
  height: ${INPUT_H};

  font-size: ${({ theme }) => theme.font.size.l};

  border: none;
`;

export const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.font.size.s};
  color: ${({ theme }) => theme.color.red};
`;
