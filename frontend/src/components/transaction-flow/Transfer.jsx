import React from "react";
import TransferIcon from "../../assets/images/transferIcon.png";
import RequestIcon from "../../assets/images/request-money.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const buttonConfig = {
  primary: {
    width: "w-[320px]",
  },
  secondary: {
    width: "w-[325px]",
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
      {check ? (
        <img
          src={TransferIcon}
          alt="transfer_icon"
          className={{ width: "40px", height: "28px", color: "#2B54E4" }}
        />
      ) : (
        <img
          src={RequestIcon}
          alt="transfer_icon"
          className={{ width: "40px", height: "28px", color: "#2B54E4" }}
        />
      )}

      <h1 className="font-bold text-3xl my-12">{title}</h1>
      <div className="w-full">
        <p className="mb-12 font-normal text-base">{text}</p>
      </div>
      <div className="mb-10">
        {check ? (
          <Button color={true} onClick={handleSendMoney}>
            Send money
          </Button>
        ) : (
          <Button color={true} onClick={handleRequestMoney}>
            Request money
          </Button>
        )}
      </div>
    </div>
  );
};

export default Transfer;
