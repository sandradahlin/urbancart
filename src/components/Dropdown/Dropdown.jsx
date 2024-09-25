import useAuthContext from "../../context/AuthProvider/useAuthContext";
import { useLocation, useNavigate } from "react-router-dom";

import { DropdownWrapper, DropdownItem } from "./Dropdown.styled";

export default function Dropdown({ showDropdown }) {
  const navigate = useNavigate();
  const { logoutUser, userInfo, isAuthenticated, handleLogin } =
    useAuthContext();
  if (!showDropdown) {
    return null;
  }
  return (
    <DropdownWrapper>
      <ul>
        <DropdownItem onClick={() => navigate("/profile")}>
          my profie
        </DropdownItem>
        <DropdownItem onClick={logoutUser}>logout</DropdownItem>
      </ul>
    </DropdownWrapper>
  );
}
