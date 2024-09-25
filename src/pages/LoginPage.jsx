import React, { useEffect, useState, useContext } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { SectionContainer } from "../container/SectionContainer";
import useAuthContext from "../context/AuthProvider/useAuthContext";
import { createCookie, parseJwt } from "../utils";
import { ACCESS_TOKEN, REFRESH_ACCESS_TOKEN } from "../constants";

export default function LoginPage() {
  // const username = "emilys";
  // const password = "emilyspass";

  const { username, setUsername } = useState("");
  const { password, setPassword } = useState("");
  const { usernameError, setUsernameError } = useState("");
  const { passwordError, setPasswordError } = useState("");

  const { handleLogin } = useAuthContext();

  const validateFileds = () => {
    if (!username) {
      setUsernameError("Please enter email");
    }

    if (!password) {
      setPasswordError("Please enter password");
    }

    if (/^\S+@\S+\.\S+$/.test("email")) {
      setUsernameError("Please enter a valid email");
    }
    if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }
  };
  // const handleSubmit = () => {

  // }
  return (
    <>
      <h2>Login</h2>
      <SectionContainer>
        <form>
          {" "}
          <input
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </form>
        <button onClick={handleLogin}>login</button>{" "}
      </SectionContainer>
    </>
  );
}
