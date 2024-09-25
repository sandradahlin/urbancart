import React, { useEffect, useState, useContext } from "react";
import ProductContext from "./../../context/ProductProvider/ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  StyledPaginationWrapper,
  StyledPaginationArrow,
} from "./Pagination.styled";

export default function Pagination() {
  const { productsTotal, paginateProducts, productsLimit } =
    useContext(ProductContext);

  const shouldDisableDecrement = productsLimit === 0 ? true : false;
  const shouldDisableIncrement = productsLimit >= productsTotal ? true : false;

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
