import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SectionContainer } from "../container/SectionContainer";
import useAuthContext from "../context/AuthProvider/useAuthContext";
import {
  StyledForm,
  StyledInputWrapper,
  StyledFormWrapper,
  StyledInput,
  StyledFormHeading,
  StyledValidationError,
} from "./pages.styled";

/**
 * Login page for customer login
 */
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");

  const navigate = useNavigate();

  const { handleLogin, isAuthenticated } = useAuthContext();

  const handleUsernameInputChange = (input) => {
    setValidationError("");
    setUsername(input);
  };

  const handlePasswordInputChange = (input) => {
    setValidationError("");
    setPassword(input);
  };

  /**
   * Validates user input fields
   * @returns validationSuccessful
   */
  const validateInputFields = () => {
    if (!username) {
      setValidationError("Please enter username");
      return false;
    }

    if (!password) {
      setValidationError("Please enter password");
      return false;
    }

    if (password.length < 6) {
      setValidationError("The password must be 7 characters or longer");
      return false;
    }
    return true;
  };

  /**
   * Handles data submission by user and validates fields
   * If successful handle loging in user
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationSuccessful = validateInputFields();
    if (validationSuccessful) {
      handleLogin(username, password);
      navigate("/home");
    }
  };

  if (isAuthenticated) {
    navigate("/home");
    return <></>;
  }

  return (
    <SectionContainer>
      <StyledFormWrapper>
        <StyledFormHeading>CUSTOMER LOGIN</StyledFormHeading>
        <StyledForm onSubmit={(e) => handleSubmit(e)}>
          <StyledInputWrapper>
            <StyledInput
              placeholder="Enter your username"
              onChange={(e) => handleUsernameInputChange(e.target.value)}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledInput
              placeholder="Enter your password"
              onChange={(e) => handlePasswordInputChange(e.target.value)}
            />
          </StyledInputWrapper>
          <button className="btn btn-primary" onClick={handleSubmit}>
            login
          </button>
        </StyledForm>
        {validationError && (
          <StyledValidationError>{validationError}</StyledValidationError>
        )}
      </StyledFormWrapper>
    </SectionContainer>
  );
}
