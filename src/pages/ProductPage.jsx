import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { NarrowContainer } from "../container/NarrowContainer";
import { StyledProductImage, StyledLink } from "./pages.styled";

/**
 * Single product page
 */
export default function ProductPagePage() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getArticle = async () => {
      const data = await fetch(`https://dummyjson.com/products/${id}`);
      const parsed = await data.json();
      setProduct(parsed);
      console.log(parsed);
    };

    getArticle();
  }, []);

  if (!product) {
    return null;
  }

  const {
    brand,
    description,
    price,
    title,
    images: [image],
    shippingInformation,
    returnPolicy,
  } = product;
  
  return (
    <>
      <NarrowContainer>
        <StyledLink to="/home"> {"< "}Back to products</StyledLink>
        <StyledProductImage src={image}></StyledProductImage>
        <div>
          <h4>{title}</h4>
          <p>{price} $</p>
          <p>{description}</p>
          <p>{brand}</p>
          <p>{shippingInformation}</p>
          <p>{returnPolicy}</p>
          <button className="btn btn-primary">Buy now</button>
        </div>
      </NarrowContainer>
    </>
  );
}
