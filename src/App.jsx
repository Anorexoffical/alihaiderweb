import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import NotFound from './NotFound';
import './App.css';

// Lazy load components

const Contactus = lazy(() => import('./Contactus'));
const Footer = lazy(() => import('./Footer'));
const Support = lazy(() => import('./adminpanel/Support'));
const Power2Sell = lazy(() => import('./Power2Sell'));
const Getyoursim = lazy(() => import('./Getyoursim'));
const Topupdeal = lazy(() => import('./Topupdeal'));
const Aboutus = lazy(() => import('./Aboutus'));
const ESIM = lazy(() => import('./ESIM'));
const Productlist = lazy(() => import('./Productlist'));
const Mainpage = lazy(() => import('./Mainpage'));
const Checkout = lazy(() => import('./Checkout'));
const Store = lazy(() => import('./Store'));

const Login = lazy(() => import('./Login '));

// PrivateRoute componentconst Blogspost = lazy(() => import('./adminpanel/BlogPost'));
const BlogPost = lazy(() => import('./adminpanel/BlogPost'));
const BlogTable = lazy(() => import('./adminpanel/BlogTable'));
const EditBlogPost = lazy(() => import('./adminpanel/EditBlogPost'));
const BlogDetail = lazy(() => import('./adminpanel/BlogDetail'));
const Oderlist = lazy(() => import('./adminpanel/Oderlist'));


const PrivateRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('userName'); // Check session storage
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="skeleton-container">
    <Skeleton height={40} width="80%" />
    <Skeleton height={20} width="60%" style={{ marginTop: 10 }} />
    <Skeleton height={300} width="90%" style={{ marginTop: 20 }} />
  </div>
);

function App() {
  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log("Item added to cart:", item);
  };

  return (
    <Router>
      <Suspense fallback={<SkeletonLoader />}>
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
          <Route path="/Store" element={<Store />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/BlogPost" element={<BlogPost />} />
          

          {/* Pass addToCart as a prop to ESIM */}
          <Route path="/ESIM" element={<ESIM addToCart={addToCart} />} />

          <Route path="/Login" element={<Login />} />

          {/* Private Routes */}
          <Route path="/BlogPost" element={<PrivateRoute><BlogPost /></PrivateRoute>} /> 
           <Route path="/Blogtable" element={<PrivateRoute><BlogTable /></PrivateRoute>} />
          <Route path="/EditBlogPost/:id" element={<PrivateRoute><EditBlogPost /></PrivateRoute>} />
          <Route path="/Oderlist" element={<PrivateRoute><EditBlogPost /></PrivateRoute>} />

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
