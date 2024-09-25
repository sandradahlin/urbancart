import styled from "styled-components";

const LandingPageBackground = styled.div`
  background: url(sale.gif);
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -20vh;
`;

const StyledHeading = styled.h2`
  display: block;
  color: var(--clr-tertiary)
`;

export { LandingPageBackground, StyledHeading };
