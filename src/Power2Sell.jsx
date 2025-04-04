

import React from "react";
import Navbar from "./Navbar";
import power2sell2 from "./assets/power2sell2.jpg";
import { useNavigate } from "react-router-dom";
import "./Style/powertosell.css";
import Footer from "./Footer.jsx"
import { FaCode, FaHandshake } from "react-icons/fa"; 
import powertosell from "./assets/powertosell.png";

const Power2Sell = () => {

  const handleWhatsAppClick = () => {
    const phoneNumber = '+270769675814';
    const message = encodeURIComponent('Hello, testing from website ');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };
  const navigate = useNavigate();

  
  const contextnav = () =>{
    navigate('/Contactus');
  
  
  }


  const cards = [
    { title: "Turn Sales into Success with iCell Mobile!", text: "Step into a world of opportunity as an iCell Mobile reseller! Earn high commissions on every sale, turning each transaction into steady income. The more you sell, the more you grow—building a reliable and scalable revenue stream for your business. 💰" },
    { title: "Unleash New Opportunities with iCell Mobile!", text: "Transform your business by offering high-demand, budget-friendly mobile services that keep customers coming back. As an iCell Mobile partner, you gain exclusive tools, expert guidance, and the flexibility to scale at your own pace—whether you're just starting out or looking to expand. 📈" },
    { title: "Fueling Success", text: " We’re more than just a network—we’re your partner in growth. Whether you're an ambitious entrepreneur or a thriving small business, we equip you with expert training, valuable resources, and hands-on support to help you scale with confidence. 🚀📈" },
    { title: "Your Growth, Our Commitment!", text: "We believe in empowering entrepreneurs with the tools to succeed. That’s why we provide ongoing training, marketing support, and a seamless operational framework to help you maximize your earning potential. With iCell Mobile, you’re not just selling a service—you’re building a brand, creating opportunities, and securing a brighter future." },
    { title: "Turn Ambition into Action with iCell Mobile!", text: "Dream big and achieve more with iCell Mobile! Whether you're a solo entrepreneur or a small business owner, we provide you with a proven business model, cutting-edge technology, and a strong support network to help you grow. Take control of your success and build a thriving business with us." },
  ];


  return (
    <>
   <div className="container-fluid main-containerofpower2sell ">
  <div className="row">
    <div className="col-12">
      <Navbar />
    </div>
  </div>

  {/* Main Section */}
  <div className="row align-items-center main-section1  ">
    {/* Text Section */}
    <div className="col-md-6  col-md-6 col-sm-6 text-section1 ">
      <h1 className="main-heading1">
        <span className="mainword1">Partner with iCell Mobile</span>
      </h1>
      <p className="main-paragraph1">
      Join us in bringing affordable, high-quality mobile services to more people. As a reseller, you’ll grow your business while keeping communities connected.
      </p>
      <button className="startbutton buttonpower" onClick={contextnav}>Become a partner</button>
    </div>

    {/* Image Section */}
    <div className="col-md-6  col-md-6 col-sm-6 image-section1 ">
      <img 
        src={powertosell}
        alt="Creative Design"
        className="img-fluid rounded-lg shadow-md powertosellmainimage1"
      />
    </div>
  </div>
</div>

{/* contect with us  */}












    {/* this is about card  */}


    <div className="wrapper">
      <div className="scroll-cards">
        <h1 className="growyourbusiness">Grow Your Business with iCell Mobile!</h1>
        {cards.map((card, index) => (
          <article
            key={index}
            className="scroll-cards__item"
            style={{ transform: `translate(${(index - 1) * 10}px, ${(index - 1) * 10}px)` }}
          >
            <h2>{card.title}</h2>
            <p className="paragraph">{card.text}</p>
          </article>
        ))}
      </div>
    </div>





    {/* this is the support section  */}

    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Side - Text Section */}
        <div className="col-lg-6 col-md-12">
          <h1 className="title">How to Become an iCell Mobile Reseller – Your Path to Success!
</h1>
          <p className="subtitle">
            <strong>The iCell Mobile Reseller Ecosystem</strong>
          </p>

          {/* Tech & Solution Partners in one row */}
          <div className="row">
            {/* Tech Partners */}
            <div className="col-md-6 text-center">
              <div className="icon-container">
              <FaCode className="icon" /> {/* React Icon */}
              </div>
              <h3 className="section-title">Sales Partners</h3>
              <p className="section-text">
              Sales Partners are individuals and businesses looking to generate income by selling iCell Mobile services, including airtime, data bundles, and SIM activations. Whether you're starting a side hustle or expanding your existing business, you’ll earn commissions on every sale while helping customers stay connected.
              </p>
            
            </div>

            {/* Solution Partners */}
            <div className="col-md-6 text-center">
              <div className="icon-container">
              <FaHandshake className="icon" /> {/* React Icon */}
              </div>
              <h3 className="section-title">Business Partners</h3>
              <p className="section-text">
              Business Partners go beyond sales, offering end-to-end mobile solutions. This includes setting up reseller networks, providing customer support, and integrating mobile services into their businesses. If you’re looking for long-term revenue and business expansion, this is the perfect model for you.              </p>
              <button className="startbutton buttonpower" onClick={handleWhatsAppClick}>Apply Now</button>

            </div>

          </div>
        </div>

        {/* Right Side - Image */}
        <div className="col-lg-6 col-md-12 text-center">
          <img src={power2sell2} alt="Business Collaboration" className="ecosystem-image" />
        </div>
      </div>
    </div>
<Footer></Footer>
    </>
  );
};

export default Power2Sell;