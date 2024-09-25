import { useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../context/AuthProvider/useAuthContext";
import { StyledHeader, StyledImage, UserControls } from "./Header.styled";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { StyledLink } from "../App.styled";
import Dropdown from "../Dropdown/Dropdown";
import UserInfo from "../UserInfo/UserInfo";
import { useState } from "react";

/**
 * Header component with logo and auth and theme buttons
 */
export default function Header() {
  const { isAuthenticated } = useAuthContext();

  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";

  const renderUserAuthButtons = () => {
    if (isAuthenticated) {
      return (
        <>
          <UserInfo setShowDropdown={setShowDropdown} />
          <Dropdown
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
        </>
      );
    }
    if (!isLoginPage) {
      return (
        <StyledLink to="/login" $landing={isLandingPage}>
          login
        </StyledLink>
      );
    }
  };

  return (
    <StyledHeader>
      <StyledImage src="/logonew.png" onClick={() => navigate("/")} />
      <UserControls>
        {renderUserAuthButtons()}
        <ThemeToggler />
      </UserControls>
    </StyledHeader>
  );
}
