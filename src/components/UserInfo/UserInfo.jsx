import React from "react";
import { useLocation } from "react-router-dom";
import useAuthContext from "../../context/AuthProvider/useAuthContext";
import { Avatar, UserInfoWrapper, UserName } from "./UserInfo.styled";

/**
 * UserIfo component render avatar and user name if the user is logged in
 */
export default function UserInfo({ setShowDropdown }) {
  const { userInfo } = useAuthContext();
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  if (!userInfo) {
    return null;
  }

  const { firstName, image } = userInfo;

  return (
    <UserInfoWrapper onClick={() => setShowDropdown(true)}>
      <Avatar src={image} />
      <UserName $landing={isLandingPage}>{firstName}</UserName>
    </UserInfoWrapper>
  );
}
