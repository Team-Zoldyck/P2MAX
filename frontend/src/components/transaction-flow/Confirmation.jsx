import React from "react";
import sendMoney from "../../assets/images/sendmoney-img.png";
import requestMoney from "../../assets/images/requestmoney-img.png";
import { useNavigate } from "react-router";
import Button from "./Button";

const Confirmation = ({ title, text, checkImage }) => {
  let history = useNavigate();
  const handleNavigate = () => {
    history("/");
  };
  return (
    <div className="py-10 mt-10 items-center m-auto w-1/3 bg-[#F7F7FA] flex justify-center shadow rounded-sm ">
      <div classname=" text-center w-full">
        <div className=" m-auto">
          {checkImage ? (
            <img
              className={{ width: "100%", height: "100%" }}
              alt={"sendmoney"}
              src={sendMoney}
            />
          ) : (
            <img
              className={{ width: "100%", height: "100%" }}
              alt={"requestmoney"}
              src={requestMoney}
            />
          )}
        </div>
        <div className="mt-12 text-center">
          <h2 className="font-bold text-[#2B54E4] text-xs">{title}</h2>
          <p className="mt-3 text-2xl font-medium">{text}</p>
        </div>
        <div className="mt-12 ">
          <Button color={true} onClick={handleNavigate}>
            Back to homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
