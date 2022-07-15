import React from "react";

const Button = ({
  type = "submit",
  className = "",
  children,
  onClick,
  color,
}) => {
  const backgroundColor = {
    primary: {
      bColor: "bg-[#2B54E4]",
      text: "text-white",
      border: "border-0",
    },
    secondary: {
      bColor: "bg-white",
      text: "text-[#2B54E4]",
      border: "border-[#AABBF4]",
    },
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        `${
          color
            ? backgroundColor.primary.bColor
            : backgroundColor.secondary.bColor
        } 
        ${
          color
            ? backgroundColor.primary.border
            : backgroundColor.secondary.border
        }
        w-full   items-center px-4 py-2 bg-blue border border-transparent rounded-md text-xs 
        ${
          color ? backgroundColor.primary.text : backgroundColor.secondary.text
        } uppercase` + className
      }
    >
      {children}
    </button>
  );
};

export default Button;
