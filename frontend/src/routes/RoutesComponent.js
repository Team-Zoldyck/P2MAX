import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import LandingPage from "../pages/LandingPage";
import FAQs from "../pages/FAQs";
import AboutUs from "../pages/AboutUs";
import Transaction from "../pages/transfer-flow/Transaction";
import SendMoney from "../pages/transfer-flow/sendmoney/SendMoney";
import RequestMoney from "../pages/transfer-flow/requestmoney/RequestMoney";

function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<LandingPage />} />
        <Route path="transfer" element={<Transaction />} />
        <Route path="login" element={<Login />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="/sendmoney" element={<SendMoney />} />
        <Route path="/requestmoney" element={<RequestMoney />} />
      </Routes>
    </>
  );
}

export default RoutesComponent;
