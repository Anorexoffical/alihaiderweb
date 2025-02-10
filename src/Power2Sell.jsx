import React from "react";
import { FaHeadset, FaShippingFast, FaUsers, FaLock } from "react-icons/fa";
import Navbar from "./Navbar";
import power2sell2 from "./assets/power2sell2.png";
import { useNavigate } from "react-router-dom";
import "./Style/Power2sell.css";
import Footer from "./Footer.jsx"

const Power2Sell = () => {

  const handleWhatsAppClick = () => {
    const phoneNumber = '+270769675814';
    const message = encodeURIComponent('Hello, testing from website ');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };
  const navigate = useNavigate();

  return (
    <>
      {/* Main Blog Heading Section */}
      <div className="powertosellmainheading">
      <h1 style={{ paddingTop: "1px" }}></h1>

        <Navbar />
        <div className="text-container text-white overlay">
          <h1 className="powerheading">
          Join the <span className="mainword2">iCell Mobile</span> Reseller Network Today!
          </h1>
          <p className="lead power2sellparg">
            Partner with us to bring affordable, high-quality mobile services to South Africa. Apply now, grow your business, and enjoy continuous earnings!
          </p>
        </div>
      </div>

      {/* Why Become Section */}
      <div className="py-5 ">
        <div className="container">
          <h2 className="text-center mb-5 section-heading">
            Why Become an  <span className="mainword2">Icell Mobile</span> Reseller?
          </h2>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card shadow h-100 text-center p-4 cardspower">
                <h3 className="mb-3">Earn Additional Revenue</h3>
                <p>
                As an iCell Mobile reseller, you’ll earn a continuous income from every sale. With attractive commissions, the more you sell, the more you earn, ensuring a steady revenue stream as your business expands.                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow h-100 text-center p-4 cardspower">
                <h3 className="mb-3">Grow Your Business</h3>
                <p>
                Partnering with iCell Mobile allows you to grow your business by providing affordable mobile services. Whether you're an entrepreneur or a small business owner, you'll have the resources and flexibility to thrive                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow h-100 text-center p-4 cardspower">
                <h3 className="mb-3">Support for Entrepreneurs</h3>
                <p>
                iCell Mobile is committed to empowering entrepreneurs and small businesses. We offer comprehensive support, training, and resources to help you succeed and grow your business.                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CEO Message Section */}
      <div className="container my-5 howitwork">
        <div className="row align-items-center g-4">
          {/* Text Section */}
          <div className="col-lg-6">
            <h2 className="work-heading">How it works</h2>
            <p className="ceoparagraph mt-3">
            Thank you for your interest in becoming an iCell Mobile reseller!  
            <br />
            <br />
            We’re excited about the opportunity to partner with motivated individuals and businesses to expand access to affordable, high-quality mobile services. As an iCell Mobile reseller, you’ll play a key role in this mission while also building a steady income and growing your business.  
            <br />
            <br />
            At iCell Mobile, we are committed to empowering entrepreneurs and small businesses. Our platform provides the tools and support you need to succeed while helping communities stay connected. To get started, please fill out the form with accurate details—this will help us assess your eligibility and suitability as an iCell Mobile reseller.  
            <br />
            <br />
            Transparency and trust are at the core of our partnerships. All resellers are required to follow the guidelines outlined in our Terms and Conditions. Once your application is submitted, our team will review it within 5-7 business days and provide you with the next steps.  
            <br />
            <br />
            We look forward to building a successful partnership with you!  
          </p>
            <button className="btn mt-4 applybtn"  onClick={() => navigate("/Contactus")}>
              Apply Today →
            </button>
          </div>

          {/* Image Section */}
          <div className="col-lg-6">
            <img src={power2sell2} alt="Creative Design" className="img-fluid rounded " />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-3 d-flex flex-column align-items-center">
            <FaHeadset size={40} className="mb-3  iconcolor" style={{color:"#3fbb2b"}}/>
            <h5 className="fw-bold">Customer Care</h5>
            <p className="text-muted">
              Need any help? Please send us a WhatsApp on 
              <a onClick={handleWhatsAppClick} className="text-decoration-none"   style={{ cursor: "pointer" }}  >
               0769675814
              </a>
            </p>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center">
            <FaShippingFast size={40} className="mb-3 iconcolor" />
            <h5 className="fw-bold">Countrywide Shipping</h5>
            <p className="text-muted">
              Get a SIM shipped for FREE to your doorstep, or receive an eSIM sent to your email instantly!
            </p>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center">
            <FaUsers size={40} className="mb-3 iconcolor" />
            <h5 className="fw-bold">Join a Community</h5>
            <p className="text-muted">
              Join a community where you save money every month! We've got your back!
            </p>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center">
            <FaLock size={40} className="mb-3 iconcolor" />
            <h5 className="fw-bold">Secure Payment</h5>
            <p className="text-muted">
              Your payment information is processed securely.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Power2Sell;
