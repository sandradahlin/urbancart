import styled from "styled-components";

const DropdownWrapper = styled.div`
  position: absolute;
  padding: 1rem;
  background: var(--clr-white);
  top: 5rem;
  border: 1px solid #666;
  border-top: none;
`;

const DropdownItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid #888;
  &:hover {
    cursor: pointer;
  }
`;

export { DropdownWrapper, DropdownItem };
