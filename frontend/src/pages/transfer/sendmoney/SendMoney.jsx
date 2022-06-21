import React from "react";
import Input from "../../../components/Input";

const SendMoney = () => {
  return (
    <div className="flex justify-center mt-10 bg-[#F7F7FA] w-96">
      <div>
        <form classname="p-10 w-full">
          <div>
            <h2>Available balance</h2>
          </div>
          <div>
            <h2>Amount to send</h2>
            <Input />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendMoney;
