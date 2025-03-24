

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import { Fade } from "react-awesome-reveal";

gsap.registerPlugin(ScrollTrigger);

import "./Style/Topupdeal.css";
import Footer from "./Footer.jsx"


const Topupdeal = () => {

    useEffect(() => {
        const panels = document.querySelectorAll(".panel");
      
        panels.forEach((panel) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: panel,
              scrub: true,
              markers: false, // Disable the markers
              start: "top bottom",
              end: "top top",
            },
          });
      
          tl.fromTo(
            panel,
            { scale: 1, opacity: 0.7, ease: "none" },
            { scale: 0.9, opacity: 1, ease: "none" }
          ).from(
            ".line-2",
            { scaleX: 0, ease: "none", transformOrigin: "left top" },
            0
          );
        });
      }, []);









      

  return (
<>
    <div className="app">
    <Navbar></Navbar>
      <div className="description blue">

      <Fade direction="down "   damping={500000} duration={1000} >
         <h2 className="head text-5xl ">Quick Data & Airtime Plans</h2>
      </Fade>

      <Fade direction="down "   damping={500000} duration={1000} >
      <p>
      Get your desired package instantly using our above easy-to-use filtering package option. All the packages are designed to be user-friendly and budget-conscious. Whether you are a casual browser or a heavy data user, we have a plan for you
      </p>

      </Fade>
      <h3>Here's how you can subscribe:</h3>

      <Fade direction="up"   damping={500} duration={1000} >
        <ul>
          <li>•⁠  ⁠Install our icellmobileapp from the Play Store or App Store.     </li>
          <li>•⁠  Navigate to the bestDeals page within our app.          </li>
          <li>•⁠   ⁠⁠Select your best fit package and subscribe it.          </li>

        </ul>

</Fade>



        
      </div>
      <div className="panels-wrapper">
        <section className="panel red">
            <h1>Never Expires packages </h1>
        <p><span className="priceshow">220MB-11GB</span>/Never Expire</p>
        <p>Dial *136# from your phone and follow the prompts.</p>
        <hr className="line" ></hr>
        <ul>
            <li>220 MB Data R19 </li>
            <li>330 MB Data R29 </li>
            <li>550 MB Data R39 </li>
            <li>1 GB Data R49 </li>
            <li>2 GB Data R79 </li>
            <li>3 GB Data R99 </li>
            <li>7.5 GB Data R189 </li>

            

        </ul>
          <button className="buttonstart">Subscribe from our APP</button>
        </section>


        <section className="panel orange">
          <h1>30 days packages</h1>
          <p><span className="priceshow">1GB-50GB</span>/30 days</p>
        <p>Dial *136# from your phone and follow the prompts.</p>
        <hr className="line" ></hr>
        <ul>
        <li>1 GB Data R42 </li>
            <li>5 GB Data R129 </li>
            <li>6 GB Data R159 </li>
            <li>11 GB Data R199 </li>
            <li>15 GB Data R239 </li>
            <li>25 GB Data R309 </li>
            <li>50 GB Data R519 </li>

            

        </ul>
          <button className="buttonstart" >Subscribe from our APP </button>
        </section>



        <section className="panel purple">

        <h1>1 days packages</h1>
        <p><span className="priceshow">500 MB-1GB</span>/1 days</p>
        <p>Dial *136# from your phone and follow the prompts.</p>
        <hr className="line" ></hr>
        <ul>
            <li>500 MB Data R10 </li>
            <li>1 GB Data R19 </li>

         

            

        </ul>
          <button className="buttonstart day1packg1">Subscribe from our APP</button>
        </section>
        <section className="panel gray">
       




        <h1>Other</h1>
        <p><span className="priceshow">R0.69</span>P/min billed per second</p>
        <p><span className="priceshow">R0.25</span>P/sms</p>
        <p>Dial *136# from your phone and follow the prompts.</p>
        <hr className="line" ></hr>
        <ul>
        <li>Voice rate Only R0.69 P/min billed per secon</li>
        <li>SMS rate /Only R0.25 P/SMS </li>

            

        </ul>
          <button className="buttonstart day1packg" >Subscribe from our APP</button>
        </section>
      </div>

    </div>



<Footer></Footer>



    </>

  );
};

export default Topupdeal;
