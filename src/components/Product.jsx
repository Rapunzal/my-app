import React from "react";

const Product = ({ product }) => {
  return (
    <div key={product.id}>
      <li>{product.title}</li>
    </div>
  );
};

export default Product;
