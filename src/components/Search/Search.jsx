import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchWrapper, SearchInput, StyledSearchIcon } from "./Search.styled";
import ProductContext from "./../../context/ProductProvider/ProductContext";

/**
 * Search component
 */
export default function Search() {
  const { setQuery } =
    useContext(ProductContext);

  return (
    <SearchWrapper>
      <SearchInput placeholder="Search products" onChange={(e) => setQuery(e.target.value)} />
      <StyledSearchIcon>
        <FontAwesomeIcon icon={faSearch} />
      </StyledSearchIcon>
    </SearchWrapper>
  );
}
