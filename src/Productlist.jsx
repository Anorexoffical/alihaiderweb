import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const addToCart = (newItem) => {
    const existingItemIndex = cart.findIndex((item) => item.title === newItem.title);
    let updatedCart;

    if (existingItemIndex !== -1) {
      updatedCart = cart.map((item, index) =>
        index === existingItemIndex ? { ...item, quantity: item.quantity + newItem.quantity } : item
      );
    } else {
      updatedCart = [...cart, newItem];
    }

    updateCart(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  const clearCart = () => {
    updateCart([]);
  };

  const changeQuantity = (index, amount) => {
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    );
    updateCart(updatedCart);
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1 className="text-center mb-4">Your Cart</h1>
        {cart.length === 0 ? (
          <div className="text-center">
            <p>Your cart is empty.</p>
            <button className="btn btn-primary" onClick={() => navigate("/")}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="me-2"
                      style={{ width: "50px", height: "50px" }}
                    />
                    {item.title}
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => changeQuantity(index, -1)}
                    >
                      &lt;
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => changeQuantity(index, 1)}
                    >
                      &gt;
                    </button>
                  </td>
                  <td>R {item.price * item.quantity}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => removeItem(index)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
          {cart.length > 0 && (
            <button className="btn btn-danger" onClick={clearCart}>
              Clear Cart
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;