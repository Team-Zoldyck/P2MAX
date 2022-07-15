import React from "react";
import Label from "../../../components/transaction-flow/Label";
import Button from "../../../components/transaction-flow/Button";
import Input from "../../../components/transaction-flow/Input";
import Textarea from "../../../components/transaction-flow/Textarea";
import { useNavigate } from "react-router";
const RequestMoney = () => {
  let history = useNavigate();
  return (
    <div className="flex content-center m-auto px-10 pb-10 mt-10 bg-[#F7F7FA] w-96">
      <div className="w-full ">
        <form classname=" w-full color-[#7979e2]">
          <div className="mt-12">
            <Label>Request amount</Label>
            <Input type="text" />
          </div>
          <div className="mt-12">
            <Label>User email or username</Label>
            <Input type="text" />
          </div>
          <div className="mt-12">
            <Label>Receipt email or username</Label>
            <Input type="text" />
          </div>
          <div className="mt-12">
            <Label>Narration</Label>
            <Textarea />
          </div>
          <div className="mt-12">
            <Button
              onClick={() => history("/requestmoney/confirm")}
              color={true}
            >
              Request money
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestMoney;
