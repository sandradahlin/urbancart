import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import { SectionContainer } from "../containers/SectionContainer";

export default function ProductPagePage() {
  const [products, setProducts] = useState(null);
  const {id} = useParams();
  console.log(id, "** par")
  useEffect(() => {
    const getArticle = async () => {
      const data = await fetch(`https://dummyjson.com/products/${id}`);
      const parsed = await data.json();
      setProducts(parsed);
      console.log(parsed);
    };

    getArticle();
  }, []);
  return (
    <>
      <h2>single</h2>
    </>
  );
}
