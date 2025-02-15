
import React, { useState } from "react";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import sim3g from "./assets/sim3g.png"; // Ensure correct import
import "./style/Esim.css";
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

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  
    const existingItemIndex = cartItems.findIndex((item) => item.title === product.title);
  
    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      cartItems.push({ ...product, quantity, price: parseFloat(product.subtitle.replace("R ", "")) });
    }
  
    localStorage.setItem("cart", JSON.stringify(cartItems));
    navigate("/productlist");
  };

  return (
    <>
      <div className="container-fluid maincontainer2">
        <Navbar />

        {/* Hero Section */}
        <div className="row align-items-center">
          <div className="col-lg-12 text-center text-lg-start px-4">
            <h1 className="main-heading">Revolutionize Your Connectivity Experience</h1>
            <p className="main-paragraph">
              Stay connected with iCell Mobile – your trusted network for seamless SIM, data, and packages,
              designed for ultimate convenience and speed.
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
            <h1 className="product-title">Icell Mobile eSIM + 3GB Data <br></br>(7-Days)</h1>
            <ul className="features-list">
              <li>
                Enjoy substantial savings on data and airtime{" "}
                <span className="highlight1">(up to 50% or more per month)</span>
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
              <span className="discounted-price">R 9.00</span>
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
      <div className="carousel-container container-fluid py-5">
        <div className="text-center mb-5">
          <h1 className="mb-3 display-4 fw-bold serviceheading">Introducing Icell Mobile eSIM</h1>
          <h3>Revolutionize Your Connectivity Experience</h3>
          <p className="esimpara text-center mx-auto" style={{ maxWidth: "1200px", lineHeight: "1.5" }}>
            Say hello to the future with <strong>Icell Mobile eSIM</strong>! Effortless and seamless, our eSIM technology is designed to redefine the way you stay connected.
            If your device supports eSIM, activation is instant—no waiting, no physical SIM swaps. Enjoy all the benefits of a traditional SIM, but entirely digital and pre-installed, making connectivity faster and more convenient.
            <br /><br />
            Getting started is as easy as 1-2-3. First, check if your device supports eSIM technology. Then, choose from our eSIM Starter Packs: <strong>3GB, 10GB, or 25GB</strong>. Finally, complete RICA verification over WhatsApp, scan your eSIM QR code, and voilà—you're connected!
            <br /><br />
            If your device isn’t eSIM-compatible, don’t worry! <strong>Our physical SIM cards are coming soon.</strong> At Icell Mobile, we ensure that no one is left behind.
            <br /><br />
            Join the digital revolution today and experience a smarter, faster, and hassle-free way to stay connected with <strong>Icell Mobile eSIM</strong>.
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
              <p>Check that your mobile device supports eSIM. You can follow the simple guide below to check.</p>
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
              <p>Easily activate & RICA your eSIM over WhatsApp. Send the word “RICA” to 0769675814 over WhatsApp to get started. Only need your ID/Passport</p>
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
              <p>You will receive your eSIM via email. Once RICA is completed, simply scan your QR code and your eSIM will activate on your phone automatically.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ESIM;

// add the addtocart fun in the main compoent do not change anything , my ui is good resaponsive and work willl , only add the add to cart fun 
