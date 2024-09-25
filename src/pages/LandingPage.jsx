import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SectionContainer } from "../container/SectionContainer";
import {
  LandingPageBackground,
  StyledHeading,
  StyledIntro,
} from "./pages.styled";
import { ButtonSecondary } from "../components/App.styled";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <LandingPageBackground>
      <StyledHeading> Welcome to Urban Cart</StyledHeading>
      <StyledIntro>Login to you profile and start shopping</StyledIntro>
      <ButtonSecondary onClick={() => navigate("/login")}>
        Login now
      </ButtonSecondary>
    </LandingPageBackground>
  );
}
