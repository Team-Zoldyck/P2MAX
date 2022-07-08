import React from "react";
import Input from "../../../components/transaction-flow/Input";
import Label from "../../../components/transaction-flow/Label";
import Button from "../../../components/transaction-flow/Button";
import sendMoneyIcon from "../../../assets/images/sendmoney-icon.png";
const SendMoney = () => {
  return (
    <div className="flex justify-center  p-10 mt-10 bg-[#F7F7FA] w-96">
      <div className="w-full ">
        <form classname=" w-full color-[#7979e2]">
          <div>
            <Label>Available balance</Label>
            <div className="flex  h-auto items-center mt-7">
              <img
                src={sendMoneyIcon}
                alt="transfer_icon"
                className={{ width: "38px", height: "36px", color: "#2B54E4" }}
              />
              <h2 className="text-[#05377F] ml-5 font-bold text-3xl">N5000</h2>
            </div>
          </div>
          <div className="mt-12">
            <Label>Amount to send</Label>
            <Input />
          </div>
          <div className="mt-12">
            <Label>Receipt email or username</Label>
            <Input />
          </div>
          <div className="mt-12">
            <Button color={true}>Send money</Button>
            <div className="mt-3">
              <Button color={false}>Cancel transaction</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendMoney;
