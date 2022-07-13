import React, { useState} from "react";
import Input from "../components/Input";
import Button from "../components/Button"
import apple from "../assets/images/apple.png"; 
import google from "../assets/images/google.png"; 
import facebook from "../assets/images/facebook.png"; 
const ForgotPassword =()=>{
return(
    <main>
    <div className="lg:flex lg:justify-center m-16">
        <div className="mr-12 m-20">
<h4 className="text-[22px] font-bold">Forgot your password?</h4>
<p className="text-[16px] max-w-sm">In just a few steps, enter your email 
and a link to reset your password will 
be sent to you.</p>
</div>
        <div className="bg-neutral-50 pb-10 pt-10 px-10"  >
<form className="form-bank ">
  
  <div className="form-text ">
          
          <label for="phone-number">Enter Email</label>
          <div></div>
        </div>
        <Input type="phone-number" holder="janedoe@gmail.com" />
        <div className="text-xs mt-4">
         
          <div></div>
        </div>
       
        
        
        <div  className="bg-blue-700 w-full h-9 text-center  pt-1 text-neutral-50 mt-4 text-xs">
        
         <Button submit="Send reset link" />
      
        
         </div>
      </form>
        </div>
    </div>
     
    </main>
)
}
export default ForgotPassword;