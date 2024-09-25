import { useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../context/AuthProvider/useAuthContext";
import { StyledHeader, StyledImage, UserControls } from "./Header.styled";
import logo from "../..";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { ButtonTertiary, StyledLink } from "../App.styled";
import Dropdown from "../Dropdown/Dropdown";
import UserInfo from "../UserInfo/UserInfo";
export default function Header() {
  const { logoutUser, userInfo, isAuthenticated, handleLogin } =
    useAuthContext();

  const navigate = useNavigate();
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  const renderUserAuthButtons = () => {
    if (isAuthenticated) {
      return (
        // <ButtonTertiary
        //   onClick={logoutUser}
        //   className="btn btn-tertiary"
        //   landing={isLandingPage}
        // >
        //   logout
        // </ButtonTertiary>
        <UserInfo />
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
      <StyledImage src="/logonew.png" onClick={() => navigate("/")} />
      <UserControls>
        {/* // rewrtei to styled */}
        {renderUserAuthButtons()}

        <ThemeToggler />
      </UserControls>
    </StyledHeader>
  );
}
