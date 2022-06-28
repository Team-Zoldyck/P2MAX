import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import OneMoreStep from "../pages/OneMoreStep";
import LandingPage from "../pages/LandingPage";
import FAQs from "../pages/FAQs";

function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="onemorestep" element={<OneMoreStep />} />
        <Route path="FAQs" element={<FAQs />} />
      </Routes>
    </>
  );
}

export default RoutesComponent;
