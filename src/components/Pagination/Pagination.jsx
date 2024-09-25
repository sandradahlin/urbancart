import React, { useContext } from "react";
import ProductContext from "./../../context/ProductProvider/ProductContext";
import {
  StyledPaginationWrapper,
  StyledPaginationArrow,
} from "./Pagination.styled";

/**
 * Pagination compoennt for paginating the products.
 * Does not render for search.
 */
export default function Pagination() {
  const { productsTotal, paginateProducts, productsLimit, query } =
    useContext(ProductContext);

  const shouldDisableDecrement = productsLimit === 0 ? true : false;
  const shouldDisableIncrement = productsLimit >= productsTotal ? true : false;

  if (query) {
    return null;
  }

  return (
    <StyledPaginationWrapper>
      <StyledPaginationArrow
        onClick={() => paginateProducts(false)}
        disabled={shouldDisableDecrement}
      >
        {"<"}
      </StyledPaginationArrow>
      <StyledPaginationArrow
        onClick={paginateProducts}
        disabled={shouldDisableIncrement}
      >
        {">"}
      </StyledPaginationArrow>
    </StyledPaginationWrapper>
  );
}
