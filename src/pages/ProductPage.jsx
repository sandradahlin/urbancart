import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NarrowContainer } from "../container/NarrowContainer";
import { StyledProductImage, StyledLink, StyledHeading, StyledEnhancedText } from "./pages.styled";

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
          <StyledHeading $override $small>{title}</StyledHeading>
          <p>{price} $</p>
          <p>{description}</p>
          <p>Brand: <StyledEnhancedText>{brand}</StyledEnhancedText></p>
          <p>{shippingInformation}</p>
          <p>{returnPolicy}</p>
          <button className="btn btn-primary">Buy now</button>
        </div>
      </NarrowContainer>
    </>
  );
}
