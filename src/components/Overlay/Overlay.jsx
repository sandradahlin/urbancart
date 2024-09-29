import { useNavigate } from "react-router-dom";
import { StyledOverlay } from "./Overlay.styled";
import useAuthContext from "../../context/AuthProvider/useAuthContext";
import { StyledHeading } from "../../pages/pages.styled";
import { ButtonPrimary } from "../App.styled";

export default function Overlay() {
  const navigate = useNavigate();

  const { showAuthOverlay, setShowAuthOverlay } = useAuthContext();

  const handleOverlay = () => {
    navigate("/login");
    setShowAuthOverlay(false);
  };

  if (!showAuthOverlay) {
    return <></>;
  }
  return (
    <StyledOverlay className="hej">
      <StyledHeading $override>Session expired</StyledHeading>
      <p>You session has expired, please login again</p>
      <ButtonPrimary onClick={handleOverlay}>Login</ButtonPrimary>
    </StyledOverlay>
  );
}
