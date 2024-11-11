// WomenSection.js
import React from 'react';
import "../css/women.css"
import Women from "../assets/Images/women.jpg"//just for temparary

const WomenSection = () => {
  const womenItems = [
    { id: 1, name: 'Summer Dress', price: '$39.99', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Blouse', price: '$29.99', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Skirt', price: '$24.99', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Jeans', price: '$49.99', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Sandals', price: '$39.99', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Jacket', price: '$59.99', image: 'https://via.placeholder.com/150' },
    { id: 1, name: 'Summer Dress', price: '$39.99', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Blouse', price: '$29.99', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Skirt', price: '$24.99', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Jeans', price: '$49.99', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Sandals', price: '$39.99', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Jacket', price: '$59.99', image: 'https://via.placeholder.com/150' },
    { id: 1, name: 'Summer Dress', price: '$39.99', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Blouse', price: '$29.99', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Skirt', price: '$24.99', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Jeans', price: '$49.99', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Sandals', price: '$39.99', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Jacket', price: '$59.99', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <section className="women-section">
      <h2>Women's Clothing</h2>
      <div className="women-items">
        {womenItems.map(item => (
          <div key={item.id} className="women-item">
            <img src={Women} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WomenSection;