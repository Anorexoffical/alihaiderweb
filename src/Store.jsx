import React from 'react';
import './Style/Store.css';
import Navbar from './Navbar';
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState, useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";


import product2 from "./assets/12.webp";
import product3 from "./assets/11.webp";
import product4 from "./assets/13.webp";
import product5 from "./assets/14.webp";
import product6 from "./assets/15.webp";
import product7 from "./assets/16.webp";
import product8 from "./assets/17.webp";
import product9 from "./assets/18.webp";
import product10 from "./assets/19.webp";
import product11 from "./assets/20.webp";
import product12 from "./assets/21.webp";
import product13 from "./assets/22.webp";


const Store = () => {
  // Search state
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);
  const [activeTab, setActiveTab] = useState('all');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowDropdown(e.target.value.length > 0);
  };

  const handleClearInput = () => {
    setQuery('');
    setShowDropdown(false);
  };

  const handleItemClick = (item) => {
    setQuery(item);
    setActiveTab(item.toLowerCase().replace(/\s+/g, '')); // Convert to lowercase and remove spaces
    setShowDropdown(false);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setQuery(''); // Clear search query when switching tabs
  };

  const predefinedAccessories = [
    "iphone",
    "Android",
    "Air Buds",
    "Covers",
    "Screen Protectors",
    "Charger",
    "Watches",
  ];

  // Product data
  const [products] = useState([
 
    {
      id: 2,
      name: 'iPhone Charger',
      price: 29.99,
      description: 'Fast charging for iPhone',
      imageUrl: product2,
      category: 'charger',
      isNew: false
    },
    {
      id: 3,
      name: 'Smart Watch Pro',
      price: 199.99,
      description: 'Premium smart watch',
      imageUrl: product3,
      category: 'watches',
      isNew: true
    },
    {
      id: 4,
      name: 'Android Phone',
      price: 299,
      description: 'Latest Android model',
      imageUrl: product4,
      category: 'Android',
      isNew: false
    },
    {
      id: 5,
      name: 'Wireless Air Buds',
      price: 799,
      description: 'Premium sound quality',
      imageUrl: product5,
      category: 'Air Buds',
      isNew: true
    },
    {
      id: 6,
      name: 'Leather Phone Cover',
      price: 499,
      description: 'Premium leather case',
      imageUrl: product6,
      category: 'Covers',
      isNew: false
    },
    {
      id: 7,
      name: 'Tempered Glass Screen Protector',
      price: 349,
      description: 'Protects your screen from scratches',
      imageUrl: product7,
      category: 'Screen Protectors',
      isNew: true
    },

    {
      id: 8,
      name: 'Tempered Glass Screen Protector',
      price: 699,
      description: 'Protects your screen from scratches',
      imageUrl: product8,
      category: 'Screen Protectors',
      isNew: true
    },    {
      id: 9,
      name: 'Tempered Glass Screen Protector',
      price: 599,
      description: 'Protects your screen from scratches',
      imageUrl: product9,
      category: 'Screen Protectors',
      isNew: true
    },    {
      id: 10,
      name: 'Tempered Glass Screen Protector',
      price: 999,
      description: 'Protects your screen from scratches',
      imageUrl: product10,
      category: 'Screen Protectors',
      isNew: true
    },    {
      id: 11,
      name: 'Tempered Glass Screen Protector',
      price: 799,
      description: 'Protects your screen from scratches',
      imageUrl: product11,
      category: 'Screen Protectors',
      isNew: true
    },    {
      id: 12,
      name: 'Tempered Glass Screen Protector',
      price: 1199,
      description: 'Protects your screen from scratches',
      imageUrl: product12,
      category: 'Screen Protectors',
      isNew: true
    },
    {
      id: 13,
      name: 'Tempered Glass Screen Protector',
      price: 19.99,
      description: 'Protects your screen from scratches',
      imageUrl: product13,
      category: 'Screen Protectors',
      isNew: true
    },
  ]);



  // Filter products based on both active tab and search query
  const filteredProducts = products.filter(product => {
    const matchesTab = activeTab === 'all' || 
                      product.category.toLowerCase() === activeTab.toLowerCase();
    
    const matchesSearch = query === '' || 
                         product.name.toLowerCase().includes(query.toLowerCase()) ||
                         product.category.toLowerCase().includes(query.toLowerCase()) ||
                         product.description.toLowerCase().includes(query.toLowerCase());
    
    return matchesTab && matchesSearch;
  });



// add to cart function 
  const navigate = useNavigate();

 const itamlimitnotification = () => {
      toast.warn("You can only have 4 unique items in your cart at a time!", {
        autoClose: 2000,
      });
    };

const handleAddToCart = (product) => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItemIndex = cartItems.findIndex((item) => item.name === product.name);
  
  if (existingItemIndex !== -1) {
    // If item exists, increase quantity
    cartItems[existingItemIndex].quantity += 1;
  } else {
    // Prevent adding more than 4 unique items
    if (cartItems.length >= 4) {
      itamlimitnotification();
      return;
    }
  
    cartItems.push({ 
      title: product.name, // Using name as title to match your existing function
      price: product.price, // Directly using the price property
      quantity: 1, // Default quantity
      image: product.imageUrl, // Using imageUrl from the product
      subtitle: `R ${product.price.toFixed(2)}`, // Creating subtitle to match your existing format
      // Include any other necessary fields from your original cart implementation
      ...product // Spread the rest of the product properties
    });
  }
  
  localStorage.setItem("cart", JSON.stringify(cartItems));
  // Optional: You might want to add a success notification here
  // addToCartNotification();
  navigate("/productlist");

};

  

  return (
    <> 
          <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
         
      <div className="store-container container-fluid">
        <Navbar />
        
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="store-content">
              <h1 className="store-heading">Accessorize in a snap.</h1>
              <p className="store-description">
                Find a MagSafe case, wallet, or charger that's right for you.
              </p>
            </div>
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="store-image">
              {/* Image will be set via background in CSS */}
            </div>
          </div>
        </div>
      </div>

      {/* search section */}
      <div className="accessories-search-container">
        <div className="accessories-search-card" ref={searchRef}>
          <h2 className="accessories-search-title">Find the accessories you're looking for.</h2>
          <div className="accessories-search-input-container">
            <FaSearch className="accessories-search-icon" />
            <input
              type="text"
              placeholder="Search accessories"
              value={query}
              onChange={handleInputChange}
              onFocus={() => query.length > 0 && setShowDropdown(true)}
              className="accessories-search-input"
            />
            {query && (
              <IoClose className="accessories-search-icon" onClick={handleClearInput} />
            )}
          </div>
          {showDropdown && (
            <ul className="dropdown">
              {predefinedAccessories
                .filter((item) =>
                  item.toLowerCase().includes(query.toLowerCase())
                )
                .map((item, index) => (
                  <li key={index} onClick={() => handleItemClick(item)}>
                    {item}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>

      {/* button product categories */}
      <div className="container">
        <div className="browse-tabs-container my-4">
          <ul className="nav nav-tabs browse-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => handleTabClick('all')}
              >
                All Products
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'iphone' ? 'active' : ''}`}
                onClick={() => handleTabClick('iphone')}
              >
                iPhone
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'android' ? 'active' : ''}`}
                onClick={() => handleTabClick('android')}
              >
                Android
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'watches' ? 'active' : ''}`}
                onClick={() => handleTabClick('watches')}
              >
                Watches
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'charger' ? 'active' : ''}`}
                onClick={() => handleTabClick('charger')}
              >
                Charger
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'airbuds' ? 'active' : ''}`}
                onClick={() => handleTabClick('airbuds')}
              >
                Air Buds
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'screenprotectors' ? 'active' : ''}`}
                onClick={() => handleTabClick('screenprotectors')}
              >
                Screen Protectors
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'covers' ? 'active' : ''}`}
                onClick={() => handleTabClick('covers')}
              >
                Covers
              </button>
            </li>
          </ul>
        </div>




        {/* Product Cards */}
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="product-card-store card h-100">
                  <div className="position-relative">
                    <img
                      src={product.imageUrl}
                      className="card-img-top product-image-store"
                      alt={product.name}
                    />
                    {product.isNew && (
                      <span className="badge-new-store">New</span>
                    )}
                  </div>
                  <div className="card-body-store d-flex flex-column">
                    <h5 className="card-title-store">{product.name}</h5>
                    <p className="card-text price-store">R {product.price.toFixed(2)}</p>
                    <p className="card-text description-store">{product.description}</p>
                    <button className="btn btn-primary add-to-cart-store mt-auto"   onClick={() => handleAddToCart(product)} >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h4>No products found matching your criteria</h4>
            </div>
          )}
        </div>
      </div>


      <Footer></Footer>
    </>
  );
};

export default Store;