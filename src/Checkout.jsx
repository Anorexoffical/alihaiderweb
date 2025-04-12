// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import payment from "./assets/payment.png";

// const Checkout = () => {

//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//   const tax = subtotal * 0.3;
//   const total = subtotal + tax;
//   const [countries, setCountries] = useState([]);
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [address, setAddress] = useState("");
//   // const [apartment, setApartment] = useState("");
//   // const [city, setCity] = useState("");
//   // const [province, setProvince] = useState("");
//   const [postalCode, setPostalCode] = useState("");
//   const [phoneNO, setPhoneNo] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState("");

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((response) => response.json())
//       .then((data) => {
//         const countryNames = data.map((country) => country.name.common).sort();
//         setCountries(countryNames);
//       })
//       .catch((error) => console.error("Error fetching countries:", error));
//   }, []);

//   const validateEmail = (e) => {
//     const emailValue = e.target.value;
//     setEmail(emailValue);
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     setEmailError(emailRegex.test(emailValue) ? "" : "Invalid email format");
//   };

//   //for snding to payment route
//   const handlePayment = async () => {
    
//     const newErrors = {};
//     if (!email) newErrors.email = "Email is required";
//     if (!firstName) newErrors.firstName = "First name is required";
//     if (!lastName) newErrors.lastName = "Last name is required";
//     if (!address) newErrors.address = "Address is required";
//     if (!postalCode) newErrors.postalCode = "Postal code is required";
//     if (!phoneNO) newErrors.phoneNO = "Phone number is required";
//     if (!selectedCountry) newErrors.selectedCountry = "Country selection is required";

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length > 0) {
//       return;
//     }

//     const orderDetails = {
//       firstName,
//       lastName,
//       email,
//       totalAmount: total.toFixed(2),

//       items: cart, // all cart items
//       address,
//       // apartment,
//       // city,
//       // province,
//       postalCode,
//       phoneNO,
//       selectedCountry,

//     };
  
//     try {
//       const response = await fetch("http://localhost:30001/payfast/initiate-payment", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderDetails),
//       });
  
//       const data = await response.json();
//       if (data.paymentUrl) {
//         window.location.href = data.paymentUrl; 
//       } else {
//         alert("Payment initiation failed!");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
  

//   return (
//     <div className="container my-5">
//       <div className="row">
//         {/* Left Side - Customer Details & Payment */}
//         <div className="col-lg-7 col-md-12">
//           <h2>Checkout</h2>
//           <form >
//             <h4>Contact Information</h4>
//             <input
//               type="email" required
//               className={`form-control mb-2 ${emailError ? "is-invalid" : ""}`}
//               placeholder="Email"
//               value={email}
//                 onChange={validateEmail}
//             />
//             {(emailError || errors.email) && <div className="text-danger">{emailError || errors.email}</div>}
          

//             <h4>Delivery Details</h4>
//             <div className="row">
//               <div className="col-md-12">
//               <select
//                     className={`form-control mb-3 ${errors.selectedCountry ? "is-invalid" : ""}`}
//                     value={selectedCountry}
//                     onChange={(e) => setSelectedCountry(e.target.value)}
//                   >
//                   <option>Select Country</option>
//                   {countries.map((country, index) => (
//                     <option key={index} value={country}>{country}</option>
//                   ))}
//                 </select>
                
//               </div>
//               <div className="col-md-6">
//                 <input type="text" className="form-control mb-3" placeholder="First Name" required
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)} />
//               </div>
//               <div className="col-md-6">
//                 <input type="text" className="form-control mb-3" placeholder="Last Name" 
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 />
//               </div>
//             </div>
//             <input type="text" className="form-control mb-3" placeholder="Address" required
//             value={address} onChange={(e) => setAddress(e.target.value)} 
//             />

//             {/* <input type="text" className="form-control mb-3" placeholder="Apartment, suite (optional)" 
//             value={apartment} onChange={(e) => setApartment(e.target.value)} 
//             /> */}
//             <input type="text" className="form-control mb-3" placeholder="Postal Code" 
//             value={postalCode} onChange={(e) => setPostalCode(e.target.value)} 
//             />

//             {/* <div className="row">
//               <div className="col-md-4">
//                 <input type="text" className="form-control mb-3" placeholder="City" 
//                 value={city} onChange={(e) => setCity(e.target.value)} 
//                 />
//               </div>
//               <div className="col-md-4">
//                 <input type="text" className="form-control mb-3" placeholder="Province" 
//                 value={province} onChange={(e) => setProvince(e.target.value)} 
//                 />
//               </div>
//               <div className="col-md-4">
//                 <input type="text" className="form-control mb-3" placeholder="Postal Code" 
//                 value={postalCode} onChange={(e) => setPostalCode(e.target.value)} 
//                 />
//               </div>

//             </div> */}

//             <input type="text" className="form-control mb-3" placeholder="Phone Number" required
//               value={phoneNO} onChange={(e) => setPhoneNo(e.target.value)} 
//             />
//           </form>
          
//           {/* Payment Section */}
//           <div className="card mt-4 p-3">
//             <h4>Payment</h4>
//             <p>All transactions are secure and encrypted.</p>
//             <div className="bg-white text-center">
//               <img src={payment} alt="Mastercard" className="img-fluid" />
//             </div>
//           </div>
//         </div>
        
//         {/* Right Side - Order Summary */}
//         <div className="col-lg-5 col-md-12 mt-4 mt-lg-0">
//           <div className="card p-4">
//             <h4 className="border-bottom pb-3">Order Summary</h4>
//             {cart.map((item, index) => (
//               <div key={index} className="d-flex justify-content-between align-items-center mb-3">
//                 <div className="d-flex align-items-center">
//                   <img src={item.image} alt={item.title} width="50" className="me-3 img-fluid" />
//                   <div>
//                     <h6 className="mb-0">{item.title}</h6>
//                     <small>Qty: {item.quantity}</small>
//                   </div>
//                 </div>
//                 <p className="mb-0">R {item.price * item.quantity}</p>
//               </div>
//             ))}
//             <hr />
//             <div className="d-flex justify-content-between">
//               <p>Subtotal ({totalItems} items)</p>
//               <p>R {subtotal.toFixed(2)}</p>
//             </div>
//             <div className="d-flex justify-content-between">
//               <p>Tax (3%)</p>
//               <p>R {tax.toFixed(2)}</p>
//             </div>
//             <hr />
//             <div className="d-flex justify-content-between fw-bold">
//               <p>Total</p>
//               <p>R {total.toFixed(2)}</p>
//             </div>
//             {/* <button className="callformeeting checkout ">Pay Now</button> */}
//             <button className="callformeeting checkout" onClick={handlePayment} >Pay Now</button>
//           </div>
          
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Checkout;


// //takrabal12@gmail.com 
// // firstname 
// // lastname 
// // anorix software house opposite custom house rawalpindi 
// // 15000
// // 03104146002



import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import payment from "./assets/payment.png";

const Checkout = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const tax = subtotal * 0.3;
  const total = subtotal + tax;

  const [countries, setCountries] = useState([]);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNO, setPhoneNo] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common).sort();
        setCountries(countryNames);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const validateEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(emailValue) ? "" : "Invalid email format");
  };

  const handlePayment = async () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!address) newErrors.address = "Address is required";
    if (!postalCode) newErrors.postalCode = "Postal code is required";
    if (!phoneNO) newErrors.phoneNO = "Phone number is required";
    if (!selectedCountry) newErrors.selectedCountry = "Country selection is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const orderDetails = {
      firstName,
      lastName,
      email,
      totalAmount: total.toFixed(2),
      items: cart,
      address,
      postalCode,
      phoneNO,
      selectedCountry,
    };

    try {
      const response = await fetch("https://icellmobile.co.za/api/payfast/initiate-payment", {
      // const response = await fetch("http://localhost:30001/payfast/initiate-payment", {


        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderDetails),
      });

      const data = await response.json();
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        alert("Payment initiation failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-7 col-md-12">
          <h2>Checkout</h2>
          <form>
            <h4>Contact Information</h4>
            <input
              type="email"
              required
              className={`form-control mb-2 ${emailError || errors.email ? "is-invalid" : ""}`}
              placeholder="Email"
              value={email}
              onChange={validateEmail}
            />
            {(emailError || errors.email) && <div className="text-danger">{emailError || errors.email}</div>}

            <h4>Delivery Details</h4>
            <div className="row">
              <div className="col-md-12">
                  <select
                    className={`form-control mb-3 ${errors.selectedCountry ? "is-invalid" : ""}`}
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                  <option>Select Country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                  ))}
                </select>
                {errors.selectedCountry && <div className="text-danger">{errors.selectedCountry}</div>}
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className={`form-control mb-3 ${errors.firstName ? "is-invalid" : ""}`}
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className={`form-control mb-3 ${errors.lastName ? "is-invalid" : ""}`}
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
              </div>
            </div>
            <input
              type="text"
              className={`form-control mb-3 ${errors.address ? "is-invalid" : ""}`}
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && <div className="text-danger">{errors.address}</div>}

            <input
              type="text"
              className={`form-control mb-3 ${errors.postalCode ? "is-invalid" : ""}`}
              placeholder="Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            {errors.postalCode && <div className="text-danger">{errors.postalCode}</div>}

            <input
              type="text"
              className={`form-control mb-3 ${errors.phoneNO ? "is-invalid" : ""}`}
              placeholder="Phone Number"
              value={phoneNO}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
            {errors.phoneNO && <div className="text-danger">{errors.phoneNO}</div>}
          </form>

          <div className="card mt-4 p-3">
            <h4>Payment</h4>
            <p>All transactions are secure and encrypted.</p>
            <div className="bg-white text-center">
              <img src={payment} alt="Mastercard" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="col-lg-5 col-md-12 mt-4 mt-lg-0">
          <div className="card p-4">
            <h4 className="border-bottom pb-3">Order Summary</h4>
            {cart.map((item, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                  <img src={item.image} alt={item.title} width="50" className="me-3 img-fluid" />
                  <div>
                    <h6 className="mb-0">{item.title}</h6>
                    <small>Qty: {item.quantity}</small>
                  </div>
                </div>
                <p className="mb-0">R {item.price * item.quantity}</p>
              </div>
            ))}
            <hr />
            <div className="d-flex justify-content-between">
              <p>Subtotal ({totalItems} items)</p>
              <p>R {subtotal.toFixed(2)}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Tax (3%)</p>
              <p>R {tax.toFixed(2)}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <p>Total</p>
              <p>R {total.toFixed(2)}</p>
            </div>
            <button className="callformeeting checkout" onClick={handlePayment}>Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
