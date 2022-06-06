import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import LandingPage from "../pages/LandingPage";
import FAQs from "../pages/FAQs";

function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="faqs" element={<FAQs />} />
      </Routes>
    </>
  );
}

export default RoutesComponent;
