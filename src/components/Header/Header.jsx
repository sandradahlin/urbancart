import useAuthContext from "../../context/AuthProvider/useAuthContext";
import { StyledHeader, StyledImage, UserControls } from "./Header.styled";
import logo from "../..";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
export default function Header() {
  const { logoutUser, userInfo, isAuthenticated } = useAuthContext();

  return (
    <StyledHeader>
      <StyledImage src="/logonew.png" />
      <UserControls>
        {/* // rewrtei to styled */}
        <button onClick={logoutUser} className="btn btn-tertiary">logout</button>

        <ThemeToggler />
      </UserControls>
    </StyledHeader>
  );
}
