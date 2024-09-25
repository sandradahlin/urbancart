import React from "react";
import { Link } from "react-router-dom";
import { SectionContainer } from "../container/SectionContainer";
import { CustomerWelcomeBox, StyledHeading } from "./pages.styled";
import Search from "../components/Search/Search";
import Pagination from "../components/Pagination/Pagination";
import useProductContext from "../context/ProductProvider/useProductContext";
import Loader from "../components/Loader/Loader";

/**
 * Homepage with the product list, search bar and pagination
 */
export default function HomePage() {
  const { products, loadingProducts } = useProductContext();

  const renderProductList = () => {
    if (loadingProducts) {
      return <Loader />;
    }
    if (!products || products.length === 0) {
      return <p>No products found</p>;
    }
    return products?.map((product) => (
      <div>
        <Link to={`product/${product.id}`}>
          <img src={product.thumbnail} />
          <p>{product.title}</p>
        </Link>
      </div>
    ));
  };

  return (
    <>
      <CustomerWelcomeBox>
        <StyledHeading small>Warm welcome to Urban cart </StyledHeading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </CustomerWelcomeBox>
      <Search />
      <SectionContainer $wrap>{renderProductList()}</SectionContainer>
      <Pagination />
    </>
  );
}
