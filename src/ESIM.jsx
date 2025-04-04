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
import { motion } from "framer-motion";


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
        cartItems[existingItemIndex].quantity += 1; // Assuming quantity is 1 by default
      } else {
        // Prevent adding more than 4 unique items
        if (cartItems.length >= 4) {
          itamlimitnotification();
          return;
        }
      
        cartItems.push({ 
          ...product, 
          quantity: 1, // Default quantity
          price: parseFloat(product.subtitle.replace("R ", "")) || 0, // Handle potential missing price
          image: product.image // Include the image
        });
      }
      
      localStorage.setItem("cart", JSON.stringify(cartItems));
      navigate("/productlist");
    };


  //this if for the esim

  const accordionData = [
    {
      title: "⚡ Instant Setup & Activation",
      answer:
        "Instant Setup & Activation – No waiting for a physical SIM—simply scan a QR code and activate within minutes",
    },
    {
      title: "🔄 Seamless Network Switching",
      answer:
        "Seamless Network Switching – Easily switch between multiple carriers without changing SIM cards, perfect for travelers and business users.",
    },
    {
      title: "📦 More Storage, More Convenience",
      answer:
        "More Storage, More Convenience – Free up your SIM slot for an extra number or international SIM while keeping your primary number active.",
    },
    {
      title: "🛡️ Stronger Durability & Reliability",
      answer:
        "Stronger Durability & Reliability – Since eSIMs are embedded in your device, they’re immune to physical damage, loss, or theft.",
    },
  ];


  // featere of our application 
  const FeatureCard = ({ title, description, tag, image }) => (
    <motion.div className="cardesim" whileHover={{ scale: 1.05 }}>
      <img src={image} alt={title} className="card-img" />
      <span className="card-tag">{tag}</span>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
    </motion.div>
  );
  


  const features = [
    { title: "Verify Your Device", description: "Before you begin, check if your smartphone supports eSIM technology. Head to your device settings or visit our support page for a quick compatibility check. ✅📱",  image:checkass },
    { title: " Get Your eSIM Instantly", description: "Purchase your eSIM plan and receive your unique activation details straight to your email—no waiting, no hassle.", image:imag1 },
    { title: "Register & Verify", description: "Seamless digital registration! Simply verify your identity through our secure online process using your ID or passport. No paperwork, just a few taps. 🛡️📲",  image:checkass2 },

    { title: "Scan & Connect", description: "Once verified, your eSIM QR code will be sent instantly. Just scan it with your phone, and you're connected—no physical SIM required! 🚀📶",  image:checkass3 },

  ];

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
            <h1 className="main-heading">Transform the Way You Connect with iCell Mobile!</h1>
            <p className="main-paragraph">
            Experience a new era of connectivity with iCell Mobile—your trusted network for instant SIM activation, ultra-fast data, and tailored packages that fit your lifestyle.
            </p>
          </div>
        </div>
      </div>

      {/* Product Section */}
 
 
       {/* end of the 2nd component  */}

<div className="buy-sim-container">
  <h2 className="buy-sim-text-center">The Future of Connectivity!</h2>
  <div className="buy-sim-content">
    {/* Left Side Image */}
    <div className="buy-sim-image-container">
      <img src={imag1} alt="Happy User" className="buy-sim-image" />
    </div>

    {/* Right Side Accordion */}
    <div className="buy-sim-accordion-container">
      {accordionData.map((item, index) => (
        <div key={index} className="buy-sim-accordion-item active">
          <div className="buy-sim-accordion-title accordiontitle">{item.title}</div>
          <div className="buy-sim-accordion-content">{item.answer}</div>
        </div>
      ))}
    </div>
  </div>

  {/* Button */}
  <div className="buy-sim-text-center mt-3">
    <button 
      className="buy-sim-btn" 
      onClick={() => handleAddToCart({
        title: "6 GB ESIM", // or any other title you want
        subtitle: "R 9.00", // adjust the price as needed
        image: imag1 // include the image
      })}
    >
      Add to Cart
    </button>
  </div>
</div>



 
 
 
 

      {/* Other SIM Container */}
      <div className="carousel-container1 container-fluid py-5">
      <div className="text-center mb-10 px-5 lg:px-0">
      <h1 className="mb-4 text-4xl md:text-5xl font-bold text-gray-900 serviceheading">
        Introducing Icell Mobile eSIM
      </h1>
      <h3 className="text-xl md:text-2xl text-gray-700">
      Experience Next-Gen Connectivity with iCell Mobile eSIM!

      </h3>
      <p className="esimpara text-lg text-gray-600 mx-auto mt-4 max-w-4xl leading-relaxed">
      Say goodbye to traditional SIM cards and hello to the future with iCell Mobile eSIM! This fast, seamless, and fully digital solution lets you stay connected effortlessly—no physical SIM swaps, no waiting. If your device supports eSIM, activation is instant for the ultimate convenience.

      </p>
      <div className="mt-6 text-left max-w-3xl mx-auto">
        <p className="text-xl font-semibold text-gray-800">Getting Started is Easy:        </p>
        <ul className="mt-3 space-y-3 text-lg text-gray-700">
          <li className="flex items-center space-x-3">
            <span className="text-2xl">1️⃣</span>
            <span>No More Physical SIM Cards – Enjoy a completely digital experience with instant activation.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-2xl">2️⃣</span>
            <span> Quick & Hassle-Free Setup – No waiting, just scan your eSIM QR code and get connected in minutes.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-2xl">3️⃣</span>
            <span>Use Dual SIM Functionality – Keep your primary number while using eSIM for extra flexibility.
            </span>
          </li>

          <li className="flex items-center space-x-3">
            <span className="text-2xl">4️⃣ </span>
            <span>Reliable Nationwide Coverage – Stay connected anywhere with strong and stable network performance.

            </span>
          </li>
        </ul>
      </div>
      <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto">
      Not eSIM-compatible? No worries! Our <strong>physical SIM cards</strong> are coming soon to keep everyone
        connected.
      </p>
    
    </div>

    {/* cards  */}





      <Slider {...settings}>
  {cards.map((card) => (
    <div key={card.id} className="carousel-card-getsim position-relative p-3">
      {/* Image Container (Relative for Proper Positioning) */}
      <div className="image-containerget position-relative">
        {/* Discount Badge on Image */}
        <div className="discount-badgeget position-absolute top-0 start-0 bg-danger text-white rounded px-2 py-1">
        {card.discount}% OFF
          
        </div>

        <img
          src={card.image}
          alt={card.title}
          className="carousel-imageget rounded w-100 img-fluid"
        />
      </div>

      <div className="carousel-text position-absolute bottom-10 start-10 text-white p-2">
        <span className="subtitle small opacity-75">{card.subtitle}</span>
        <h2 className="title h5 text-white mt-2">{card.title}</h2>
      </div>

      <button className="add-to-cart-btn"  onClick={() => handleAddToCart(card)}>Add to Cart</button>
    </div>
  ))}
</Slider>

      </div>


      











 {/* New Card Section */}
      <div className="container">
     
      <div className="grid">
        {features.map((feature, i) => <FeatureCard key={i} {...feature} />)}
      </div>
    </div>


     
      <Footer />
    </>
  );
};

export default ESIM;