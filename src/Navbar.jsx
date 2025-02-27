import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa"; // Added FaTimes for the close button
import "./Style/Navbar.css";
import logo from "./assets/logo.jpeg";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [showReminder, setShowReminder] = useState(false);
  const [cartAnimate, setCartAnimate] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Track sidebar state

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(totalItems);
      triggerCartAnimation();
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);

    const reminderTimer = setTimeout(() => {
      if (cartCount > 0) {
        setShowReminder(true);
      }
    }, 300000); // 5 minutes

    return () => {
      window.removeEventListener("storage", updateCartCount);
      clearTimeout(reminderTimer);
    };
  }, [cartCount]);

  const triggerCartAnimation = () => {
    setCartAnimate(true);
    setTimeout(() => setCartAnimate(false), 300);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav>
        <input
          type="checkbox"
          id="check"
          checked={isSidebarOpen}
          onChange={toggleSidebar}
        />
        <label htmlFor="check" className="checkbtn">
          <FaBars size={24} color="black" />
        </label>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul className={isSidebarOpen ? "active" : ""}>
          {/* Close button on top left of the sidebar (visible only in mobile view) */}
          <li className="close-btn" onClick={toggleSidebar}>
            <FaTimes size={24} color="black" />
          </li>
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/Aboutus" onClick={toggleSidebar}>About Us</Link></li>
          <li><Link to="/Getyoursim" onClick={toggleSidebar}>Get your SIM</Link></li>
          <li><Link to="/Topupdeal" onClick={toggleSidebar}>Top-up Deals</Link></li>
          <li><Link to="/ESIM" onClick={toggleSidebar}>eSIM</Link></li>
          <li><Link to="/Power2Sell" onClick={toggleSidebar}>Power2Sell</Link></li>
          <li><Link to="/Support" onClick={toggleSidebar}>Support</Link></li>
          <li className="callformeeting">
            <Link to="/Contactus" onClick={toggleSidebar}>
              <span className="meeting">Contact Us</span>
            </Link>
          </li>
          <li className="cart-icon">
            <Link to="/productlist" className="cart-link" onClick={toggleSidebar}>
              <FaShoppingCart size={24} color="black" />
              {cartCount > 0 && (
                <span className={`cart-badge ${cartAnimate ? "pop-effect" : ""}`}>
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Reminder Message */}
      {showReminder && (
        <div className="reminder-msg">
          🛒 Don't forget! Something is waiting for you in the cart.
        </div>
      )}
    </>
  );
}

export default Navbar;