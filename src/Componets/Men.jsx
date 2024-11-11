// MenSection.js
import React from 'react';
import "../css/men.css"
import logo from "../assets/Images/2.jpg"// for temopary

const MenSection = () => {
  const menItems = [
    { id: 1, name: 'Casual Shirt', price: '$29.99', image: " https://thehouseofrare.com/cdn/shop/files/BENEDICT-LIGHT-BLUE3216_480x.jpg?v=1708347320"},
    { id: 2, name: 'Formal Pants', price: '$49.99', image: 'https://thehouseofrare.com/cdn/shop/files/BENEDICT-LIGHT-BLUE3216_480x.jpg?v=1708347320' },
    { id: 3, name: 'Leather Jacket', price: '$89.99', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Denim Jeans', price: '$39.99', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Sport Shoes', price: '$59.99', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'T-Shirt', price: '$19.99', image: 'https://via.placeholder.com/150' },
     { id: 6, name: 'T-Shirt', price: '$19.99', image: 'https://via.placeholder.com/150' },
     { id: 1, name: 'Casual Shirt', price: '$29.99', image: " https://thehouseofrare.com/cdn/shop/files/BENEDICT-LIGHT-BLUE3216_480x.jpg?v=1708347320"},
    { id: 2, name: 'Formal Pants', price: '$49.99', image: 'https://thehouseofrare.com/cdn/shop/files/BENEDICT-LIGHT-BLUE3216_480x.jpg?v=1708347320' },
    { id: 3, name: 'Leather Jacket', price: '$89.99', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Denim Jeans', price: '$39.99', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Sport Shoes', price: '$59.99', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'T-Shirt', price: '$19.99', image: 'https://via.placeholder.com/150' },
     { id: 6, name: 'T-Shirt', price: '$19.99', image: 'https://via.placeholder.com/150' },
     { id: 1, name: 'Casual Shirt', price: '$29.99', image: " https://thehouseofrare.com/cdn/shop/files/BENEDICT-LIGHT-BLUE3216_480x.jpg?v=1708347320"},
    { id: 2, name: 'Formal Pants', price: '$49.99', image: 'https://thehouseofrare.com/cdn/shop/files/BENEDICT-LIGHT-BLUE3216_480x.jpg?v=1708347320' },
    { id: 3, name: 'Leather Jacket', price: '$89.99', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Denim Jeans', price: '$39.99', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Sport Shoes', price: '$59.99', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'T-Shirt', price: '$19.99', image: 'https://via.placeholder.com/150' },
     { id: 6, name: 'T-Shirt', price: '$19.99', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <section className="men-section">
      <h2>Men's Clothing</h2>
      <div className="men-items">
        {menItems.map(item => (
          <div key={item.id} className="men-item">
            <img src={logo} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenSection;