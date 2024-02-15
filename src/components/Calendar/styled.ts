import styled from "styled-components";

const BORDER_RAD_PRIMARY = "8px";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${({ theme }) => theme.size.s};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${BORDER_RAD_PRIMARY};
`;

export default Container;
