import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SectionContainer } from "../container/SectionContainer";
import { CustomerWelcomeBox } from "./pages.styled";
import Search from "../components/Search/Search";
import Pagination from "../components/Pagination/Pagination";
import useProductContext from "../context/ProductProvider/useProductContext";
export default function HomePage() {
  const {products, getProducts} = useProductContext();

  // useEffect(() => {
  //   getProducts();
  // }, []);

  if (!products) {
    return <p>no products</p>;
  }
  return (
    <>
      <CustomerWelcomeBox>
        <h3>Warm welcome to Urban cart </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </CustomerWelcomeBox>
      <Search />
      <SectionContainer wrap>
        {products?.map((product) => (
          <div>
            <Link to={`product/${product.id}`}>
              <img src={product.thumbnail} />
              <p>{product.title}</p>
            </Link>
          </div>
        ))}
      </SectionContainer>
      <Pagination />
    </>
  );
}
