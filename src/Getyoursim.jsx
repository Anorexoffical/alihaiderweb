
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Style/Getyoursim.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import eSIM from "./assets/esim4.png"
import eSIM5 from "./assets/esim5.png"
import eSIM4 from "./assets/esim3.png"
import eSIM6 from "./assets/esim6.png"
import getyoursimmain from "./assets/getyoursimmain.jpg"
import { useNavigate } from "react-router-dom"; // Add this at the top


const IMG_PADDING = 12;

// Custom Arrow Component with React Icons



const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="position-relative" style={{ height: "150vh" }}>
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="position-sticky z-0 overflow-hidden rounded-3"
    >
      <motion.div
        className="position-absolute top-0 start-0 w-100 h-100  "
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-white "
    >
      <p className="mb-5 text-center fs-1  mainclass">{subheading}</p>
      <p className="text-center displaxy-4 ">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto container row gap-4 px-4 pb-5 pt-3 ">
    <h2 className="col-12 col-md-4 fs-1 fw-bold text-white">
    UNBEATABLE PRICES, MAXIMUM VALUE!    </h2>
    <div className="col-12 col-md-8">
      <p className="mb-4 fs-5 text-white">
      Why pay more when you can get premium connectivity at the lowest cost? With iCell Mobile, enjoy super-fast data speeds, crystal-clear calls, and seamless nationwide coverage—all at prices that no other provider can match!

      </p>
      <p className="mb-4 fs-5 text-white">
    Whether you need a starter pack or a high-data plan, we’ve got the most affordable and flexible options to keep you connected anytime, anywhere—without breaking the bank! 
      </p>
     
    </div>
  </div>
);




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


const getyoursim = () => {


//add to cart 

    const navigate = useNavigate(); // Ensure useNavigate is used correctly

    const handleAddToCart = (product) => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    
      const existingItemIndex = cartItems.findIndex((item) => item.title === product.title);
    
      if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity += 1;
      } else {
        cartItems.push({
          ...product,
          quantity: 1,
          price: parseFloat(product.subtitle.replace("R ", "")) || 0, // Ensure price is a valid number
        });
      }
    
      localStorage.setItem("cart", JSON.stringify(cartItems));
      navigate("/productlist");
    };
  

  // about silder 

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
    nextArrow: <CustomArrow direction="right" />, // Custom next button
    prevArrow: <CustomArrow direction="left" />, // Custom previous button
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
      title: "5GB SIM Card Starter Pack R209",
      subtitle: "R 209.00",
      discount:40,
      image: eSIM,
    },
    {
      id: 2,
      title: "10GB SIM Card Starter Pack R259",
      subtitle: "Product",
      discount:20,
      image: eSIM4,
    },
    {
      id: 3,
      title: "55GB SIM Card Starter Pack R659",
      subtitle: "Product",

      discount:70,

      image: eSIM5,
    },
    {
      id: 4,
      title: " 3GB Data 7Days R900",
      subtitle: "Technology",
      discount:50,

      image: eSIM6,
    },
  
  ];

    return (
      <>
      <div className="mainback">
      <h1 style={{ paddingTop: "1px" }}></h1>
      <Navbar />
      <h1 style={{marginBottom:"50px"}}></h1>

        {/* Parallax Sections */}
        <TextParallaxContent
          imgUrl={getyoursimmain}
          subheading="ICell Mobile SIM cards are here!"
          heading="Get your Amandla Mobile SIM and choose from 6GB to 55GB SIM card starter packs! Delivery is FREE across the country."
        >
          <ExampleContent />
        </TextParallaxContent>
   



{/* about te servecs slider  */}

<div className="carousel-container container-fluid py-5">
      {/* Heading Section */}
      <div className="text-center mb-5">
          <h1 className="mb-3 display-4 fw-bold serviceheading">
          SIM card Starter Packs <br /> 
          </h1>
          <p className="text-secondary lead">
          FREE Delivery!
          </p>
      </div>

      <Slider {...settings}>
  {cards.map((card) => (
    <div key={card.id} className="carousel-card position-relative p-3">
      {/* Image Container (Relative for Proper Positioning) */}
      <div className="image-container position-relative">
        {/* Discount Badge on Image */}
        <div className="discount-badge position-absolute top-0 start-0 bg-danger text-white rounded px-2 py-1">
        {card.discount}% OFF
          
        </div>

        <img
          src={card.image}
          alt={card.title}
          className="carousel-image rounded w-100 img-fluid"
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
      </div>


<Footer></Footer>
</>



    );
  };
  
  export default getyoursim;



