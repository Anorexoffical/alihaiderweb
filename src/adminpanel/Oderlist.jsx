// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import AdminNavbar from "./AdminNavbar";
// import "../Style/Blogpost.css"

// function Orderlist() {

// const orders = [
//     {
//       _id: "1",
//       firstName: "firstname4",
//       lastName: "lastname3",
//       orderID: "OID-1740423286984-316f",
//       paymentid: "pay-1233213",
//       email: "takraball2@gmail.com",
//       address: "anorex software house opposite custom ",
//       postalCode: "15000",
//       phoneNO: "03104146002",
//       country: "South Africa",
//       totalAmount: 922.08,
//       payFastTax: -21.21,
//       totalAmountAfterTax: 900.87,
//       pf_payment_id: "2418380",
//       items: [
//         { title: "eSIM with 3GB Data 7Days", price: 9, quantity: 1 },
//         { title: "eSIM with 10GB Data 7Days", price: 99, quantity: 2 },
//         { title: "eSIM with 5GB Data 30Days", price: 50, quantity: 1 },
//         { title: "eSIM with 20GB Data 30Days", price: 150, quantity: 1 },
//       ]
//     }
//   ];

//   return (
//     <>
//       <AdminNavbar />

//       <div className="row mainbtns">
//         <div className="col-6 col-sm-6 col-md-6">
//           <input type="date" className="dates" placeholder="From Date" />
//           <input type="date" className="dates" placeholder="To Date"/>
//           <button className="dates-button">Search</button>

//         </div>
//         </div>

//       <div className="container-fluid mt-4">
//       <div className="table-responsive">
//         <table className="table table-bordered table-hover">
//           <thead className="thead-light">
//             <tr>
//               <th>date</th>
//               <th>Order ID</th>
//               <th>payment-ID</th>
//               <th>Customer</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Address</th>
//               <th>Country</th>
//               <th>Total</th>
//               <th>Items (Product - Qty)</th>
//               <th className="text-center">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order, index) => (
//               <tr key={order._id}>
//                 <td>{index + 1}</td>
//                 <td>{order.orderID}</td>
//                 <td>{order.paymentid}</td>
//                 <td>{order.firstName} {order.lastName}</td>
//                 <td>{order.email}</td>
//                 <td>{order.phoneNO}</td>
//                 <td>{order.address}</td>
//                 <td>{order.country}</td>
//                 <td>${order.totalAmountAfterTax}</td>
//                 <td>
//                   {order.items.map((item, i) => (
//                     <div key={i}>
//                       <strong>{item.title}</strong> - Qty: {item.quantity}
//                     </div>
//                   ))}
//                 </td>
//                 <td className="text-center">
      
//                   <button
//                     className="btn deletebtn btn-sm mx-1"
//                   >
//                     Padding
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Orderlist;

import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
import "../Style/Blogpost.css";

function Orderlist() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:30001/orders") 
    // "https://icellmobile.co.za/api/orders" // wisal use this before deploying
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="row mainbtns">
        <div className="col-6 col-sm-6 col-md-6">
          <input type="date" className="dates" placeholder="From Date" />
          <input type="date" className="dates" placeholder="To Date" />
          <button className="dates-button">Search</button>
        </div>
      </div>

      <div className="container-fluid mt-4">
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>Order ID</th>
                <th>Payment ID</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Country</th>
                <th>Total</th>
                <th>Items</th>
                <th className="text-center">Delivery Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>{order.orderID}</td>
                  <td>{order.pf_payment_id}</td>
                  <td>{order.firstName} {order.lastName}</td>
                  <td>{order.email}</td>
                  <td>{order.phoneNO}</td>
                  <td>{order.address}</td>
                  <td>{order.country}</td>
                  <td>R{order.totalAmountAfterTax}</td>
                  <td>
                    {order.items.map((item, i) => (
                      <div key={i}>
                        {item.title} - Qty: {item.quantity}
                      </div>
                    ))}
                  </td>
                  {/* <td className="text-center">
                    <span className="badge badge-success">Paid</span>
                  </td> */}
                    <td className="text-center">
                      <button className="btn deletebtn btn-sm mx-1">
                         Pending
                      </button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Orderlist;

