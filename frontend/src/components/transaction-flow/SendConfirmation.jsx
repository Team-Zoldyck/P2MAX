import React from "react";
import Confirmation from "./Confirmation";

const SendConfirmation = () => {
  const title = "Congratulations";
  const text = "Your transaction is complete";
  return <Confirmation checkImage={true} title={title} text={text} />;
};

export default SendConfirmation;
