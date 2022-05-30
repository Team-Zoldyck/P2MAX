import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../authentication/Login";
import LandingPage from "../pages/LandingPage";
import Transaction from "../pages/transfer/Transaction";
import Support from "../pages/Support";
import SendMoney from "../pages/transfer/sendmoney/SendMoney";
import RequestMoney from "../pages/transfer/requestmoney/RequestMoney";

function RoutesComponent() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/transfers" element={<Transaction />} />
        <Route path="/support" element={<Support />} />
        <Route path="/sendmoney" element={<SendMoney />} />
        <Route path="/requestmoney" element={<RequestMoney />} />
      </Routes>
    </>
  );
}

export default RoutesComponent;
