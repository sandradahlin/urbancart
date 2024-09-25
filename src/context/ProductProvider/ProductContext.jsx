import React, { useEffect, useState, createContext } from "react";

const ProductContext = createContext({
  products: [],
  paginateProducts: () => {},
  productsTotal: 0,
  productsLimit: 0,
  query: "",
  setQuery: () => {},
  loadingProducts: false,
});

export default ProductContext;
