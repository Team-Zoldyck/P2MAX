import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Transaction from "../pages/transfer/Transaction";
import Support from "../pages/Support";
import SendMoney from "../pages/transfer/sendmoney/SendMoney";
import RequestMoney from "../pages/transfer/requestmoney/RequestMoney";
import FAQsCard from "../components/FAQs";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";

function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/transfers" element={<Transaction />} />
        <Route path="/support" element={<Support />} />
        <Route path="/faqs" element={<FAQsCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sendmoney" element={<SendMoney />} />
        <Route path="/requestmoney" element={<RequestMoney />} />
      </Routes>
    </>
  );
}

export default RoutesComponent;
