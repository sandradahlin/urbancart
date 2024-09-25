import styled from "styled-components";

const StyledHeader = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: transparent;
`;

const StyledImage = styled.img`
  height: 5rem;
  &:hover {
    cursor: pointer;
  }
`;

const UserControls = styled.div`
  display: flex;
  align-items: center;
`;

export { StyledHeader, StyledImage, UserControls };
