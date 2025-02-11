import React from 'react';
import Navbar from './Navbar';
import './Style/Aboutus.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./Style/Services.css";
import ourstroy from "./assets/ourstroy.jpg"
import bestpackeg2 from "./assets/bestpackeg2.png"

import cheappackg from "./assets/cheappackg.png"
import vision from "./assets/vision.jpg"
import mission from "./assets/ourmission.jpg"
import Footer from "./Footer"

import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";

 

const AboutUs = () => {
  
  return (
    <div>
      {/* Hero Section */}
      <div className="backgroudimag">
        <Navbar />
        <div className="text-container">
          <h1 className="centered-text">About Us</h1>
        </div>
      </div>

      <div className="content-container px-4 py-4">
        {/* Section Heading */}
        <div className="text-center mb-4">
          <h2 className="text-danger text-uppercase">Our Story</h2>
          <h1 className="main-title">
             Our Journey: Powering the  <span className="maintex">Digital Revolution </span> 
          </h1>
        </div>

        {/* Main Content */}
        <div className="row g-4">
          {/* Image Section */}
          <div className="col-lg-6">
            <img
            src={ourstroy}
              alt="Creative Design"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Info Section */}
          <div className="col-lg-6">
            <p className="text-dark mb-4 text-justify">
            Founded in 2024, iCell Mobile was born with a mission to revolutionize mobile communication by making it affordable, reliable, and accessible to all. Our name, "iCell," represents the power of connectivity, putting control back into the hands of the people. We believe that communication is not just a privilege but a fundamental right. With iCell Mobile, you get the power of cost-effective airtime, data that won’t break the bank, and innovative technology designed to keep you ahead.
            </p>

            {/* Stats Section */}
            <div className="row row-cols-2 mb-4">
              {[
                { count: '10k+', label: 'Completed Projects' },
                { count: '15k+', label: 'Satisfied Customers' },
                { count: '10+', label: 'Years Of Mastery' },
                { count: '45+', label: 'Worldwide Honors' },
              ].map((stat, index) => (
                <div key={index} className="col text-center">
                  <h3 className="fw-bold text-black">{stat.count}</h3>
                  <p className="text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

          
          </div>
        </div>
      </div>

      {/* CEO Message */}
      <div className="row g-4 bg-light py-5">
        {/* Text Section */}
        <div className="col-lg-6">
          <h1 className="ceoheading"> <span className='mainwordabout2'>Our Vision:</span>Connecting the Unconnected </h1>
          <p className="ceoparagraph">
          At iCell Mobile, our vision is to become the leading force in mobile services, bridging gaps and transforming lives. We are committed to expanding our network coverage, pioneering new solutions tailored to our customers’ needs, and establishing iCell Mobile as a household name synonymous with trust and innovation in telecommunications.</p>
        </div>

        {/* Image Section */}
        <div className="col-lg-6">
          <img
            src={mission}
            alt="Creative Design"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>






  {/* CEO Message */}
  <div className="row g-4 bg-light py-5">






       {/* Image Section */}
       <div className="col-lg-6">
          <img
            src={vision}
            alt="Creative Design"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text Section */}

        <div className="col-lg-6">
          <h1 className="ceoheading"> <span className='mainwordabout2'>Our Mission:</span> Empowering People, One Connection at a Time</h1>
          <p className="ceoparagraph">
          Our mission is to break barriers and provide seamless connectivity that empowers individuals and communities. We are dedicated to providing customers with tools and services that enhance their digital experience, continuously advancing technology to deliver cutting-edge mobile solutions, upholding transparency, honesty, and ethical business practices, and prioritizing our customers’ needs to ensure top-tier service and satisfaction. At iCell Mobile, we are committed to delivering high-quality, affordable mobile services that keep communities connected and thriving.        

     </p>
     </div>
      </div>




  <div class="container">
    <div class="row align-items-center">
      {/* <!-- Left Column - Text --> */}
      <div class="col-md-6 col-xl-6 col-sm-12 bestservices">
        <h2 className='bestservicesh'>We provide the best  <span className='mainwordabout'>network performance. </span></h2>
        <p className='bestservicesp'> 
        We have optimized our backend infrastructure to ensure that our SIM cards and data services deliver
        </p>
      </div>
      {/* <!-- Right Column - Image --> */}
      <div class="col-md-6 col-xl-6 col-sm-12">
        <img src={cheappackg} class="img-fluid" alt="Responsive Image"/>
      </div>
    </div>
  </div>



  <div class="container">
    <div class="row align-items-center">
      {/* <!-- Left Column - Text --> */}


      <div class="col-md-6 col-xl-6 col-sm-12">
        <img src={bestpackeg2} class="img-fluid" alt="Responsive Image"/>
      </div>


      <div class="col-md-6 col-xl-6 col-sm-12 bestservices2">
        <h2 className='bestservicesh'> <span className='mainwordabout2'>70+% signal strength </span> and reliability every time you connect</h2>
        <p className='bestservicesp'> Highly in-demand telecom features at budget-friendly rates, compared to other network providers in the market.</p>
      </div>
      {/* <!-- Right Column - Image --> */}
  
    </div>
  </div>






<Footer></Footer>

    </div>
  );
};

export default AboutUs;
