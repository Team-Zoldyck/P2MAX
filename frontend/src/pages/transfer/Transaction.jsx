import React from "react";
import Send from "../../components/Send";
import Request from "../../components/Request";

const Transaction = () => {
  return (
    <div className="flex justify-center">
      <Send />
      <span className=" flex items-center px-10">OR</span>
      <Request />
    </div>
  );
};

export default Transaction;
//"flex items-center justify-center"
