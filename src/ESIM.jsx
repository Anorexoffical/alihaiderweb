import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import sim3g from "./assets/sim3g.png";
import "./Style/Esim.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer.jsx";
import imag1 from "./assets/esim2.png";
import sim3g2 from "./assets/sim3g2.png";
import sim10g from "./assets/sim10g.png";
import sim6g from "./assets/sim6g.png";
import checkass from "./assets/checkass.png";
import checkass2 from "./assets/checkass2.png";
import checkass3 from "./assets/checkass3.png";

const ESIM = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
  
    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1, price: parseFloat(product.subtitle.replace("R ", "")) });
    }
  
    localStorage.setItem("cart", JSON.stringify(cartItems));
    navigate("/productlist");
  };

  const cards = [
    {
      id: 1,
      title: "eSIM + 3GB Data (7-Days)",
      subtitle: "R 9.00",
      discount: 40,
      image: sim3g2,
    },
    {
      id: 2,
      title: "eSIM + 10GB Data (7-Days)",
      subtitle: "R 99.00",
      discount: 20,
      image: sim10g,
    },
    {
      id: 3,
      title: "6GB SIM Card Starter Pack",
      subtitle: "R 200.00",
      discount: 70,
      image: sim6g,
    },
  ];

  return (
    <>
      <div className="container-fluid maincontainer2">
        <Navbar />
        <div className="row align-items-center">
          <div className="col-lg-12 text-center text-lg-start px-4">
            <h1 className="main-heading">Revolutionize Your Connectivity Experience</h1>
            <button className="btn startbutton">Get Started</button>
          </div>
        </div>
      </div>
      
      <div className="container-fluid content-container py-5">
        <div className="row product-container align-items-center">
          <div className="col-lg-6 col-md-12 text-center">
            <img src={sim3g} className="product-image img-fluid" alt="Product" />
          </div>
          <div className="col-lg-6 col-md-12 product-info text-center text-lg-start">
            <h1 className="product-title">Icell Mobile eSIM + 3GB Data (7-Days)</h1>
            <div className="price-container">
              <span className="discounted-price">R 9.00</span>
              <span className="original-price">R 314.00</span>
            </div>
            <div className="quantity-controls d-flex justify-content-center justify-content-lg-start align-items-center gap-2 mt-3">
              <button className="btn" onClick={decreaseQuantity}>&lt;</button>
              <p className="quantity-number mx-3 my-0">{quantity}</p>
              <button className="btn" onClick={increaseQuantity}>&gt;</button>
              <button className="btn add-to-cart" onClick={() => handleAddToCart(cards[0])}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ESIM;
