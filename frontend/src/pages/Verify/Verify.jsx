import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url, token } = useContext(StoreContext); // Extract token from context
  const navigate = useNavigate();

  console.log("Token from StoreContext in Verify.jsx:", token); // Add this line

  const verifyPayment = async () => {
    console.log("Token from StoreContext in Verify.jsx before API call:", token);

    if (!token) {
      console.log("No token found");
      return;
    }

    const response = await axios.post(
      `${url}/api/order/verify`,
      { success, orderId },
      { headers: { token } } // Ensure token is sent here
    );

    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    console.log("Success Query Parameter:", success);
    console.log("Order ID Query Parameter:", orderId);
    console.log("Token from StoreContext in Verify.jsx:", token); // Add this line
    if (token) {
      verifyPayment();
    } else {
      console.log("Token not available in context");
    }
  }, [token, success, orderId, navigate]);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
