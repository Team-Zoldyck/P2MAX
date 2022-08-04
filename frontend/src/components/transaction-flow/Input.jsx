import React from "react";

const Input = ({ type }) => {
  return (
    <div>
      <input
        className="focus:outline-none appearance-none border w-full p-2 rounded-md border-[#AABBF4] "
        type={type}
      />
    </div>
  );
};

export default Input;
