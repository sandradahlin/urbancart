import React from "react";
import useAuthContext from "../context/AuthProvider/useAuthContext";

import { NarrowContainer } from "../container/NarrowContainer";
import { StyledProductImage, StyledLink } from "./pages.styled";

export default function ProfilePage() {
  const { userInfo } = useAuthContext();

  if (!userInfo) {
    return;
  }
  const { username, email, firstName, lastName, image } = userInfo;

  return (
    <>
      <NarrowContainer>
        <StyledLink to="/home"> {"< "}Back to products</StyledLink>
        <StyledProductImage src={image}></StyledProductImage>
        <div>
          <h4>
            {firstName} {lastName}
          </h4>
          <p>email: {email}</p>
          <p>username: {username}</p>
        </div>
      </NarrowContainer>
    </>
  );
}
