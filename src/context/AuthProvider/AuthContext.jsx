import React, { useEffect, useState, createContext } from "react";

const AuthContext = createContext({
  token: "",
  userInfo: null,
  setUserInfo: () => {},
  setToken: () => {},
  logoutUser: () => {},
  isAuthenticated: false,
  handleLogin: () => {},
  showAuthOverlay: false,
  setShowAuthOverlay: () => {},
});

export default AuthContext;
