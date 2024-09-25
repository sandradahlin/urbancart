import styled from "styled-components";

export const SectionContainer = styled.div`
  min-height: 85vh;
  padding: 3rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => props.column ? "column" : "row"};
  flex-wrap: ${props => props.$wrap ? "wrap" : "nowrap"};
`;
