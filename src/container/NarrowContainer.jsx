import styled from "styled-components";

export const NarrowContainer = styled.div`
  min-height: 85vh;
  padding: 3rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 70%;
  position: relative;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
