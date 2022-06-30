import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import LandingPage from "../pages/LandingPage";
import FAQs from "../pages/FAQs";
import AboutUs from "../pages/AboutUs";

function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default RoutesComponent;
