import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import LandingPage from "../pages/LandingPage";
import FAQs from "../pages/FAQs";
import Register from "../pages/Register";
import RegistrationStep from "../pages/RegistrationStep";

import ForgotPassword from "../pages/ForgotPassword";

function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="step1" element={<RegistrationStep />} />
        <Route path="FAQs" element={<FAQs />} />
        <Route path="Forgot" element={<ForgotPassword />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default RoutesComponent;
