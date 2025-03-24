import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Mainpage.css"; // Import custom CSS
import Footer from "./Footer.jsx"
import gsap from "gsap";
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "./assets/slider1.png";
import slide2  from "./assets/slider2.png";
import slide3 from "./assets/slider3.png";
import eSIM from "./assets/esim.png"
import eSIM2 from "./assets/esim2.png"
import productimg from "./assets/productimg.png"
import mainbackgroundimg from "./assets/mainbackgroundimg.png"
import mainpackg1 from "./assets/mainpackg1.png"
import mainpackg2 from "./assets/maingpackg2.png"
import mainpackg3 from "./assets/mainpackg3.png"
import mainpackg4 from "./assets/mainpackg4.png"




import mainpackg6 from "./assets/mainpackg6.png"
import mainpackg7 from "./assets/mainpackg7.png"
import mainpackg8 from "./assets/mainpackg8.png"

import features1 from "./assets/features1.png"
import features2 from "./assets/features2.png"
import features3 from "./assets/features3.png"



import  voice from "./assets/voice.png"
import  sms from "./assets/sms.png"

import { useNavigate } from "react-router-dom";

import image from "./assets/image.png";



import Navbar from "./Navbar";
import { useState } from "react";






  
const Mainpage = () => {



// about the animation 

  const panelsRef = useRef([]);

  useEffect(() => {
      panelsRef.current.forEach((panel) => {
          gsap.fromTo(
              panel,
              { scale: 1, opacity: 0.7 },
              { scale: 0.9, opacity: 1, scrollTrigger: {
                      trigger: panel,
                      scrub: true,
                      start: "top bottom",
                      end: "top top",
                  },
              }
          );
      });
  }, []);




 
  



//for the nav 
    const navigate = useNavigate();

const getursim = () => {
  navigate('/Getyoursim');
};

const contextnav = () =>{
  navigate('/Contactus');


}
const aboutnav = () =>{
  navigate('/aboutus');


}


// add to cart 

  const itamlimitnotification = () => {
      toast.warn("You can only have 4 unique items in your cart at a time!", {
        autoClose: 2000,
      });
    };

    const handleAddToCart = (product) => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    
      const existingItemIndex = cartItems.findIndex((item) => item.title === product.title);
    
      if (existingItemIndex !== -1) {
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



// this section is about the packages 

  // this is about the our proceesss


  const [activeIndex, setActiveIndex] = useState(0); // Track the currently active timeline item
    const timelineRef = useRef(null);
  
    // Define the data directly within this component
    const data = [
      {
        title: "30 days packages",
        content: "📲 Available only in-app or via USSD. Dial 136# to get yours now!",
        images: [
          mainpackg1,
          mainpackg2,
        ],
      },
      
      {
        title: "24 hours packages ",
        content: "Stay connected without limits—your data never expires!",
        images: [
          mainpackg6,
          mainpackg6,
        ],
      },
      {
        title: "Our Voice & SMS Rate",
        content: "Skip the bundles! With iCell, your voice calls and SMS are charged directly from your airtime at a flat rate—simple and hassle-free!",
        images: [
          voice,
          sms,
        ],
      },
    ];
  


    const handleScroll = () => {
      if (!timelineRef.current) return;
  
      const items = timelineRef.current.querySelectorAll(".timeline-item");
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of viewport
  
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemTop = window.scrollY + rect.top; // Calculate position in the document
  
        if (scrollPosition >= itemTop && scrollPosition < itemTop + rect.height) {
          setActiveIndex(index);
        }
      });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      // Trigger scroll on mount to set the initial active item
      handleScroll();
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  









// this if togggle for the buy sim

const accordionData = [
  {
    title: "iCell is Limitless",
    answer:
      "Break free from restrictions with endless connectivity, unlimited calls, and expansive data plans designed for your lifestyle.",
  },
  {
    title: "iCell is Hassle-Free",
    answer:
      "No confusing contracts, no hidden fees—just simple, transparent plans that put you in control",
  },
  {
    title: "iCell is Honest",
    answer:
      "What you see is what you get—clear pricing, no surprises, and complete transparency in every plan.",
  },
  {
    title: "iCell is Future-Ready",
    answer:
      "Experience innovation with cutting-edge technology, seamless digital solutions, and a network built for the future.",
  },
];


// stay connect 



useEffect(() => {
  const scrollers = document.querySelectorAll(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // Duplicate content for seamless animation
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
}, []);



//testmonials 

  const [activeSection, setActiveSection] = useState("Collaborative Editing");
  const sections = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("data-section"));
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.5, // Trigger when 50% of the element is visible
        rootMargin: "0px 0px -50% 0px", // Trigger a bit earlier to match the layout
      }
    );
  
    sections.current.forEach((section) => {
      if (section instanceof Element) {
        observer.observe(section);
      }
    });
  
    return () => {
      sections.current.forEach((section) => {
        if (section instanceof Element) {
          observer.unobserve(section);
        }
      });
    };
  }, []);


const getImageForSection = () => {
  switch (activeSection) {
    case "Collaborative Editing":
      return mainpackg6;
    case "Real-Time Updates":
      return mainpackg7;
    case "Streamlined Productivity":
      return mainpackg8;

    default:
      return "https://via.placeholder.com/400x250?text=Default+Image";
  }
};


// whatps


const handleWhatsAppClick = () => {
  const phoneNumber = '+270769675814';
  const message = encodeURIComponent('Hi! I m interested in your services. Can you provide more details?');
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappURL, '_blank');
};




    
  return (
    <>  
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />

    {/* this is the main page  main container  */}

<div className="container-fluid border main-container">
      <Navbar />
      <Fade direction="left" duration={500}>
      
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
            <div>
              <h1 className="main-heading">
                              <span className="mainword"> iCell Mobile</span>

               – Stay Connected, Stay Ahead 
              </h1>
              <p className="main-paragraph">Experience reliable connectivity with iCell Mobile – your go-to network for fast SIM activation, high-speed data, and flexible packages tailored to your needs.</p>
              <button className="btn  startbutton" onClick={contextnav}>Get Started</button>
            </div>
        </div>

        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
            <div className="mainImage">
              {/* <img  alt="Creative Design" className="w-100 h-auto rounded shadow-md" loading="lazy" /> */}
            </div>
        </div>
      </div>
      </Fade>

    

</div>



{/* {/* buy sim component  */}
<div className="why-onic-container">
      <h2 className="text-center1">Why choose us </h2>
      <div className="onic-content">
        {/* Left Side Image */}
        <div className="image-container">
          <img src={eSIM} alt="Happy User" className="onic-image" />
        </div>

        {/* Right Side Accordion */}
        <div className="accordion-container">
          {accordionData.map((item, index) => (
            <div key={index} className="accordion-item active">
              <div className="accordion-title accordiontitle">{item.title}</div>
              <div className="accordion-content">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="text-center1 mt-3">
        <button className="see-plans-btn" onClick={getursim}>Get Your sim  </button>
      </div>
    </div>







    {/* dont warry stay connect  */}

   

    <div className="scroll-container">
      {/* Left Section: Scrollable Text */}
      <div className="text-section">
        <div
          className="text-block"
          data-section="Collaborative Editing"
          ref={(el) => {
            if (el) sections.current[0] = el;
          }}
        >
          <h2 className="clienttestimonailmain" >No limits, just connection       </h2>
       <Fade direction="left"   damping={5000} duration={1000} >
          
          <h2 className="clienttestimonail">Stayonnected with Ease – 1GB Data for Just R49  </h2>
          <p className="clienttestimonailparagrph">
          Perfect for light users, our 1GB Data Plan keeps you connected without breaking the bank. Whether you're checking emails, scrolling social media, or sending quick messages, this affordable plan ensures smooth browsing and uninterrupted communication. Stay online effortlessly at just R49—ideal for your daily essentials!  
          </p>
         </Fade>
        </div>

        <div
          className="text-block"
          data-section="Real-Time Updates"
          ref={(el) => {
            if (el) sections.current[1] = el;
          }}
        >

<Fade direction="left"   damping={5000} duration={1000} >
          <h2 className="clienttestimonail">More Data, More Freedom – 3GB Plan for R99 </h2>
          <p className="clienttestimonailparagrph">
          Need more data for streaming, video calls, or work on the go? Our 5GB Data Plan offers the perfect balance of affordability and flexibility. At just R99, you can enjoy extended browsing, stay active on social media, and even watch your favorite content without interruptions. Say goodbye to data worries and embrace seamless connectivity! 
          </p>
          </Fade>
        </div>
        <div
          className="text-block"
          data-section="Streamlined Productivity"
          ref={(el) => {
            if (el) sections.current[2] = el;
          }}
        >
          <Fade direction="left"   damping={5000} duration={1000} >

          <h2 className="clienttestimonail" >Power Up Your Connection – 11GB for R239          </h2>
          <p className="clienttestimonailparagrph">
          For heavy data users who demand the best, our 11GB Data Plan delivers uninterrupted speed and performance. Whether it's HD streaming, gaming, or working remotely, this plan gives you the freedom to do it all at just *R239*. Stay connected longer, experience faster browsing, and enjoy hassle-free digital life with iCell!
          </p>
          </Fade>
        </div>
      </div>

      {/* Right Section: Dynamic Image */}
      <div className="image-section">
        <div className="static-image">
          <img src={getImageForSection()} alt={activeSection} />
        </div>
      </div>
    </div>









{/* slider for the product  */}

    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      {/* Indicators */}
      
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        
        {[slide1, slide2, slide3].map((slide, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
            
            <img src={slide} className="carousel-img" alt={`Slide ${index + 1}`} />

            
            {/* <div className="carousel-caption text-container">
              <h2>Icell Mobile </h2>
              <p>About us click here </p>
              <button className="btn sliderbtn" onClick={aboutnav}>LEARN MORE</button>
            </div> */}
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>


      


{/* this is infinte loop for the new packages  */}


<div className="timeline-container" ref={timelineRef}>
      <div className="timeline-header">
        <h2 className="timeline-title headingforprocess">Unlimited Data, Zero Expiry – Stay Connected Always! </h2>
        <p className="timeline-description">
        Say goodbye to data expiry! With iCell’s Never-Expiring Bundles, your data stays with you as long as you need it. Browse, stream, and connect at your own pace—no more rushing!  

        </p>
      </div>

      {data.length > 0 ? (
        <div className="timeline">
          {data.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="timeline-marker">
                <div className="marker-circle"></div>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-year">{item.title}</h3>
                <p className="timeline-description">{item.content}</p>
                <div className="timeline-images">
                  {item.images.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={`Timeline image ${imgIndex + 1}`}
                      className="timeline-image"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No data available to display.</p>
      )}
    </div>
  










{/* {/* buy sim component  */}
<div className="banner container-fluid text-white text-center">
      <div className="row align-items-center">
        <div className="col-md-6 text-content">
          <h1>
            <span className="highlight">Grab the Liberty Plan – Up to 50% Off!</span>
          </h1>
          <p className="offer-text">
          <span className="highlight-circle">6GB</span>  SIM Card Starter Pack !
          </p>
          <p className="offer-text">
          Only  Grab this deal before it’s gone! Originally ,<span className="highlight-box">R314</span> now only   <span className="highlight-box">R209</span> for a limited time!
          </p>
          <button className="btn btn-lg see-plans-btn">Add to cart </button>
        </div>
        <div className="col-md-6 image-content">
          <img src={eSIM2} alt="Promo" className="promo-image" />
        </div>
      </div>
    </div>




{/* this is the about the application */}
  
<div className="container py-5">
<h1 className="featureheading">Recharge Made Simple</h1>
<p className="featurepargraph">
Never run out of data or airtime again! With iCell’s easy top-up options, you can reload anytime, anywhere in just a few taps. Stay connected, stream, chat, and browse without interruptions.</p>


      <div className="row text-center">
        <div className="col-md-4">
          <div className="plan-card p-4">
            <h3>Shop & Pay with Confidence – Transactions.
            </h3>
            <p>Experience hassle-free shopping and secure payments with iCell’s smooth transaction system. Whether you're buying data, airtime, or making online purchases, our app ensures fast, safe, and effortless transactions every time.!</p>
            <img src={features1} alt="Manage Plan" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="plan-card p-4">
            <h3>Stay in Control
            </h3>
            <p>Keep an eye on your data and airtime with real-time tracking and detailed insights. With iCell, you can monitor your usage, manage spending, and stay on top of your connectivity without any hassle.
            Know more, save more – take charge of your data today!</p>
            <img src={features2}  alt="Track Usage" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="plan-card p-4">
            <h3>More Data, More Rewards            </h3>
            <p>Stay connected and enjoy extra data rewards just for using iCell! Whether you're browsing, streaming, or chatting, we make sure you get more value with every top-up Stay connected, get rewarded – it's that simple!</p>
            <img src={features3}  alt="Manage Addons" className="img-fluid" />
          </div>
        </div>

        
      </div>
    </div>



<Footer></Footer>

    </>

  );
};

export default Mainpage;
