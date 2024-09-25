import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SectionContainer } from "../container/SectionContainer";
import { LandingPageBackground, StyledHeading, StyledIntro } from "./pages.styled";
import { ButtonSecondary } from "../components/App.styled";

export default function LandingPage() {

  return (
      <LandingPageBackground>
        <StyledHeading> Welcome to Urban Cart</StyledHeading>
        <StyledIntro>Login to you profile and start shopping</StyledIntro>
        <ButtonSecondary>Login now</ButtonSecondary>
      </LandingPageBackground>
  );
}
