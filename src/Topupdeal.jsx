import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { Container, Row, Col, Dropdown, Card } from "react-bootstrap";
import "./Style/Topupdeal.css";
import Footer from "./Footer.jsx"
import neverexp1 from "./assets/neverexp1.webp"
import neverexp2 from "./assets/neverexp2.webp"
import neverexp3 from "./assets/neverexp3.webp"
import neverexp4 from "./assets/neverexp4.webp"
import neverexp5 from "./assets/neverexp5.webp"
import neverexp6 from "./assets/neverexp6.webp"
import neverexp7 from "./assets/neverexp7.webp"
import neverexp8 from "./assets/neverexp8.webp"
import neverexp9 from "./assets/neverexp9.webp"
import neverexp10 from "./assets/neverexp10.webp"
import neverexp11 from "./assets/neverexp11.webp"
import neverexp12 from "./assets/neverexp12.webp"
import neverexp13 from "./assets/neverexp13.webp"
import neverexp14 from "./assets/neverexp14.webp"
import neverexp15 from "./assets/neverexp15.webp"
import neverexp16 from "./assets/neverexp16.webp"
import neverexp17 from "./assets/neverexp17.webp"
import neverexp18 from "./assets/neverexp18.webp"
import neverexp19 from "./assets/neverexp19.webp"
import neverexp20 from "./assets/neverexp20.webp"
import neverexp21 from "./assets/neverexp21.webp"

import neverexp22 from "./assets/neverexp22.webp"

import neverexp23 from "./assets/neverexp23.webp"

import neverexp24 from "./assets/neverexp24.webp"
import neverexp25 from "./assets/neverexp25.webp"




const dataBundles = [
    { id: 1, category: "nonexpire", image: neverexp1, text: "220 MB Data", price: "R19" },
    { id: 2, category: "nonexpire", image: neverexp2, text: "330 MB Data", price: "R29" },
    { id: 3, category: "nonexpire", image: neverexp3, text: "550 MB Data", price: "R39" },
    { id: 4, category: "nonexpire", image: neverexp4, text: "1 GB Data", price: "R49" },
    { id: 5, category: "nonexpire", image: neverexp5, text: "2 GB Data", price: "R79" },
    { id: 6, category: "nonexpire", image: neverexp6, text: "3 GB Data", price: "R99" },
    { id: 7, category: "nonexpire", image: neverexp7, text: "7.5 GB Data", price: "R189" },
    { id: 8, category: "nonexpire", image: neverexp8, text: "11 GB Data", price: "R239" },
    { id: 9, category: "30day", image: neverexp9, text: "1 GB Data", price: "R42" },
    { id: 10, category: "30day", image: neverexp10, text: "5 GB Data", price: "R129" },
    { id: 11, category: "30day", image: neverexp11, text: "6 GB Data", price: "R159" },
    { id: 12, category: "30day", image: neverexp12, text: "11 GB Data", price: "R5199" },
    { id: 13, category: "30day", image: neverexp13, text: "15 MB Data", price: "R239" },
    { id: 14, category: "30day", image: neverexp14, text: "25 GB Data", price: "R309" },
    { id: 15, category: "30day", image: neverexp15, text: "50 GB Data", price: "R519" },
    { id: 16, category: "7day", image: neverexp16, text: "250 MB Data", price: "R12" },
    { id: 17, category: "7day", image: neverexp17, text: "1 GB Data", price: "R34" },
    { id: 18, category: "7day", image: neverexp18, text: "2 GB Data", price: "R64" },
    { id: 19, category: "7day", image: neverexp19, text: "3 GB Data", price: "R89" },
    { id: 20, category: "7day", image: neverexp20, text: "4 GB Data", price: "R109" },

    { id: 21, category: "1day", image: neverexp22, text: "1 GB Data", price: "R19" },
    { id: 22, category: "1day", image: neverexp21, text: "500 MB Data", price: "R10" },
    
    { id: 23, category: "nonexpire", image: neverexp23, text: "1 GB Data", price: "R49" },


    { id: 24, category: "other", image: neverexp24, text: "voice rate ", price: "R0.69" },
    { id: 25, category: "other", image: neverexp25, text: "SMS rate ", price: "R0.25" },
   

  ];



const Topupdeal = () => {

    const [filter, setFilter] = useState("all");

  const filteredBundles =
    filter === "all" ? dataBundles : dataBundles.filter(bundle => bundle.category === filter);

  return (
    <>
      {/* Main Blog Heading Section */}
      <div className="topupdealcontainer">
      <h1 style={{ paddingTop: "1px" }}></h1>

        <Navbar />
        <div className="text-center text-white overlay">
          <h1 className="topupdealheading">
          Experience <span style={{color:"#31bd1c"}}>5G Connectivity</span>  Nationwide!
          </h1>
          
        </div>
      </div>

      {/* Why Become Section */}
      <div className="py-5 bg-light">
        <div className="container">

        <Container className="my-4">
      <h1 className="text-center">Affordable Data Bundles</h1>
      <p className="text-center">
      We've got the most affordable data and voice top-up prices on the market! Starting from just <span className="impword"> R1 for 30MB, and up to R349 for 25GB!</span> Choose from expiring data bundles or NEVER-expiring bundles—something for everyone. Top-up anytime by tapping the "Top-Up" button on the app's home screen or by <span className="impword">*136# </span>on your device!
      </p>

      <div className="d-flex justify-content-end mb-3">
        <Dropdown onSelect={setFilter}>
          <Dropdown.Toggle className="filtercolor" id="dropdown-basic">
            Filter by validity
          </Dropdown.Toggle>

          <Dropdown.Menu  className="filtercolor">
            <Dropdown.Item eventKey="all">All</Dropdown.Item>
            <Dropdown.Item eventKey="1day">1 Day</Dropdown.Item>
            <Dropdown.Item eventKey="7day">7 Day</Dropdown.Item>
            <Dropdown.Item eventKey="30day">30 Day</Dropdown.Item>
            <Dropdown.Item eventKey="nonexpire">Never Expires</Dropdown.Item>
            <Dropdown.Item eventKey="other">Other</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Row>
        {filteredBundles.map(bundle => (
          <Col key={bundle.id} xs={6} md={4} lg={3} className="mb-4">
            <Card className="text-center">
              <Card.Img variant="top" src={bundle.image} alt={bundle.text} n/>
              <Card.Body>
                <Card.Title>{bundle.text}</Card.Title>
                <Card.Text className="priceclr fw-bold">{bundle.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    
    </div></div>
    <Footer></Footer>
    </>
  );
};

export default Topupdeal;
