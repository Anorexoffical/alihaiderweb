import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "./Style/Productlist.css"

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

  const changeQuantity = (index, amount) => {
    
    const updatedCart = cart.map((item, i) =>
      
      i === index ? { ...item, quantity: Math.max(1, (item.quantity || 1) + amount) } : item
    );
    updateCart(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  const clearCart = () => {
    updateCart([]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item?.price) || 0;
      const quantity = item?.quantity || 1;
      return total + price * quantity;
    }, 0);
  };

  return (
    <>
      <Navbar />
      <div className="container my-5 prouctlist">
        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
          <h1 className="text-center">Your Shopping Cart</h1>
          <button className="callformeeting  checkout " onClick={() => navigate("/esim")}>Continue Shopping</button>
        </div>
        {cart.length === 0 ? (
          <div className="text-center">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            <table className="table table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th>SNO</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => {
                  const price = parseFloat(item?.price) || 0;
                  const quantity = item?.quantity || 1;
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className="d-flex align-items-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="me-2"
                          style={{ width: "50px", height: "50px" }}
                        />
                        {item.title}
                      </td>
                      <td>R {price.toFixed(2)}</td>
                      <td>
                        <button
                          className="btn "
                          onClick={() => changeQuantity(index, -1)}
                        >
                          -
                        </button>
                        <span className="mx-2">{quantity}</span>
                        <button
                          className="btn "
                          onClick={() => changeQuantity(index, 1)}
                        >
                          +
                        </button>
                      </td>
                      <td>R {(price * quantity).toFixed(2)}</td>
                      <td>
                        <button className="btn btn-danger btn-sm" onClick={() => removeItem(index)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="d-flex justify-content-between align-items-center border-top pt-3">
              <h4>Total: R {calculateTotal().toFixed(2)}</h4>
              <button className=" callformeeting  checkout "onClick={() => navigate("/Checkout")}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
