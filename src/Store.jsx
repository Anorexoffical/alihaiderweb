import React from 'react';
import './Style/Store.css'; // Custom CSS for styling
import Navbar from './Navbar';

const Store = () => {
  return (
    <>        <Navbar />

    <div className=" d-flex justify-content-center align-items-center">
      <div className="coming-soon text-center">
        <h1 className="display-1 fw-bold">Coming Soon</h1>
        <p className="lead">Our store is under construction. Stay tuned for something amazing!</p>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>

    </>
  );
};

export default Store;