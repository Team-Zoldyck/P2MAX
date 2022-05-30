import React from "react";

const Button = ({ type = "submit", className = "", children, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        `w-full  mb-10 items-center px-4 py-2 bg-blue border border-transparent rounded-md text-xs text-white uppercase` +
        className
      }
    >
      {children}
    </button>
  );
};

export default Button;
