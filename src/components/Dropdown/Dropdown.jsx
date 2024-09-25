import React, { useRef } from "react";
import useAuthContext from "../../context/AuthProvider/useAuthContext";
import { useNavigate } from "react-router-dom";
import { DropdownWrapper, DropdownItem } from "./Dropdown.styled";

/**
 * Dropdown component with profile and logout links
 */
export default function Dropdown({ showDropdown, setShowDropdown }) {
  const navigate = useNavigate();
  const { logoutUser } = useAuthContext();

  const dropdownRef = useRef(null);

  const closeDropdown = (e) => {
    if (showDropdown && !dropdownRef.current?.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  const handleClick = () => {
    navigate("/profile");
    setShowDropdown(false);
  };

  document.addEventListener("mousedown", closeDropdown);

  if (!showDropdown) {
    return <></>;
  }
  return (
    <DropdownWrapper ref={dropdownRef}>
      <ul>
        <DropdownItem onClick={handleClick}>my profie</DropdownItem>
        <DropdownItem onClick={logoutUser}>logout</DropdownItem>
      </ul>
    </DropdownWrapper>
  );
}
