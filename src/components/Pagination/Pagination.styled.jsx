import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledPaginationWrapper = styled.div`
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const StyledPaginationArrow = styled.button`
  font-size: 1.5em;
  // color: #111;
  padding: 1rem;
  border: none;
  background: transparent;
  cursor: pointer;

  &disabled {
    cursor: none;
  }
`;

export { StyledPaginationWrapper, StyledPaginationArrow };
