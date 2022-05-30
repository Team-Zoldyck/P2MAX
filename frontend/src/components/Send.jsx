import React from "react";
import Transfer from "./Transfer";

const Send = () => {
  const text =
    "With zero transaction fees, you can easily send money to your loved ones.";
  const title = "Send money";
  return <Transfer check={true} text={text} title={title} />;
};

export default Send;
