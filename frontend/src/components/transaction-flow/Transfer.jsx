import React from "react";
import TransferIcon from "../../assets/images/transferIcon.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const buttonConfig = {
  primary: {
    width: "w-1/5",
  },
  secondary: {
    width: "w-1/4",
  },
};
const Transfer = (props) => {
  const { title, text, check } = props;
  let history = useNavigate();
  const handleSendMoney = () => {
    history("/sendmoney");
  };
  const handleRequestMoney = () => {
    history("/requestmoney");
  };
  return (
    <div
      className={`bg-[#F7F7FA] pt-12 ${
        check ? buttonConfig.primary.width : buttonConfig.secondary.width
      } px-10 mt-24 shadow`}
    >
      <img
        src={TransferIcon}
        alt="transfer_icon"
        className={{ width: "40px", height: "28px", color: "#2B54E4" }}
      />

      <h2 className="font-bold text-3xl my-12">{title}</h2>
      <div className="w-full">
        <p className="mb-12 font-normal text-base">{text}</p>
      </div>

      {check ? (
        <Button onClick={handleSendMoney}>Send money</Button>
      ) : (
        <Button onClick={handleRequestMoney}>Request money</Button>
      )}
    </div>
  );
};

export default Transfer;
