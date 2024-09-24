import React, { useEffect, useState, useMemo } from "react";
import AuthContext from "./AuthContext";
import { ACCESS_TOKEN, REFRESH_ACCESS_TOKEN } from "../constants";
import { createRemoveCookie, getCookie } from "../utils";

const FIVE_MINUTES_IN_MS = 0.5 * 60 * 1000;

export function AuthProvider({ children }) {
  const [token, setToken] = useState(getCookie(document.cookie, ACCESS_TOKEN));
  const [userInfo, setUserInfo] = useState(null);

  const isAuthenticated = !!token;

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
  }, [userInfo]);

  const api = useMemo(
    () => ({
      token,
      userInfo,
      setUserInfo,
      setToken,
      logoutUser,
      isAuthenticated,
    }),
    [token]
  );

  return <AuthContext.Provider value={api}>{children}</AuthContext.Provider>;
}
