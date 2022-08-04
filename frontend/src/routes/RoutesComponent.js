import React from "react";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "../pages/ForgotPassword";
import Register from "../pages/Register";
import Login from "../pages/Login";
import LandingPage from "../pages/LandingPage";
import FAQs from "../pages/FAQs";
import AboutUs from "../pages/AboutUs";
import Transaction from "../pages/transfer-flow/Transaction";
import SendMoney from "../pages/transfer-flow/sendmoney/SendMoney";
import RequestMoney from "../pages/transfer-flow/requestmoney/RequestMoney";
import SendMoneyConfirm from "../pages/transfer-flow/sendmoney/SendMoneyConfirm";
import SendConfirmation from "../components/transaction-flow/SendConfirmation";
import RequestConfirmation from "../components/transaction-flow/RequestConfirmation";
import Transfer from "../components/transaction-flow/Transfer";
function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/transfer" element={<Transaction />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="/sendmoney" element={<SendMoney />} />
        <Route path="/requestmoney" element={<RequestMoney />} />
        <Route path="/sendmoney/confirm" element={<SendMoneyConfirm />} />
        <Route path="/transferflow" element={<Transfer />} />
        <Route
          path="/sendmoney/confirm/sendconfirm"
          element={<SendConfirmation />}
        />
        <Route path="/requestmoney/confirm" element={<RequestConfirmation />} />
      </Routes>
    </>
  );
}

export default RoutesComponent;
