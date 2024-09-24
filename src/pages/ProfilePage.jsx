import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SectionContainer } from "../container/SectionContainer";

export default function ProfilePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json",'Access-Control-Allow-Origin': 'http://localhost:3000', 'Access-Control-Allow-Credentials': 'true' },
        body: JSON.stringify({
          username: "emilys",
          password: "emilyspass",
          expiresInMins: 30, // optional, defaults to 60
        })

      });
    const parsed = await data.json()
    console.log(parsed, "*** ")


    };
    getArticles();
  }, []);

  if (!products) {
    return <p>no products</p>;
  }
  return (
    <>
      <h2>My profile</h2>
      <SectionContainer></SectionContainer>
    </>
  );
}
