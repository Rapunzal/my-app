import React, { useEffect, useState } from "react";
import Product from "./Product";

export const Products = () => {
  const [data, setData] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      console.log(result.products, "result");
      setData(result.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="">
      {data.map((d) => (
        <Product product={d} key={d.id} />
      ))}
    </div>
  );
};
