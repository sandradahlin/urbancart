import React, { useEffect, useState, createContext } from "react";

const AuthContext = createContext({
  token: "",
  userInfo: null,
  setUserInfo: () => {},
  setToken: () => {},
  logoutUser: () => {},
  isAuthenticated: false,
});

export default AuthContext;
