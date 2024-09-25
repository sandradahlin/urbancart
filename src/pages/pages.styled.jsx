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
  color: var(--clr-tertiary);
`;

/**
 * Login page components
 */
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  position: relative;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledFormWrapper = styled.div`
  width: 40%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledInput = styled.input`
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

const StyledFormHeading = styled.p`
  font-size: 2rem;
  color: #444;
  letter-spacing: var(--spacing);
`;

const StyledValidationError = styled.span`
  position: absolute;
  bottom: 1.5rem;
  left: 3rem;
  font-size: 0.8rem;
  color: var(--clr-primary);
`;

/**
 * Home page
 */
const CustomerWelcomeBox = styled.div`
  padding: 1rem 3rem;
  width: 50%;
`;

export {
  LandingPageBackground,
  StyledHeading,
  StyledForm,
  StyledInputWrapper,
  StyledFormWrapper,
  StyledInput,
  StyledFormHeading,
  StyledValidationError,
  CustomerWelcomeBox,
};
