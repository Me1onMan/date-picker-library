import styled from "styled-components";

const P_100 = "100%";
const VW_100 = "100vw";
const VH_100 = "100vh";
const VH_50 = "50vh";
const Z_INDEX = 1000;
const BORDER_RAD_PRIMARY = "8px";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: ${Z_INDEX};

  width: ${VW_100};
  height: ${VH_100};

  background-color: ${({ theme }) => theme.color.modalWrapper};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${({ theme }) => theme.size.s};

  background-color: ${({ theme }) => theme.color.white};

  border: 1px solid;
  border-color: ${({ theme }) => theme.color.border};
  border-radius: ${BORDER_RAD_PRIMARY};
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

  margin-top: ${({ theme }) => theme.size.m};
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.size.s};
`;

export const AddButton = styled.button`
  cursor: pointer;

  padding: ${({ theme }) => theme.size.s};

  background-color: ${({ theme }) => theme.color.white};

  border: 1px solid;
  border-color: ${({ theme }) => theme.color.border};
  border-radius: ${BORDER_RAD_PRIMARY};

  color: ${({ theme }) => theme.color.textSecondary};

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }
`;

export const TasksContainer = styled.div`
  width: ${P_100};
  max-height: ${VH_50};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size.m};

  margin-top: ${({ theme }) => theme.size.m};
`;
