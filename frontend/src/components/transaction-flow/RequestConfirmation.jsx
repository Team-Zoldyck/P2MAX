import React from "react";
import Confirmation from "./Confirmation";

const RequestConfirmation = () => {
  const title = "Hold the forte";
  const text = "Help is on the way";
  return <Confirmation checkImage={false} title={title} text={text} />;
};

export default RequestConfirmation;
