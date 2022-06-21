import React from "react";
import Transfer from "./Transfer";

const Request = () => {
  const title = "Request money";
  const text =
    "Using a unique marker (e.g a username or email), you can make a request for money.";
  return <Transfer title={title} text={text} check={false} />;
};

export default Request;
