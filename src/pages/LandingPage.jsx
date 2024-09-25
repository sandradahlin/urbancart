import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SectionContainer } from "../container/SectionContainer";
import { LandingPageBackground, StyledHeading } from "./pages.styled";

export default function LandingPage() {

  return (
      <LandingPageBackground>
        <StyledHeading> Welcome to Urban Cart</StyledHeading>
        <p>Login to you profile and start shopping</p>
      </LandingPageBackground>
  );
}
