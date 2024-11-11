import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Men from "../src/Componets/Men";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";
import Women from "../src/Componets/Women";
import Kids from "../src/Componets/Kids";
import Contact from "../src/Componets/Contact";
import SignUpPage from "../src/Componets/SignUpPage ";
import Login from "../src/Componets/Login";
import { CartProvider } from "./Componets/CartContext";
import Cart from "../src/Componets/Cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mens" element={<Men />} />
            <Route path="/womens" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
