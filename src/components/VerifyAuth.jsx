import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAuthContext from "../context/AuthProvider/useAuthContext";
import { ACCESS_TOKEN } from "../constants";
import withRouter from "./withRouter";
import { getCookie, parseJwt } from "../utils";

/**
 * Check if user token has expired and logout user.
 * Check authentication on route change.
 */
function VerifyAuth() {
  const { logoutUser } = useAuthContext();
  const location = useLocation();

  const verifyLogin = () => {
    const userToken = getCookie(document.cookie, ACCESS_TOKEN);
    if (!userToken) {
      logoutUser();
      return;
    }

    const decodedJwt = parseJwt(userToken);
    if (decodedJwt.exp * 1000 < Date.now()) {
      logoutUser();
    }
  };

  useEffect(() => {
    verifyLogin();
  }, [location]);
}

export default withRouter(VerifyAuth);
