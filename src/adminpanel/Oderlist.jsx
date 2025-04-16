import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
import "../Style/Blogpost.css";
import { useNavigate } from "react-router-dom";

function Orderlist() {
  const [orders, setOrders] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const navigate = useNavigate();

  // Check admin session on component mount
  useEffect(() => {
    const checkAdminSession = () => {
      const adminSession = sessionStorage.getItem("adminSession");
      if (!adminSession) {
        navigate("/login"); // Redirect to login if no session
      }
    };

    checkAdminSession();
    fetchOrders();
  }, [navigate]);

  const fetchOrders = () => {
    axios.get("https://icellmobile.co.za/api/orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  };

  const updateDeliveryStatus = (orderId) => {
    axios
      .put(`https://icellmobile.co.za/api/orderstatusupdate/${orderId}/deliver`)
      .then((res) => {
        fetchOrders(); // refresh the list after update
      })
      .catch((err) => {
        console.error("Failed to update delivery status", err);
      });
  };

  const filterByDate = () => {
    if (!fromDate || !toDate) {
      alert("Please select both From and To dates.");
      return;
    }
  
    axios
      .get(`https://icellmobile.co.za/api/orders/filterbydate?fromDate=${fromDate}&toDate=${toDate}`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("Error filtering orders by date:", err);
      });
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminSession");
    navigate("/login");
  };

  return (
    <>
      <AdminNavbar onLogout={handleLogout} />
      <div className="row mainbtns">
        <div className="col-6 col-sm-6 col-md-6">
          <input
            type="date"
            className="dates"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            placeholder="From Date"
          />
          <input
            type="date"
            className="dates"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            placeholder="To Date"
          />
          <button className="dates-button" onClick={filterByDate}>
            Search
          </button>        
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
                <th>Date</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Country</th>
                <th>Total</th>
                <th>Items</th>
                <th>Delivery Status</th>
                <th className="text-center">Button</th>
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
                  <td>
                    {new Date(order.createdAt).toISOString().replace("T", " ").substring(0, 19)}
                  </td>
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
                  <td>{order.deliveryStatus}</td>
                  <td className="text-center">
                    {order.deliveryStatus !== "Delivered" ? (
                      <button
                        className="btn deletebtn btn-sm mx-1"
                        onClick={() => updateDeliveryStatus(order._id)}
                      >
                        Update Delivery Status
                      </button>
                    ) : (
                      <span className="text-success">Delivered</span>
                    )}
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