import { useLocation } from "react-router-dom";
import useAuthContext from "../../context/AuthProvider/useAuthContext";
import { StyledHeader, StyledImage, UserControls } from "./Header.styled";
import logo from "../..";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { ButtonTertiary, StyledLink } from "../App.styled";

export default function Header() {
  const { logoutUser, userInfo, isAuthenticated, handleLogin } =
    useAuthContext();
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  const renderUserAuthButtons = () => {
    if (isAuthenticated) {
      return (
        <ButtonTertiary
          onClick={logoutUser}
          className="btn btn-tertiary"
          landing={isLandingPage}
        >
          logout
        </ButtonTertiary>
      );
    }

    return (
      <StyledLink to="/login" landing={isLandingPage}>
        login
      </StyledLink>
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
