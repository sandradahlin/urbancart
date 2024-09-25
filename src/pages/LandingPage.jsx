import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LandingPageBackground,
  StyledHeading,
  StyledIntro,
} from "./pages.styled";
import { ButtonSecondary } from "../components/App.styled";
import useAuthContext from "../context/AuthProvider/useAuthContext";

/**
 * Landing page with the welcome text and link to shopping/logging in
 */
export default function LandingPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();

  const renderUserWelcomeText = () => {
    if (!isAuthenticated) {
      return (
        <>
          <StyledIntro>Login to you profile and start shopping</StyledIntro>
          <ButtonSecondary onClick={() => navigate("/login")}>
            Login now
          </ButtonSecondary>
        </>
      );
    }
    return (
      <>
        <StyledIntro>Start your shopping experience now!</StyledIntro>
        <ButtonSecondary onClick={() => navigate("/home")}>
          Shop now
        </ButtonSecondary>
      </>
    );
  };
  return (
    <LandingPageBackground>
      <StyledHeading> Welcome to Urban Cart</StyledHeading>
      {renderUserWelcomeText()}
    </LandingPageBackground>
  );
}
