import styled from "styled-components";

const StyledOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 11111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f5fa;
  background: linear-gradient(top, #d9ecff, #fff);
  opacity: 0.8;
`;

export { StyledOverlay };
