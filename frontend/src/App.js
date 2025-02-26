import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Home from './pages/Home';
import CreateProduct from "./pages/createProduct";
import MyProducts from './pages/myProduct';
import ProductDetails from "./pages/ProductDetails"
import Card from "./pages/card"
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
      setCart([...cart, { ...product, quantity }]);
  };
  return (
    <BrowserRouter>
      <NavBar />  {/* Include NavBar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/myProduct" element={<MyProducts />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<Card cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
