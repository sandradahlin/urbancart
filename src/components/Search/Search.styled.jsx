import styled from "styled-components";

const SearchWrapper = styled.div`
  width: 100%;
  padding: 0 3rem;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  position: relative;
`;

const StyledSearchIcon = styled.button`
  position: absolute;
  right: 4rem;
  top: 1rem;
  font-size: 1.5em;
  color: #777;

  border: none;
  background: transparent;
  :hover {
    cursor: pointer;
  }
`;

export { SearchWrapper, SearchInput, StyledSearchIcon };
