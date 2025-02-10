import React, { useEffect, useRef } from "react";
import { FiPhone, FiSend, FiMail, FiMapPin } from "react-icons/fi";
import { Fade } from "react-awesome-reveal";
import Navbar from "./Navbar";
import contactus from "./assets/contactus.jpg";
import gsap from "gsap";
import "./Style/Contactus.css";
import { InlineWidget } from "react-calendly";
import Footer from "./Footer";



function Contact() {
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
        <>
            <Navbar />
            <section className="py-5 text-center">
                <Fade direction="down" duration={1000}>
                    <h1 className="display-4 font-weight-bold headingofcont ">CONTACT US</h1>
                </Fade>

                <Fade direction="top" duration={1000}>

                <form action="https://formspree.io/f/xovjlwkk" method="POST" >

                    <div className="container d-flex justify-content-center flex-wrap callmaincontainer">
                        <div className="shadow-lg rounded bg-white p-4 d-flex flex-column flex-lg-row w-100 ">
                            {/* Image Container */}
                            <div className="image-container">
                                <img
                                    src={contactus}
                                    alt="Contact Us"
                                    className="img-fluid rounded"
                                    loading="lazy"
                                />
                                {/* Contact Info Overlay */}
                                <div className="contact-overlay">
                                    <div className="d-flex align-items-center mb-3">
                                        <FiPhone className="icon" />
                                        <h5 className="text-white ml-3 mb-0">+27 0769675814</h5>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <FiMail className="icon" />
                                        <h5 className="text-white ml-3 mb-0">icellmobileweb@gmail.com
                                        </h5>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <FiMapPin className="icon" />
                                        <h5 className="text-white ml-3 mb-0">Nic Peshawar, Pakistan</h5>
                                    </div>
                                </div>
                            </div>

                            {/* Form Section */}

                            <div className="w-100 w-lg-50 p-4">
                                <input type="text" className="form-control mb-3 input-hover" placeholder="Name"  name="name"/>
                                <input type="email" className="form-control mb-3 input-hover" placeholder="Email" name="email" />
                                <input type="text" className="form-control mb-3 input-hover" placeholder="Phone" name="phone"/>
                                <select className="form-control mb-3 input-hover" name="service">
                                    <option value="select" disabled>Select a service</option>
                                    <option value="web-development">Product </option>
                                    <option value="mobile-app">Order</option>
                                    <option value="web-development">Press </option>
                                    <option value="mobile-app">Other</option>


                                </select>
                                <textarea className="form-control mb-3 input-hover" placeholder="Message" rows="8" name="message"></textarea>

                                <button className="btn btn-dark w-100" type="submit">
                                    Send <FiSend className="ml-2" />
                                </button>
                            </div>

                        </div>
                    </div>
                    </form>

                </Fade>
            </section>


            <div className="text-center">
    <Fade direction="top" damping={500000} duration={2000}>
        <h1 className="display-4 font-weight-bold headingofcont">BOOK A MEETING</h1>
    </Fade>
    <Fade direction="top" damping={500000} duration={1000}>
        <div className="py-5">
            <div className="embed-responsive embed-responsive-16by9">
                <InlineWidget
                    url="https://cal.com/icellmobileweb-gmail.com/30min"
                    styles={{
                        height: "1000px",
                        width: "100%",
                    }}
                />
            </div>
        </div>
    </Fade>
</div>
<Footer></Footer>

        </>
    );
}

export default Contact;
