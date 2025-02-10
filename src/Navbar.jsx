import React from "react";
import { Link } from 'react-router-dom';
import "./Style/Navbar.css";
import { FaBars } from 'react-icons/fa';
import logo from "./assets/logo.jpeg"

function Navbar() {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <FaBars size={24} color="black" />
      </label>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Aboutus">About Us</Link></li>
        <li><Link to="/Getyoursim">Get your SIM</Link></li>
        <li><Link to="/Topupdeal">To up deals</Link></li>
        <li><Link to="/ESIM">eSIM</Link></li>
        <li><Link to="/Power2Sell">Power2Sell</Link></li>
        <li><Link to="/Support">Support</Link></li>

        <li className="callformeeting">  
          <Link to="/Contactus">
            <span className="meeting">Contact Us</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;