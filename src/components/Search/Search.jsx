import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchWrapper, SearchInput, StyledSearchIcon } from "./Search.styled";
export default function Search() {
  const [query, setQuery] = useState("");

  const searchProducts = () => {
    if (!query) {
      return;
    }
  };

  return (
    <SearchWrapper>
      <SearchInput placeholder="Search products" />
      <StyledSearchIcon>
        <FontAwesomeIcon icon={faSearch} />
      </StyledSearchIcon>
    </SearchWrapper>
  );
}
