import React from "react";
import TransferIcon from "../../../assets/images/transferIcon.png";
import Label from "../../../components/transaction-flow/Label";
import Button from "../../../components/transaction-flow/Button";
import Input from "../../../components/transaction-flow/Input";
import { useNavigate } from "react-router";
const SendMoneyConfirm = () => {
  let history = useNavigate();
  return (
    <div className="flex justify-center mt-10 m-auto shadow bg-[#F7F7FA] w-1/3">
      <form className="w-full rounded-sm p-7">
        <div className="flex  h-auto items-center mt-7">
          <img
            src={TransferIcon}
            alt="transfer_icon"
            className={{ width: "38px", height: "36px", color: "#2B54E4" }}
          />
          <h2 className="text-[#05377F] ml-5 font-bold text-3xl">N3000</h2>
        </div>
        <div className="mt-12">
          <Label>
            You are sending the above amount to
            <span className=" text-[#05377F] font-bold ml-1">John Doe</span>
          </Label>
        </div>
        <div className="mt-12">
          <Label>Enter your password</Label>
          <Input type="password" />
        </div>
        <div className="mt-12">
          <Button
            color={true}
            onClick={() => history("/sendmoney/confirm/sendconfirm")}
          >
            confirm & send money
          </Button>
          <div className="mt-3">
            <Button onClick={() => history("/transfer")} color={false}>
              Cancel transaction
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendMoneyConfirm;
