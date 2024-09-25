import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../../context/AuthProvider/useAuthContext";
import { Avatar, UserInfoWrapper, UserName } from "./UserInfo.styled";
export default function UserInfo({setShowDropdown}) {
  const { userInfo } = useAuthContext();
  console.log(userInfo);

  if (!userInfo) {
    return null;
  }
  
  const { firstName, image } = userInfo;

  return (
    <UserInfoWrapper onClick={() => setShowDropdown(true)}>
      <Avatar src={image} />
      <UserName>{firstName}</UserName>
    </UserInfoWrapper>
  );
}
