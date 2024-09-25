import React from "react";
import { useNavigate } from "react-router-dom";
import { SectionContainer } from "../container/SectionContainer";
import { ButtonPrimary } from "../components/App.styled";
import { StyledHeading } from "./pages.styled";

/**
 * Empty page
 */
export default function EmptyPage() {
  const navigate = useNavigate();

  return (
    <SectionContainer column>
      <StyledHeading dark>Nothing to see here</StyledHeading>
      <ButtonPrimary onClick={() => navigate("/")}>
        Back to home page
      </ButtonPrimary>
    </SectionContainer>
  );
}
