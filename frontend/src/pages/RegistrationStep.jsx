import React, { useState} from "react";
import Input from "../components/Input";
import Button from "../components/Button"
import apple from "../assets/images/apple.png"; 
import google from "../assets/images/google.png"; 
import facebook from "../assets/images/facebook.png"; 
const RegistrationStep =()=>{
return(
    <main>
    <div className="lg:flex lg:justify-center m-16">
        <div className="mr-12 m-10">
<h4 className="text-[22px] font-bold">One more step</h4>
<p className="text-[16px] max-w-sm">Your account is almost set up.
Choose a unique username and proceed.</p>
<p className="text-[12px]">Already have an account?  <a href ="/login" class="font-bold text-blue-700 ">Sign in</a></p>
        </div>
        <div className="bg-neutral-50 pb-10 pt-10 px-10"  >
<form className="form-bank ">
  
  <div className="form-text ">
          
          <label for="phone-number">Select username</label>
          <div></div>
        </div>
        <Input type="phone-number" holder="099334" />
        <div className="text-xs mt-4">
         
          <div></div>
        </div>
       
        
        
        <div  className="bg-blue-700 w-full h-9 text-center  pt-1 text-neutral-50 mt-4 text-xs">
        
         <Button submit="Finish" />
      
        
         </div>
      </form>
        </div>
    </div>
     
    </main>
)
}
export default RegistrationStep;