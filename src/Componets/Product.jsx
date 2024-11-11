// Product.js
import React from "react";
import { useCart } from "./CartContext"; // Import the Cart Context

const Product = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} has been added to your cart!`); // Optional alert
  };

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
