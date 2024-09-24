import React, { useEffect, useState, useContext } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { SectionContainer } from "../container/SectionContainer";
import useAuthContext from "../context/useAuthContext";
import { createCookie, parseJwt } from "../utils";
import { ACCESS_TOKEN, REFRESH_ACCESS_TOKEN } from "../constants";
export default function LoginPage() {
  const username = "emilys";
  const password = "emilyspass";

  const { setUserInfo, setToken } = useAuthContext();

  const handleLogin = async () => {
    // validation?
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30, // optional, defaults to 60
      }),
    });
    const {
      accessToken,
      refreshToken,
      username,
      email,
      gender,
      firstName,
      lastName,
      image,
    } = await response.json();
    // handle refresh on effect user info

    const payload = parseJwt(accessToken);
    document.cookie = createCookie(
      ACCESS_TOKEN,
      accessToken,
      new Date(payload.exp * 1000)
    );
    localStorage.setItem(REFRESH_ACCESS_TOKEN, refreshToken);

    const userInfo = {
      username,
      email,
      firstName,
      lastName,
      gender,
      image,
      tokenExpiresAt: payload.exp * 1000,
    };

    setUserInfo(userInfo);
    setToken(accessToken);
  };

  return (
    <>
      <h2>Login</h2>
      <SectionContainer>
        <button onClick={handleLogin}>login</button>{" "}
      </SectionContainer>
    </>
  );
}
