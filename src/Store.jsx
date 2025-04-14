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

import product1 from "./assets/1.webp";
import product2 from "./assets/2.webp";
import product3 from "./assets/3.webp";
import product4 from "./assets/4.webp";
import product5 from "./assets/5.webp";
import product6 from "./assets/6.webp";
import product7 from "./assets/7.webp";
import product8 from "./assets/8.webp";
import product9 from "./assets/9.webp";
import product10 from "./assets/10.webp";
import product11 from "./assets/11.webp";
import product12 from "./assets/12.webp";
import product13 from "./assets/13.webp";
import product14 from "./assets/14.webp";
// import product14.1 from "./awssets/14.1.webp";
import product15 from "./assets/15.webp";
import product16 from "./assets/16.webp";
import product17 from "./assets/17.webp";
import product18 from "./assets/18.webp";
import product19 from "./assets/19.webp";
import product20 from "./assets/20.webp";
import product21 from "./assets/21.webp";
import product22 from "./assets/22.webp";
import product23 from "./assets/23.webp";
import product24 from "./assets/24.webp";
import product25 from "./assets/25.webp";
import product26 from "./assets/26.webp";
import product27 from "./assets/27.webp";
import product28 from "./assets/28.webp";



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
      id: 1,
      name: 'the xobe43',
      price: 799,
      description: 'Foldable Stereo Wireless Headphones offer superior sound quality and comfort with a sleek, foldable design for easy portability. Featuring Bluetooth connectivity, these headphones provide up to 30 hours of battery life for extended listening. With an impedance of 22Ω, they deliver clear and rich audio performance. Perfect for music lovers who want reliable, all-day listening without the hassle of wires.',
      imageUrl: product1,
      category: 'charger',
      isNew: false
    },
    {
      id: 2,
      name: 'smart watch pro',
      price: 399,
      description: 'Premium smart watch',
      imageUrl: product2,
      category: 'watches',
      isNew: true
    },
    {
      id: 3,
      name: 'hoco des41 wireless bt headset',
      price: 699,
      description: 'Introducing the Hoco DES41 Wireless BT Headset – a stylish audio companion with vibrant LED lights and a unique UFO-inspired design. Featuring Bluetooth V5.3, 10mm drivers, and Hi-Fi sound, it s perfect for music, clear calls, and dynamic audio on the go.',
      imageUrl: product3,
      category: 'Android',
      isNew: false
    },
    {
      id: 4,
      name: 'the borofone j32',
      price: 1499,
      description: 'Digital Display Power Bank offers a 22.5W fast charge with a massive 80,000mAh capacity to keep your devices powered for longer. It supports PD 3.0/2.0, QC 0/2.0, and AFC for superfast charging. With 6 outputs and 4 inputs, it s perfect for charging multiple devices at once. The digital display shows real-time power status, ensuring convenience and reliability for all your charging needs.',
      imageUrl: product4,
      category: 'Air Buds',
      isNew: true
    },
    {
      id: 5,
      name: 'leather phone cover',
      price: 1499,
      description: 'Premium leather case',
      imageUrl: product5,
      category: 'Covers',
      isNew: false
    },
    {
      id: 6,
      name: 'the g6a led',
      price: 699,
      description: 'Wireless Charging Speaker combines 15W wireless fast charging with RGB lighting and a sunrise simulation wake-up light for a calming and dynamic experience. It offers 16 million customizable lighting modes, a dimmable alarm clock, and a natural sleep aid sound machine. With App control and the ability to *answer phone calls, its a versatile and stylish addition to any room, enhancing both relaxation and productivity. Plus, the app control is lifetime free',
      imageUrl: product6,
      category: 'Screen Protectors',
      isNew: true
    },
    {
      id: 7,
      name: 'the 2in1 usbc',
      price: 399,
      description: 'Hub Multi-function Adapter allows you to easily connect your USB-C computer to an HDTV-equipped display. It supports 4K resolution for high-definition viewing and offers seamless connectivity for both data transfer and video output. This compact adapter is perfect for expanding your workspace or enjoying multimedia content on a larger screen.',
      imageUrl: product7,
      category: 'Screen Protectors',
      isNew: true
    }, 
    {
      id: 8,
      name: 'the super electronics',
      price: 299,
      description: 'SE-L190 is a reliable Garmin Watch Charging Cable, designed for fast and efficient charging of your Garmin smartwatch. It offers a secure connection and ensures that your device stays powered up, so you re always ready for your next adventure. Compact and durable, it s the perfect replacement or backup cable for your Garmin watch.',
      imageUrl: product8,
      category: 'Screen Protectors',
      isNew: true
    },
    {
      id: 9,
      name: 'the lte cpe lte',
      price: 1099,
      description: 'Cat 300 is a high-performance LTE router designed to provide fast and reliable internet connectivity. With support for LTE Cat 300, it delivers high-speed data transfer for seamless browsing, streaming, and gaming. Ideal for home or office use, it ensures stable and efficient wireless internet access for multiple devices.',
      imageUrl: product9,
      category: 'Screen Protectors',
      isNew: true
    },    
    {
      id: 10,
      name: 'tempered glass screen protector',
      price: 399,
      description: 'Foldable Stereo Wireless Headphones offer superior sound quality and comfort with a sleek, foldable design for easy portability. Featuring Bluetooth connectivity, these headphones provide up to 30 hours of battery life for extended listening. With an impedance of 22Ω, they deliver clear and rich audio performance. Perfect for music lovers who want reliable, all-day listening without the hassle of wires.',
      imageUrl: product10,
      category: 'Screen Protectors',
      isNew: true
    },    
    {
      id: 11,
      name: 'the xoxj01',
      price: 599,
      description: 'Children s FL Camera is a fun and interactive camera designed for kids. Featuring a dual-lens camera, it allows children to take photos and videos from different angles with ease. The camera is built with safety and durability in mind, and it comes with CEFC certification for quality assurance. A perfect way to spark creativity and capture memories in a child-friendly design..',
      imageUrl: product11,
      category: 'Screen Protectors',
      isNew: true
    },    
    {
      id: 12,
      name: 'the yesido 2in1',
      price: 249,
      description: 'Metal Plate is designed for strong, secure mounting with any magnetic car phone holder. It includes both round and rectangular plates for versatile use with different phone sizes and cases. The sleek metal finish adds a premium touch without adding bulk. Easy to install and fully compatible with all magnetic mounts.',
      imageUrl: product12,
      category: 'Screen Protectors',
      isNew: true
    },
    {
      id: 13,
      name: 'istar 500w party speaker',
      price: 299,
      description: 'Turn up the energy with the iStar IS-1202A 500W Party Speaker – your ultimate companion for unforgettable gatherings. Enjoy booming 500W sound with vibrant LED lights that bring the party to life. With built-in Bluetooth, FM radio, and a mic input for karaoke, its perfect for any celebration. Its rechargeable battery and portable design make it easy to party anywhere, anytime.',
      imageUrl: product13,
      category: 'Screen Protectors',
      isNew: true
    },
    {
      id: 14,
      name: 'tempered glass screen protector',
      price: 699,
      description: 'Protects your screen from scratches',
      imageUrl: product14,
      category: 'Screen Protectors',
      isNew: true
    },
    {
      id: 15,
      name: 'the yesido khi c223',
      price: 299,
      description: 'Adapter Plug Kit is a versatile travel accessory designed to make your international trips easier. This kit includes multiple plug types to ensure compatibility with outlets in various countries, making it ideal for travelers. Compact and easy to use, its a must-have for anyone on the go. The MC25 model ensures safe and reliable charging and powering of your devices worldwide.',
      imageUrl: product15,
      category: 'Screen Protectors',
      isNew: true
    },
    {
      id: 16,
      name: 'tempered glass screen protector',
      price: 599,
      description: 'Protects your screen from scratches',
      imageUrl: product16,
      category: 'Screen Protectors',
      isNew: true
    },
    {
      id: 17,
      name: 'the xoss12',
      price: 799,
      description: 'Selfie Stick is a versatile and compact tool for capturing the perfect selfie. Equipped with a ring light, it ensures optimal lighting for your photos, even in low-light environments. Whether you re taking pictures or recording videos, this selfie stick provides stable support and enhances your content with adjustable lighting. Perfect for content creators and selfie enthusiasts!',
      imageUrl: product17,
      category: 'Screen Protectors',
      isNew: true
    },
    {
      id: 18,
      name: 'the xolp03',
      price: 399,
      description: 'Anti-Loss Device is a compact and efficient solution for tracking your valuables. It uses global positioning to help you locate items through the Apple Find My network, providing real-time tracking. Perfect for keys, bags, or other essentials, it helps prevent loss and ensures you can easily find your belongings anytime.',
      imageUrl: product18,
      category: 'Screen Protectors',
      isNew: true
    },
    {
      id: 19,
      name: 'the borofone h23',
      price: 399,
      description: 'Mobile Phone Stand features a sleek, bright shell design that adds a touch of style to your desk or workspace. Its adjustable design allows for a comfortable viewing angle, making it ideal for watching videos, video calls, or browsing. Compact and durable, its the perfect hands-free accessory for your mobile phone, offering both convenience and a modern look.',
      imageUrl: product19,
      category: 'Screen Protectors',
      isNew: true
    },
    {
      id: 20,
      name: 'the borofone bd9',
      price: 999,
      description: 'Watch is a sleek and stylish smartwatch designed to offer a seamless blend of functionality and convenience. With its modern design, it provides features like fitness tracking, heart rate monitoring, and notifications, making it perfect for daily use. The BOROFONE BD9 is lightweight, comfortable to wear, and offers reliable performance to keep you connected throughout the day. Whether for fitness goals or staying on top of messages, this watch is a great companion for an active lifestyle.',
      imageUrl: product20,
      category: 'Screen Protectors',
      isNew: true
    },
    {
      id: 21,
      name: 'yesido windshield holde',
      price: 599,
      description: 'The Yesido Windshield Holder is a long-leg universal holder designed for secure placement on your car s windshield. It features a foot pad for added stability, ensuring your phone stays in place even on bumpy roads. This holder provides a convenient, hands-free solution for navigation and calls, making it a must-have accessory for any driver. Its adjustable design fits most smartphones, offering both safety and ease of use',
      imageUrl: product21,
      category: 'Screen Protectors',
      isNew: true
    }, 
    {
      id: 22,
      name: 'tempered glass screen protector',
      price: 19.99,
      description: 'Protects your screen from scratches',
      imageUrl: product22,
      category: 'Screen Protectors',
      isNew: true
    },
    {
      id: 23,
      name: 'the j1011 headphone',
      price: 799,
      description: 'Headphone is a high-quality audio accessory designed for comfort and immersive sound. Featuring an ergonomic design, it offers a secure and comfortable fit for long listening sessions. With clear, rich sound and enhanced bass, the J1011 is perfect for music, podcasts, and calls. Whether for daily use or on-the-go, it provides a reliable and enjoyable listening experience.',
      imageUrl: product23,
      category: 'Screen Protectors',
      isNew: true
    },
    {
      id: 24,
      name: 'the bgd002 led',
      price: 799,
      description: 'Soft Ring Light is a versatile lighting solution perfect for photography, broadcasting, and cosmetic applications. It features non-porous dimming to adjust brightness for optimal lighting conditions. Whether for makeup application, live streaming, or content creation, this ring light ensures smooth, even illumination. Its compact and portable design makes it easy to use in any setting, delivering professional-quality lighting for various needs.',
      imageUrl: product24,
      category: 'Screen Protectors',
      isNew: true
    },
    {
      id: 25,
      name: 'the earldom eh103',
      price: 1099,
      description: 'Live Broadcast Bracket is a professional setup designed to enhance your mobile live streaming experience. Featuring a three-color light source, it provides adjustable lighting for perfect visibility in any environment. With a height of 1800mm, it offers excellent flexibility and coverage for your broadcast. Whether you re streaming, recording, or creating content, this bracket acts as your mobile live full light station, ensuring high-quality lighting for all your needs.',
      imageUrl: product25,
      category: 'Screen Protectors',
      isNew: true
    },
    {
      id: 26,
      name: 'the yesido sf15',
      price: 699,
      description: 'Auto Tracking Tripod features AI-powered auto face tracking, allowing it to follow your movements without the need for an app. It offers 360-degree rotation for smooth and precise tracking, ensuring you stay in frame during video calls, streaming, or vlogging. The tripod is designed for convenience, providing hands-free operation and enhanced video quality. Perfect for content creators and those in need of stable, dynamic camera work.',
      imageUrl: product26,
      category: 'Screen Protectors',
      isNew: true
    },
    {
      id: 27,
      name: 'tempered glass screen protector',
      price: 899,
      description: 'Protects your screen from scratches',
      imageUrl: product27,
      category: 'Screen Protectors',
      isNew: true
    },
    {
      id: 28,
      name: 'the ldnio aw004',
      price: 799,
      description: 'Wireless Desktop Charger features USBX4 output ports, allowing you to charge multiple devices simultaneously. With a powerful and efficient design, it supports wireless charging and ensures compatibility with various devices. Offering a one-year warranty, this charger provides reliable and fast charging with 32W output for quick power delivery. Its the perfect solution for a clutter-free desktop setup, delivering convenient and safe charging for all your devices.',
      imageUrl: product28,
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
                    <p className="card-text description-store">{product.description}</p>
                    <p className="card-text price-store">R {product.price.toFixed(2)}</p>

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