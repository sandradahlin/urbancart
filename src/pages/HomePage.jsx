import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SectionContainer } from "../container/SectionContainer";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetch("https://dummyjson.com/products");
      const parsed = await data.json();
      setProducts(parsed.products);
      console.log(parsed);
    };

    getArticles();
  }, []);

  if (!products) {
    return <p>no products</p>;
  }
  return (
    <>
      <h2>Welcome to Urban cart</h2>
      <SectionContainer>
        {products?.map((product) => (
          <div>
            <Link to={`product/${product.id}`}>
              <img src={product.thumbnail} />
              <p>{product.title}</p>
            </Link>
          </div>
        ))}
      </SectionContainer>
    </>
  );
}
