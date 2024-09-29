import styled from "styled-components";
import { Link } from "react-router-dom";

const LandingPageBackground = styled.div`
  background: url(background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  // // TODO: change and calculate with Header
  min-height: 108vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -20vh;
`;

const StyledHeading = styled.h2`
  display: block;
  font-size: ${(props) => (props.$small ? "2rem" : "3rem")};
  color: ${(props) =>
    props.dark ? "var(--clr-black)" : "var(--clr-tertiary)"};
  color: ${(props) => props.$override && "var(--clr-black)"};
  @media (max-width: 576px) {
    text-align: center;
  }
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
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const StyledInput = styled.input`
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

const StyledFormHeading = styled.p`
  font-size: 2rem;
  color: var(-clr-tertiary);
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
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const ProductWrapper = styled.div`
  text-align: center;
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
  color: var(--clr-black);
`;

const StyledEnhancedText = styled.span`
  font-weight: 600;
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
  StyledEnhancedText,
  ProductWrapper,
};
