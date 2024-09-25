import styled from "styled-components";

const Avatar = styled.img`
  height: 2rem;
  margin-right: 0.5rem;
`;
const UserName = styled.span`
  letter-spacing: var(--spacing);
  font-size: 0.875rem;
`;

const UserInfoWrapper = styled.div`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Avatar, UserInfoWrapper, UserName };
