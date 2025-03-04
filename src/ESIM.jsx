import React, { useState } from "react";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import sim3g from "./assets/sim3g.png"; // Ensure correct import
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomArrow = ({ className, style, onClick, direction }) => {
  return (
    <button
      className={`custom-arrow ${direction}`}
      style={{ ...style }}
      onClick={onClick}
    >
      {direction === "left" ? "<" : ">"}
    </button>
  );
};

const ESIM = ({ addToCart }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  useEffect(() => {
    const panels = document.querySelectorAll(".panel");

    panels.forEach((panel) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          scrub: true,
          start: "top bottom",
          end: "top top",
        },
      });

      tl.fromTo(
        panel,
        { scale: 1, opacity: 0.7 },
        { scale: 0.9, opacity: 1 }
      ).from(".line-2", { scaleX: 0, transformOrigin: "left top" }, 0);
    });

    return () => {
      panels.forEach((panel) => {
        gsap.killTweensOf(panel);
      });
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    swipeToSlide: true,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = [
    {
      id: 1,
      title: "eSIM with 3GB Data 7Days",
      subtitle: "R 39.00",
      discount: 40,
      image: sim3g2,
    },
    {
      id: 2,
      title: "eSIM with 10GB Data 7Days",
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

  const itamlimitnotification = () => {
      toast.warn("You can only have 4 unique items in your cart at a time!", {
        autoClose: 2000,
      });
    };

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cartItems.findIndex((item) => item.title === product.title);
  
    if (existingItemIndex !== -1) {
      // If item exists, increase quantity
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      // Prevent adding more than 4 unique items
      if (cartItems.length >= 4) {
        itamlimitnotification();
        return;
      }
  
      cartItems.push({ ...product, quantity, price: parseFloat(product.subtitle.replace("R ", "")) });
    }
  
    localStorage.setItem("cart", JSON.stringify(cartItems));
    navigate("/productlist");
  };


  const handleWhatsAppClick = () => {
    const phoneNumber = '+270769675814';
    const message = encodeURIComponent('Hi! I m interested in your services. Can you provide more details?');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
    
      <div className="container-fluid maincontainer2">
        <Navbar />

        {/* Hero Section */}
        <div className="row align-items-center">
          <div className="col-lg-12 text-center text-lg-start px-4">
            <h1 className="main-heading">Revolutionize Your Connectivity Experience</h1>
            <p className="main-paragraph">
            Stay connected with iCell Mobile—your reliable network for seamless SIM activation, high-speed data, and flexible packages, all designed for maximum convenience and performance.
            </p>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="container-fluid content-container py-5">
        <div className="row product-container align-items-center">
          <div className="col-lg-6 col-md-12 text-center">
            <img src={sim3g} className="product-image img-fluid" alt="Product" />
          </div>

          <div className="col-lg-6 col-md-12 product-info text-center text-lg-start">
            <h1 className="product-title">iCell Mobile eSIM + 3GB Data (7 Days) <br></br></h1>
            <ul className="features-list">
              <li>

                                <span className="highlight1">Save up to 50%</span>

              or more on data and airtime every month{" "}
              </li>
              <li>
                <span className="highlight1">Fully digital</span>, no physical card required.
              </li>
              <li>
                Please ensure that your device is <span className="highlight1">eSIM compatible</span> before ordering.
              </li>
              <li>
                Access to all our <span className="highlight1">non-expiring</span> and expiring specials!
              </li>
              <li>
                Easily manage your usage and <span className="highlight1">recharge safely</span> within our App.
              </li>
              <li>
                Experience better nationwide connectivity with our reliable <span className="highlight1">eSIM technology</span>.
              </li>
              <li>
                <span className="highlight1">Includes 3GB of Data valid for 7 days from activation.</span>
              </li>
            </ul>

            <div className="price-container">
              <span className="discounted-price">R 39.00</span>
              <span className="original-price">R 314.00</span>
            </div>

            <div className="quantity-controls d-flex justify-content-center justify-content-lg-start align-items-center gap-2 mt-3">
              <div className="d-flex align-items-center custombtn">
                <button className="btn" onClick={decreaseQuantity}>
                  &lt;
                </button>
                <p className="quantity-number mx-3 my-0">{quantity}</p>
                <button className="btn" onClick={increaseQuantity}>
                  &gt;
                </button>
              </div>
              <button className="btn add-to-cart" onClick={() => handleAddToCart(cards[0])}>
                Add to Cart
              </button>
            </div>

            <hr className="divider" />

            <div className="action-buttons d-flex justify-content-between align-items-center">
              <button className="btn whatsappbtn">
                <FaWhatsapp />
              </button>
              <p className="view-detail m-0" onClick={() => navigate("/details-page")}>
                View Detail →
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Other SIM Container */}
      <div className="carousel-container1 container-fluid py-5">
      <div className="text-center mb-10 px-5 lg:px-0">
      <h1 className="mb-4 text-4xl md:text-5xl font-bold text-gray-900 serviceheading">
        Introducing Icell Mobile eSIM
      </h1>
      <h3 className="text-xl md:text-2xl text-gray-700">
        Revolutionize Your Connectivity Experience
      </h3>
      <p className="esimpara text-lg text-gray-600 mx-auto mt-4 max-w-4xl leading-relaxed">
        Say hello to the future with <strong>Icell Mobile eSIM!</strong> A fast, seamless, and fully digital way to stay
        connected. If your device supports eSIM, activation is instant—no waiting, no physical SIM swaps. Enjoy all the
        benefits of a traditional SIM, but pre-installed and hassle-free for ultimate convenience.
      </p>
      <div className="mt-6 text-left max-w-3xl mx-auto">
        <p className="text-xl font-semibold text-gray-800">Getting started is simple:</p>
        <ul className="mt-3 space-y-3 text-lg text-gray-700">
          <li className="flex items-center space-x-3">
            <span className="text-2xl">1️⃣</span>
            <span>Check eSIM compatibility on your device</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-2xl">2️⃣</span>
            <span>Choose from our eSIM Starter Packs: 3GB, 10GB, or 25GB</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-2xl">3️⃣</span>
            <span>Complete RICA verification via WhatsApp, scan your eSIM QR code, and you're connected!</span>
          </li>
        </ul>
      </div>
      <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto">
        Not eSIM-compatible? No worries! Our <strong>physical SIM cards</strong> are coming soon to keep everyone
        connected.
      </p>
      <p className="mt-6 text-lg font-medium text-gray-800 max-w-4xl mx-auto">
        Join the digital revolution today and experience a smarter, faster, and hassle-free way to stay connected with
        <strong> Icell Mobile eSIM</strong>.
      </p>
    </div>

        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="carousel-card position-relative p-3">
              <div className="image-container position-relative">
                <div className="discount-badge position-absolute top-0 start-0 bg-danger text-white rounded px-2 py-1">
                  {card.discount}% OFF
                </div>
                <img src={card.image} alt={card.title} className="carousel-image rounded w-100 img-fluid" />
              </div>

              <div className="carousel-text position-absolute bottom-10 start-10 text-white p-2">
                <span className="subtitle text-white mt-2">{card.subtitle}</span>
                <h2 className="title h5 text-white mt-2">{card.title}</h2>
              </div>

              <button className="add-to-cart-btn" onClick={() => handleAddToCart(card)}>
                Add to Cart
              </button>
            </div>
          ))}
        </Slider>
      </div>

      {/* New Card Section */}
      <div className="container my-5 newcards">
        {/* Step 1 */}
        <div className="row step-container">
          <div className="col-md-4">
            <img src={checkass} alt="Check Compatibility" className="img-fluid rounded imagcard" />
          </div>
          <div className="col-md-7 col-xl-7 col-sm-7 d-flex align-items-center">
            <div>
              <h6 className="step-title">Step 1:</h6>
              <h2 className="step-heading">Check compatibility</h2>
              <p>Ensure your device supports eSIM before getting started. Follow the simple guide below to verify compatibility. ✅📱</p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="row step-container flex-row-reverse">
          <div className="col-md-4">
            <img src={imag1} alt="Purchase eSIM" className="img-fluid rounded imagcard" />
          </div>
          <div className="col-md-7 col-xl-7 col-sm-7 align-items-center">
            <div>
              <h6 className="step-title">Step 2:</h6>
              <h2 className="step-heading">Purchase your eSIM</h2>
              <p>After you've purchased your eSIM Starter Pack, your eSIM and eSIM activation guide will be sent to your email address.</p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="row step-container">
          <div className="col-md-4">
            <img src={checkass2} alt="Check Compatibility" className="img-fluid rounded imagcard" />
          </div>
          <div className="col-md-7 col-xl-7 col-sm-7 d-flex align-items-center">
            <div>
              <h6 className="step-title">Step 3:</h6>
              <h2 className="step-heading">RICA on WhatsApp</h2>
              <p>Activate and RICA your eSIM effortlessly! 📲 Simply send "RICA" to  <span onClick={handleWhatsAppClick} style={{ cursor: "pointer" }}>+27 0769675814 </span> on WhatsApp to get started. All you need is your ID or Passport! ✅</p>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="row step-container flex-row-reverse">
          <div className="col-md-4">
            <img src={checkass3} alt="Purchase eSIM" className="img-fluid rounded imagcard" />
          </div>
          <div className="col-md-7 col-xl-7 col-sm-7 align-items-center">
            <div>
              <h6 className="step-title">Step 4:</h6>
              <h2 className="step-heading">Activate your eSIM</h2>
              <p>After completing RICA, you'll receive your eSIM via email. Simply scan the QR code, and your eSIM will activate automatically on your device! 📱🚀</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ESIM;