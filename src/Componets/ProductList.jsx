// ProductList.js
import React from "react";
import Product from "./Product"; // Import the Product component

const products = [
  { id: 1, name: "T-Shirt", price: 19.99 },
  { id: 2, name: "Jeans", price: 39.99 },
  { id: 3, name: "Jacket", price: 59.99 },
  // Add more products as needed
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
