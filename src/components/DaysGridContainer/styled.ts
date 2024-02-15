import styled from "styled-components";

const WIDTH = "224px";

const Grid = styled.div`
  width: ${WIDTH};

  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export default Grid;
