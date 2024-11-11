// KidsSection.js
import React from 'react';
import "../css/kids.css"
import Kids from "../assets/Images/kids.jpg"//just for temapry

const KidsSection = () => {
  const kidsItems = [
    { id: 1, name: 'T-Shirt', price: '$19.99', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Shorts', price: '$24.99', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Dress', price: '$29.99', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Sneakers', price: '$39.99', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Hoodie', price: '$34.99', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Overalls', price: '$44.99', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <section className="kids-section">
      <h2>Kids' Clothing</h2>
      <div className="kids-items">
        {kidsItems.map(item => (
          <div key={item.id} className="kids-item">
            <img src={Kids} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KidsSection;