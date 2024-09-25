import React, { useEffect, useState, useContext } from "react";
import ProductContext from "./ProductContext";

const useProductContext = () => {
  return useContext(ProductContext);
};

export default useProductContext;
