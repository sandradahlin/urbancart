import React, { useEffect, useState, useMemo } from "react";
import AuthContext from "./AuthContext";
import { ACCESS_TOKEN, REFRESH_ACCESS_TOKEN } from "../../constants";
import { createCookie, createRemoveCookie, getCookie, parseJwt } from "../../utils";

const FIVE_MINUTES_IN_MS = 0.5 * 60 * 1000;

export function AuthProvider({ children }) {
  const [token, setToken] = useState(getCookie(document.cookie, ACCESS_TOKEN));
  const [userInfo, setUserInfo] = useState(null);

  const isAuthenticated = !!token;

  useEffect(() => {
    const token = getCookie(document.cookie, ACCESS_TOKEN);
    if (!token) {
      // change to navigate
      return;
    }
    const userInfo = parseJwt(token);
    // TODO: HANDLE EXPIRATION FOR REFRESHING THE TOKEN
    console.log(userInfo, "'' info")
    setUserInfo(userInfo);
  }, []);
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
    console.log(payload, "*** payload")
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

  const refreshToken = async () => {
    const token = localStorage.getItem(REFRESH_ACCESS_TOKEN);
    if (!token) {
      return;
    }
    try {
      const response = fetch("https://dummyjson.com/auth/refresh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          refreshToken: token, // Optional, if not provided, the server will use the cookie
          expiresInMins: 3, // optional (FOR ACCESS TOKEN), defaults to 60
        }),
      });
      const parsed = await response.json();
      console.log(parsed, "**** refesh token**************");
    } catch (err) {}
  };

  const logoutUser = () => {
    localStorage.removeItem(REFRESH_ACCESS_TOKEN);

    document.cookie = createRemoveCookie(ACCESS_TOKEN);
    setToken("");
  };
  // refresh token right before it expires
  useEffect(() => {
    if (!userInfo) {
      return;
      //   return () => {};
    }
    console.log(
      "starting timer",
      userInfo.tokenExpiresAt - FIVE_MINUTES_IN_MS - Date.now()
    );

    const refreshTimer = setTimeout(() => {
      console.log("inside timer");

      refreshToken();
    }, userInfo.tokenExpiresAt - FIVE_MINUTES_IN_MS - Date.now());

    return clearTimeout(refreshTimer);
  }, [token]);

  const api = useMemo(
    () => ({
      token,
      userInfo,
      setUserInfo,
      setToken,
      logoutUser,
      isAuthenticated,
      handleLogin,
    }),
    [token, userInfo]
  );

  return <AuthContext.Provider value={api}>{children}</AuthContext.Provider>;
}
