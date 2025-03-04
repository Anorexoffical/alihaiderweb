import React, { useRef } from 'react';
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


import gsap from "gsap";
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
 

const AboutUs = () => {


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


  
  return (
    <div>
      {/* Hero Section */}
      <div className="backgroudimag ">
        <Navbar />

        <div className="text-container">
        <Fade direction="down" duration={1500}>

          <h1 className="centered-text">About Us</h1>
          </Fade>

        </div>
      </div>

      <div className="content-container px-4 py-4 ">
        {/* Section Heading */}
        <div className="text-center mb-4">

          <h2 className="text-danger text-uppercase">Our Story</h2>
          <h1 className="main-title">
          Our Journey: Empowering the Future Through <span className="maintex">Digital Transformation</span>          </h1>
        </div>

        {/* Main Content */}
        <div className="row g-4">
          {/* Image Section */}
          <div className="col-lg-6">
          <Fade direction="left" duration={1000}>

            <img
            src={ourstroy}
              alt="Creative Design"
              className="img-fluid rounded shadow"
            />

</Fade>

          </div>

          {/* Info Section */}
          <div className="col-lg-6">
          <Fade direction="right" duration={1500}>

            <p className="text-dark mb-4 text-justify">
            Founded in 2024, iCell Mobile set out to transform mobile communication—making it affordable, reliable, and accessible for everyone. Our name, "iCell," symbolizes the strength of connectivity, empowering users with control over their communication. We believe staying connected is not a privilege but a fundamental right. With iCell Mobile, you enjoy budget-friendly airtime, cost-effective data, and cutting-edge technology designed to keep you ahead.            </p>

            {/* Stats Section */}
            <div className="row row-cols-2 mb-4">
              {[
                { count: '5k+', label: 'Completed Projects' },
                { count: '3k+', label: 'Satisfied Customers' },
                { count: '1+', label: 'Years Of Mastery' },
                { count: '4+', label: 'Worldwide Honors' },
              ].map((stat, index) => (
                <div key={index} className="col text-center">
                  <h3 className="fw-bold text-black">{stat.count}</h3>
                  <p className="text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            </Fade>

          </div>
          
        </div>
      </div>

      {/* CEO Message */}
      <div className="row g-4  py-5 ">
        {/* Text Section */}
        <div className="col-lg-5 col-md-5 col-sm-12">
        <Fade direction="left" duration={1500}>

          <h1 className="ceoheading"> <span className='mainwordabout2'>Our Vision:</span>Connecting the Unconnected </h1>
          <p className="ceoparagraph">
          At iCell Mobile, our vision is to become the leading force in mobile services, bridging gaps and transforming lives. We are committed to expanding our network coverage, pioneering new solutions tailored to our customers’ needs, and establishing iCell Mobile as a household name synonymous with trust and innovation in telecommunications.</p>
        </Fade>
        </div>

        {/* Image Section */}
        <div className="col-lg-6 col-md-6 col-sm-12">
        <Fade direction="right" duration={1500}>

          <img
            src={mission}
            alt="Creative Design"
            className="img-fluid rounded shadow"
            width={800}

          />

          </Fade>
        </div>
      </div>






  {/* CEO Message */}
  <div className="row g-4  py-5 ">


       {/* Image Section */}
       <div className="col-lg-6 col-sm-12 col-md-6 ">

       <Fade direction="left" duration={1500}>

          <img
            src={vision}
            alt="Creative Design"
            className="img-fluid rounded shadow"
          />
          </Fade>
        </div>

        {/* Text Section */}

        <div className="col-lg-6 col-sm-12 col-md-6">
        <Fade direction="right" duration={1500}>

          <h1 className="ceoheading"> <span className='mainwordabout2'>Our Mission:</span> Connecting People, Empowering Lives</h1>
          <p className="ceoparagraph">
          At iCell Mobile, we strive to make connectivity seamless, affordable, and accessible for everyone. Our commitment lies in providing innovative mobile solutions for a better digital experience, continuously evolving technology to keep you ahead, and ensuring transparency, trust, and ethical practices. With a customer-first approach, we prioritize top-tier service and reliability, keeping communities connected and empowered—because communication should be for everyone.
     </p>
     
     </Fade>
     </div>
      </div>




  <div className="container">
    <div className="row align-items-center">
      {/* <!-- Left Column - Text --> */}
      <div className="col-md-6 col-xl-6 col-sm-12 bestservices">
      <Fade direction="down" duration={1500}>

        <h2 className='bestservicesh'>Unmatched Network Performance at  <span className='mainwordabout'>Market-Leading Prices </span></h2>
        <p className='bestservicesp'> 
        We’ve optimized our backend infrastructure to ensure our SIM cards and data services deliver seamless connectivity, lightning-fast speeds, and unbeatable reliability. Along with top-tier performance, we offer highly competitive pricing, giving you the best value on airtime, data, and mobile services. Stay connected without overspending—because premium quality shouldn’t come at a premium cost.
        </p>

        </Fade>
      </div>
      {/* <!-- Right Column - Image --> */}
      <div className="col-md-6 col-xl-6 col-sm-12">
      <Fade direction="top" duration={1500}>

        <img src={cheappackg} className="img-fluid" alt="Responsive Image"/>

        </Fade>
      </div>

    
    </div>
  </div>



  <div className="container">
    <div className="row align-items-center">
      {/* <!-- Left Column - Text --> */}


      <div className="col-md-6 col-xl-6 col-sm-12">
      <Fade direction="top" duration={1500}>

        <img src={bestpackeg2} className="img-fluid" alt="Responsive Image"/>
        </Fade>
      </div>


      <div className="col-md-6 col-xl-6 col-sm-12 bestservices2">
      <Fade direction="down" duration={1500}>

        <h2 className='bestservicesh'> <span className='mainwordabout2'>70+% signal strength </span> & Affordable Connectivity</h2>
        <p className='bestservicesp'> Enjoy 70%+ signal strength and reliability every time you connect. Get highly in-demand telecom features at budget-friendly rates, offering better value compared to other network providers in the market.</p>
     </Fade>
     </div>
      {/* <!-- Right Column - Image --> */}
  
    </div>
  </div>






<Footer></Footer>

    </div>
  );
};

export default AboutUs;
