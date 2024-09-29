import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  font-family: "Gowun Batang", sans-serif;
  padding: 1rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  color: var(--clr-toggle);
`;

const ButtonPrimary = styled(Button)`
  background-color: var(--clr-primary);
  text-transform: uppercase;
  color: var(--clr-white);
`;

const ButtonSecondary = styled(Button)`
  background-color: transparent;
  color: var(--clr-tertiary);
  text-transform: uppercase;
  border: 1px solid var(--clr-tertiary);
`;

const ButtonTertiary = styled(Button)`
  background-color: transparent;
  color: ${(props) =>
    props.$landing ? `var(--clr-tertiary)` : `var(--clr-black);`};
`;

const StyledLink = styled(Link)`
  padding: 1rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  color: ${(props) =>
    props.$landing ? `var(--clr-tertiary)` : `var(--clr-black);`};
`;
export { ButtonPrimary, ButtonSecondary, ButtonTertiary, StyledLink };
