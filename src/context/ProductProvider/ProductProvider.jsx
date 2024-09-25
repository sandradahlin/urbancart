import React, {
  useEffect,
  useMemo,
  useState,
} from "react";
import ProductContext from "./ProductContext";

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [productsLimit, setProductsLimit] = useState(0);
  const [productsTotal, setProductsTotal] = useState(0);
  const [query, setQuery] = useState("");
  const [loadingProducts, setLoadingProducts] = useState(true);

  /**
   * Fetch all products, or fetch products based on search query
   */
  const getProducts = async () => {
    try {
      setLoadingProducts(true)
      const url = query
        ? `https://dummyjson.com/products/search?q=${query}`
        : `https://dummyjson.com/products?limit=10&skip=${productsLimit}`;

      const data = await fetch(url);
      const parsed = await data.json();

      setProducts(parsed.products);
      setProductsTotal(parsed.total);
    } catch (error) {
      console.error(error);
      // Log error
    }
    finally{
      setLoadingProducts(false)

    }
  };

  useEffect(() => {
    getProducts();
  }, [query, productsLimit]);

  /**
   * Paginate products, either by incrementing or decrementing pages
   * @param {boolean} increment 
   * @returns void
   */
  const paginateProducts = (increment = true) => {
    if (increment) {
      setProductsLimit(productsLimit + 10);
      return;
    }
    setProductsLimit(productsLimit - 10);
  };

  const api = useMemo(
    () => ({
      products,
      paginateProducts,
      productsTotal,
      productsLimit,
      query,
      setQuery,
      loadingProducts,
    }),
    [products]
  );

  return (
    <ProductContext.Provider value={api}>{children}</ProductContext.Provider>
  );
}
