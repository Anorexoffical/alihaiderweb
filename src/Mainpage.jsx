import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Mainpage.css"; // Import custom CSS
import Footer from "./Footer.jsx"
import gsap from "gsap";
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";


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



import mainpackg6 from "./assets/maingpackg6.png"
import mainpackg7 from "./assets/maingpackg7.png"
import mainpackg8 from "./assets/maingpackg8.png"






import  voice from "./assets/voice.webp"
import { useNavigate } from "react-router-dom";



import { FaWhatsapp } from "react-icons/fa";


import Navbar from "./Navbar";
import { useState } from "react";

import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";



const dataBundles = [
    { id: 1, text: "5GB Data", price: "*136#", duration: "30 Days", image: mainpackg2  },
    { id: 2, text: "11GB Data", price: " *136#", duration: " 30 Days ,Data bundle only available from 18 Dec to 8 Jan 2025!", image:mainpackg3},
    { id: 3, text: "15GB Data", price: "*136#", duration: "30 Days", image: mainpackg1 },
    { id: 4, text: "25GB Data", price: " *136#", duration: "30 Days", image:  mainpackg4  },


  ];

const dataBundles1gb = [
  { id: 1, text: "1GB Data", price: "@ R49 that NEVER expires! Top up in our app Or dial: *136#", duration: "full day , You get BONUS 100MB for FREE when you top-up in our app!", image: mainpackg6 },
  { id: 2, text: "3GB Data", price: "@ R99 that NEVER expires! Top up in our app Or dial: *136#", duration: "full day , You get BONUS 100MB for FREE when you top-up in our app!", image:mainpackg7 },
  { id: 3, text: "11GB Data", price: "@ R239 that NEVER expires! Top up in our app Or dial: *136#", duration: "full day , You get BONUS 100MB for FREE when you top-up in our app!", image: mainpackg8 },

];

const dataBundlesvoice = [
  { id: 1, text: "R0.25 per SMS", price: " to any network. NEVER Expires", duration: "Top up in our app Or dial: *136# Buy any of these vouchers: OTT Voucher, 1Voucher, BluVoucher Redeem: Dial *136*0*vouchercode#", image: voice },
  { id: 2, text: "R0.69 per/min", price: "Top up in our app Or dial: *136#,Buy any of these vouchers: OTT Voucher, 1Voucher, BluVoucher,Redeem: Dial *136*0*vouchercode#", duration: "30 Days", image:voice },
  
];



  
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


  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

 
  

    const [show, setShow] = useState(false);
    const [selectedBundle, setSelectedBundle] = useState(null);
  
    const handleShow = (bundle) => {
      setSelectedBundle(bundle);
      setShow(true);
    }


    // for question

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    const faqs = [
      { question: "Recharge your data/airtime effortlessly", answer: "Easily top up your data or airtime in just a few clicks." },
      { question: "Monitor and control your usage", answer: "Keep track of your data and spending with detailed insights." },
      { question: "Earn BONUS data rewards", answer: "Get extra data as a reward for consistent usage." },
      { question: "Shop and transact seamlessly", answer: "Enjoy smooth and secure transactions through our app." },
      { question: "Keep your number or choose a new one", answer: "Flexibility to retain your existing number or get a new one." },
      { question: "Access the app data-FREE", answer: "Use the app without consuming your data balance." },
    ];

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

 const cards = [
    {
      id: 1,
      title: "6GB SIM Card Starter Pack",
      subtitle: "R 209.00",
      quantity: 1,
      image: eSIM2,
      
    }
  ];





// whatps


const handleWhatsAppClick = () => {
  const phoneNumber = '+270769675814';
  const message = encodeURIComponent('Hi! I m interested in your services. Can you provide more details?');
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappURL, '_blank');
};




    
  return (
    <>  

    {/* this is the main page  main container  */}

<div className="container-fluid border main-container">
      <Navbar />
      <Fade direction="left" duration={500}>
      
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
            <div>
              <h1 className="main-heading">
                              <span className="mainword"> iCell Mobile</span>

                – YOUR SIM. YOUR SPEED. YOUR CONNECTION. 
              </h1>
              <p className="main-paragraph">Stay connected with iCell Mobile – your trusted network for seamless SIM, data, and packages, designed for ultimate convenience and speed.</p>
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




      {/* CEO Message Section */}

      
      <div className="container my-5">


      <div className="row align-items-center">
        {/* Text Section */}

        <div className="col-lg-6 text-section">

        <Fade direction="left" duration={1500}>

          <h2 className="ceo-heading">
            Why Switch to <span className="brandname">ICELL Mobile?</span>
          </h2>
          <h5 className="ceoheading2">
            Where Connectivity Meets Champions: Icell Mobile!
          </h5>
          <ul className="features-list">
            <li>
              Enjoy substantial savings on data and airtime{" "}
              <span className="highlight1">(up to 50% or more per month)</span>
            </li>
            <li>  <span className="highlight1">Experience</span> effortless RICA and SIM activation for quick setup</li>
            <li>Seamlessly  <span className="highlight1">keep your current number</span> or get a new one</li>
            <li>Access data bundles that <span className="highlight1"> NEVER</span> expire, ensuring constant connectivity</li>
            <li>Receive daily <span className="highlight1"> FREE data</span> to stay connected without worries</li>
            <li>Enjoy the  <span className="highlight1"> most affordable rates for SMS and voice calls</span></li>
            <li> <span className="highlight1">No contracts! No Monthly fees! No credit checks!</span></li>
          </ul>
          <button className="btn mt-4 startbutton" onClick={getursim} >Get your sim </button>
          </Fade>

        </div>


        {/* Image Section */}
        <div className="col-lg-6 text-center">

        <Fade direction="right" duration={500}>

          <img
            src={eSIM}
            alt="Creative Design"
            className="img-fluid rounded shadow image-section"
          />

          </Fade>
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


      <Container className="py-5 text-center">
      <Fade direction="down" duration={1000}>

      <h1 className="packgheading">Don't Januworry!</h1>
      <h2 className="packheading2">30-day Data Deals!</h2>
      <p>Only available in-app or on USSD: *136#</p>
</Fade>

<Fade direction="top" duration={1000}>

      <Row className="justify-content-center">
        {dataBundles.map((bundle) => (
          <Col key={bundle.id} xs={12} sm={6} md={6} lg={3} className="mb-4">
            <Card className="bundle-card text-white text-center" onClick={() => handleShow(bundle)}>
              <img src={bundle.image} alt={bundle.text} className=" no-padding" />
              <div className="overlay">
                <div className="bundle-text">30-Days</div>
                <div className="plus-button">
                  <FaPlus />
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      </Fade>

      {/* Popup Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBundle?.text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Get {selectedBundle?.text} for just {selectedBundle?.price}. Enjoy high-speed internet
            access for {selectedBundle?.duration}.
          </p>
        </Modal.Body>
      </Modal>
    </Container>




    {/* this is about data in 1gb  (Score Big)*/}


    <Container className="py-5 text-center">
    <Fade direction="down" duration={1000}>

      <h1 className="packgheading">Score Big with Our NEVER-EXPIRING BUNDLES      </h1>
      <p>Stay connected longer with data that never runs out! #UntilUntil</p>
</Fade>

    <Fade direction="top" duration={1000}>

      <Row className="justify-content-center">
        {dataBundles1gb.map((bundle) => (

          <Col key={bundle.id} xs={12} sm={6} md={6} lg={3} className="mb-4">
            <Card className=" text-white  cardcolor"   onClick={() => handleShow(bundle)}>
              <img src={bundle.image} alt={bundle.text} className="" />
                <div className="plus-button">
                  <FaPlus />
              </div>
            </Card>
          </Col>

        ))}
      </Row>
      </Fade>


      {/* Popup Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBundle?.text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Get {selectedBundle?.text} in-app or dial {selectedBundle?.price}. Enjoy high-speed internet
            access for {selectedBundle?.duration}.
          </p>
        </Modal.Body>
      </Modal>
    </Container>




    {/* this is about data in voice */}


    {/* this is about data in 1gb  (Score Big)*/}


    <Container className="py-5 text-center">
    <Fade direction="down" duration={1000}>

      <h1 className="packgheading">Our Voice & SMS Rate      </h1>
      <p>You no longer need to buy voice/SMS bundles. With us, it gets charged directly from your airtime at a flat rate!</p>
</Fade>

<Fade direction="top" duration={500}>

      <Row className="justify-content-center">
        {dataBundlesvoice.map((bundle) => (
          <Col key={bundle.id} xs={12} sm={6} md={6} lg={3} className="mb-4">
            <Card className="bundle-card text-white text-center cardcolor"   onClick={() => handleShow(bundle)}>
              <img src={bundle.image} alt={bundle.text} className="bundle-image" />
              <div className="overlay">
                <div className="bundle-text">voice packages</div>
                <div className="plus-button">
                  <FaPlus />
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      </Fade>

      {/* Popup Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBundle?.text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Get {selectedBundle?.text} for just {selectedBundle?.price}. Enjoy high-speed internet
            access for {selectedBundle?.duration}.
          </p>
        </Modal.Body>
      </Modal>
    </Container>




          {/* buy new sim */}


          <div id="hero-section" className="container-fluid px-0 position-relative">
  <div className="row g-0">

    <div className="col-lg-12">
    <Fade direction="left" duration={2000}>

      <img 
        src={mainbackgroundimg} 
        alt="5G Network" 
        className="hero-image img-fluid" 
      />
      </Fade>
      <div className="hero-overlay">
        <div className="hero-content text-center">
          <h1 className="hero-title connectivity">
          Experience Connectivity  
            5G
            Nationwide
          </h1>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid content-container py-5">
  <div className="row product-container align-items-center">
    
    <div className="col-xl-6 col-md-6 col-sm-12 text-center">
    <Fade direction="left" duration={2000}>

      <img src={eSIM2} className="product-image img-fluid" alt="Product" />
      </Fade>
    </div>

    <div className="col-xl-6 col-md-6 col-sm-12 product-info">
    <Fade direction="right" duration={2000}>

      <h1 className="product-title">6GB SIM Card Starter Pack</h1>
      </Fade>
      <Fade direction="right" duration={2000}>

      <div className="price-container d-flex flex-column text-center">
        <span className="discounted-price">R 209.00</span>
        <span className="original-price">R 314.00</span>
      </div>
</Fade>




      <div className="quantity-controls d-flex align-items-center gap-2 mt-3">
      <div className="d-flex align-items-center custombtn ">

  <button className="btn" onClick={decreaseQuantity }> &lt;</button>
  <p className="quantity-number mx-3 my-0">{quantity}</p>

  <button className="btn" onClick={increaseQuantity}>&gt;</button>
</div>
  <button className="btn  add-to-cart" onClick={() => handleAddToCart(cards[0])}>Add to Cart</button>
</div>
      
      <hr className="divider" />

      <div className="action-buttons d-flex justify-content-between align-items-center">
      <button className="btn whatsappbtn" onClick={() => handleWhatsAppClick()}> <FaWhatsapp /></button>        
      <p className="view-detail m-0" onClick={() => navigate("/Getyoursim")} >View Detail →</p>
      </div>
    </div>
  </div>
</div>





{/* about the application  */}
<h1 className="gheading">5G Connectivity Nationwide</h1>

<div id="hero-section" className="container-fluid px-0 position-relative">
  <div className="row g-0">
    <div className="col-lg-12">
    <Fade direction="up" duration={1500}>

      <img 
        src={productimg} 
        alt="5G Network" 
        className="hero-image img-fluid" 
      />
      </Fade>
      <div className="hero-overlay">
        <div className="hero-content text-center">
        
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container my-5 ">
      <h2 className="text-center fw-bold mb-4">Features and Benefits of our appp</h2>
      <div className="accordion mobilecontianer">
        {faqs.map((faq, index) => (
          <div key={index} className="card mb-2 border-0">
            <div
              className="card-header bg-white d-flex justify-content-between align-items-center p-3"
              onClick={() => toggleAnswer(index)}
              style={{ cursor: "pointer" }}
            >
              <h6 className="m-0 fw-bold">{faq.question}</h6>
               <div className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}>
                  <FaPlus />
                </div>

            </div>
            {openIndex === index && (
              <div className="card-body p-3">
                <p className="m-0">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
   
    </div>
<Footer></Footer>

    </>

  );
};

export default Mainpage;
