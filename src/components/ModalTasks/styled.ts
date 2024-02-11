import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: ${({ theme }) => theme.color.modalWrapper};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${({ theme }) => theme.size.s};

  background-color: ${({ theme }) => theme.color.white};

  border-color: ${({ theme }) => theme.color.border};
  border: ${({ theme }) => theme.border.line.primary};
  border-radius: ${({ theme }) => theme.border.radius.primary};
`;

export const CloseButton = styled.button`
  align-self: end;

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ theme }) => theme.size.l};
  height: ${({ theme }) => theme.size.l};

  font-size: ${({ theme }) => theme.size.l};

  background-color: ${({ theme }) => theme.color.white};
  border: none;

  &:hover {
    cursor: pointer;
    color: red;
  }
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.font.size.l};
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.size.s};
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.size.s};
`;

export const AddButton = styled.button`
  padding: ${({ theme }) => theme.size.s};
`;

export const TasksContainer = styled.div`
  width: 100%;
  max-height: 50vh;
`;
