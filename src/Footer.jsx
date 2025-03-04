import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import logobackless from "./assets/logobackless.png"
import googlelogo from "./assets/googlelogo.webp"
import qrcode from "./assets/qrcode.png"
import appstore from "./assets/appstore.png"

const Footer = () => {


  const handleWhatsAppClick = () => {
    const phoneNumber = '+270769675814';
    const message = encodeURIComponent('Hi! I m interested in your services. Can you provide more details?');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <footer className="bg-white text-light pt-4">
      <div className="container">
        <div className="row">
          {/* Logo and Social Links */}
          <div className="col-md-3 text-center mb-3">
            <img
              src={logobackless}
              alt="Logo"
              className="mb-3 logo"
              width={100}
            />
            {/* Social Media Icons */}
            <div className="d-flex justify-content-center">
              <a href="https://www.facebook.com/share/1BQ2beiVNr/?mibextid=qi2Omg" className="text-light me-3">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-light me-3">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/icellmobile.co?igsh=ZjVhdW40OG4zY3dy" className="text-light me-3">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-light me-3">
                <FaTiktok size={24} />
              </a>
              <a href="#" className="text-light">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-black  text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/esim" className="text-black  text-decoration-none">
                  eSIM
                </a>
              </li>
              <li>
                <a href="/Topupdeal" className="text-black  text-decoration-none">
                  Deals
                </a>
              </li>
              <li>
                <a href="/Support" className="text-black  text-decoration-none">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-md-3 mb-3">
            <h5>Information</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/Aboutus" className="text-black  text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/Contactus" className="text-black  text-decoration-none">
                  Contact
                </a>
              </li>
              <li>
                <a href="/Power2Sell" className="text-black  text-decoration-none">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* App Download and Sponsorship */}
          <div className="col-md-3 text-center mb-3">
            <h5>Download Our App</h5>
            <div className="d-flex justify-content-center">
              <a href="https://play.google.com/store/apps/details?id=za.co.icellmobile&pcampaignid=web_share">
              <img
                src={googlelogo}
                alt="Google Play"
                width={150}
              />
               
              </a>
              <a href="https://qr.codes/5ueV8I">

              <img
              src={appstore}
              alt="Google Play"
              width={130}
              />

              </a>
            
            </div>
            <h5 className="mt-4">Scan QR and download Application</h5>
            <img
              src={qrcode}
              alt="qr code"
             width={100}
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 text-center text-md-start">
            <p>
              WhatsApp:<span onClick={handleWhatsAppClick} style={{ cursor: "pointer" }} > 0769675814 </span><br />
              support@icellmobile.co.za
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p>
              © 2025 Icell Mobile.<br />
              <a href="#" className="text-black text-decoration-none">
                Refund Policy
              </a>{" "}
              |{" "}
              <a href="#" className="text-black  text-decoration-none">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="#" className="text-black  text-decoration-none">
                Terms of Service
              </a>{" "}
              |{" "}
              <a href="#" className="text-black  text-decoration-none">
                Contact Information
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
