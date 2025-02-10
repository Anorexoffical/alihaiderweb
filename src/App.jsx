import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Mainpage from './Mainpage'; // Default landing page

// Lazy load components
const Navbar = lazy(() => import('./Navbar'));
const Contactus = lazy(() => import('./Contactus'));
const Footer = lazy(() => import('./Footer'));
const Support = lazy(() => import('./adminpanel/Support'));
const Power2Sell = lazy(() => import('./Power2Sell'));
const Getyoursim = lazy(() => import('./Getyoursim'));
const Topupdeal = lazy(() => import('./Topupdeal'));
const Aboutus = lazy(() => import('./Aboutus'));
const ESIM = lazy(() => import('./ESIM'));
const Productlist = lazy(() => import('./Productlist'));

const Login = lazy(() => import('./Login '));

// PrivateRoute componentconst Blogspost = lazy(() => import('./adminpanel/BlogPost'));
const BlogPost = lazy(() => import('./adminpanel/BlogPost'));
const Blogtable = lazy(() => import('./adminpanel/BlogTable'));
const EditBlogPost = lazy(() => import('./adminpanel/EditBlogPost'));
const BlogDetail = lazy(() => import('./adminpanel/BlogDetail'));



const PrivateRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('userName'); // Check session storage
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {

  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log("Item added to cart:", item);
  };

  
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Mainpage />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Power2Sell" element={<Power2Sell />} />
          <Route path="/Topupdeal" element={<Topupdeal />} />
          <Route path="/Getyoursim" element={<Getyoursim />} />
         <Route path="/BlogDetail/:id" element={<BlogDetail />} />
         <Route path="/Aboutus" element={<Aboutus />} />
         <Route path="/Productlist" element={<Productlist />} />

        {/* Pass addToCart as a prop to ESIM */}
        <Route path="/ESIM" element={<ESIM addToCart={addToCart} />} />
         
         
          <Route path="/Login" element={<Login />} />

          {/* Private Routes */}
          <Route path="/BlogPost" element={<PrivateRoute><BlogPost /></PrivateRoute>} />
          <Route path="/Blogtable" element={<PrivateRoute><Blogtable /></PrivateRoute>} />
          <Route path="/EditBlogPost/:id" element={<PrivateRoute><EditBlogPost /></PrivateRoute>} />

          
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
