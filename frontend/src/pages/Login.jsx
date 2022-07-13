import React, { useState} from "react";
import Input from "../components/Input";
import Button from "../components/Button"
import apple from "../assets/images/apple.png"; 
import google from "../assets/images/google.png"; 
import facebook from "../assets/images/facebook.png"; 
const Login =()=>{
return(
    <main>
    <div className="lg:flex lg:justify-center m-16">
        <div className="mr-12 m-20">
<h4 className="text-[22px] font-bold">Sign In</h4>
<p className="text-[16px]">Hey there. Get right back into your account.</p>
<p className="text-[12px]">Yet to have an account? <a href ="/register" class="font-bold text-blue-700 ">Create one</a></p>
        </div>
        <div className="bg-neutral-50 pb-10 pt-10 px-10"  >
<form className="form-bank ">
        <div className="form-text ">
          <label for="phone-number">Email address or username</label>
          <div></div>
        </div>
        <Input type="phone-number" holder="099334" />
        <div className="text-xs mt-4">
          <label  for="phone-number">Password </label>
          <div></div>
        </div>
        <Input holder="John Doe" />
         <p className="text-right  mt-4 text-xs"><a href="/Forgot">Forgot your password?</a></p>
        <div  className="bg-blue-700 w-full h-9 text-center  pt-1 text-neutral-50 mt-4 text-xs">
        
         <Button submit="Login" />
      
        
         </div>
      </form>
        <p className="text-center mt-4">or</p>
        <div className="flex justify-left pl-8 mt-4 text-[14px] border border-slate-300 hover:border-indigo-300 w-full h-9 pt-1.5">
                <img className="w-5 h-5 mr-5"
         src={google} />
        <div  className=" text-center text-blue-700  text-xs"> 
         <Button submit="Continue with Google" />
      </div>
      </div>
         <div className="flex justify-left pl-8 mt-4 text-[14px] border border-slate-300 hover:border-indigo-300 w-full h-9 pt-1.5">
        <img className="w-5 h-5 mr-5"
         src={facebook} /> 
          <div className=" text-center text-blue-700  text-xs">
         <Button submit="Continue with Facebook" />
      
        
         </div>
         </div>
       <div className="flex justify-left pl-8 mt-4 text-[14px] border border-slate-300 hover:border-indigo-300 w-full h-9 pt-1.5">
         <img className="w-5 h-5 mr-5"
         src={apple} /> 
         <div  className=" text-center text-blue-700  text-xs">
         
         <Button submit="Continue with Apple" />
         </div>
      
        
         </div>
        </div>
    </div>
     
    </main>
)
}
export default Login;