import { Link } from "react-router-dom";

import useAuthContext from "../../context/AuthProvider/useAuthContext";
import { StyledHeader, StyledImage, UserControls } from "./Header.styled";
import logo from "../..";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

export default function Header() {
  const { logoutUser, userInfo, isAuthenticated, handleLogin } = useAuthContext();

  const renderUserAuthButtons = () => {
    if (isAuthenticated) {
      return (
        <button onClick={logoutUser} className="btn btn-tertiary">
          logout
        </button>
      );
    }
    return (
     <Link to="/login">login</Link>
    );
  };
  return (
    <StyledHeader>
      <StyledImage src="/logonew.png" />
      <UserControls>
        {/* // rewrtei to styled */}
        {renderUserAuthButtons()}

        <ThemeToggler />
      </UserControls>
    </StyledHeader>
  );
}
