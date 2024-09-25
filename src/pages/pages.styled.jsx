import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const LandingPageBackground = styled.div`
  background: url(background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  // // TODO: change and calculate with Header
  min-height: 106.8vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -20vh;
`;

const StyledHeading = styled.h2`
  display: block;
  font-size: 3rem;
  color: var(--clr-tertiary);
`;

const StyledIntro = styled.p`
  color: var(--clr-white);
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

/**
 * Product page
 */

const StyledProductImage = styled.img`
  width: 50%;
  height: auto;
`;

const StyledProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledPriceInfo = styled.span`
  margin-bottom: 0.75rem;
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
`;

export {
  LandingPageBackground,
  StyledHeading,
  StyledIntro,
  StyledForm,
  StyledInputWrapper,
  StyledFormWrapper,
  StyledInput,
  StyledFormHeading,
  StyledValidationError,
  CustomerWelcomeBox,
  StyledProductImage,
  StyledProductInfo,
  StyledPriceInfo,
  StyledLink,
};
