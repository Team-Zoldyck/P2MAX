import React from "react";
import Navbar from "../components/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple} from 'react-icons/fa'
const SignUp =()=>{
return(
    <>
        <Navbar />
        <main>
            <div  className="container mx-auto lg:my-14 flex lg:flex-row flex-col justify-between">
                <div className="my-24 ">
                    <div className="lg:p-24 pl-4">
                        <h2 className="mb-4 font-bold text-3xl text-secondary">Sign Up</h2>
                        <p className="text-xl  text-blue-900 font-bold">Hey there. There is a lot you are missing out on.
                            <br /> Having an account with us fixes that.</p>
                        <p className="my-12"> 
                            Already have an account?
                        <span className=" ml-2"> 
                        <a href="login" className="font-bold text-secondary hover:underline decoration-2">Sign in</a>
                        </span>
                        </p>
                    </div>
                </div> 
                <div className="bg-neutral-100 lg:w-1/3">
                    <div className="px-6 py-2 mx-auto my-3">
                        <form action="index.html" method="post">
                            <label htmlFor="name" className="block mb-2 text-secondary font-semibold">Full name</label>
                            <input type="text" className="w-11/12 h-10 rounded bg-white-600 border-2 border-blue-200 hover:shadow-md hover:shadow-blue-600" name="name"></input>
                            <label htmlFor="email" className="block mt-6 mb-2 text-secondary font-semibold">Email address</label>
                            <input type="email" className="w-11/12 h-10 rounded bg-white-600 border-2 border-blue-200 hover:shadow-md hover:shadow-blue-600" name="email"></input>
                            <label htmlFor="password" className="block mt-6 mb-2 text-secondary font-semibold">Password</label>
                            <input type="text" className="w-11/12 h-10 rounded bg-white-600 border-2 border-blue-200 hover:shadow-md hover:shadow-blue-600" name="password"></input><br/>
                            
                            <div className="flex justify-center  my-8 ">
                                <button type="submit" className="py-2 rounded bg-secondary text-white w-10/12 lg:w-full">CREATE YOUR ACCOUNT</button>

                            </div>

                            {/* Alternative sign-ins */}

                            <div className="flex justify-center mb-6">
                                <p>or</p>
                            </div>

                            <div className="mb-8 flex flex-col gap-y-6">
                                <button type="submit" className="text-center   md:text-md py-2 border-2 border-blue-200 rounded hover:shadow-lg hover:shadow-blue-600 mx-auto w-10/12 lg:w-full">
                                        <FcGoogle className="inline w-6 h-fit mr-3 "/>Continue with Google
                                </button>
                                    
                                <button type="submit" className="text-center  md:text-md py-2 border-2 border-blue-200 rounded hover:shadow-lg hover:shadow-blue-600 mx-auto w-10/12 lg:w-full">
                                        <FaFacebook className="inline w-5 md:w-6 h-fit mr-3"/>Continue with Facebook
                                </button>
                                    
                                <button type="submit" className="text-center  md:text-md py-2 border-2 border-blue-200 rounded hover:shadow-lg hover:shadow-blue-600 mx-auto w-10/12 lg:w-full">
                                        <FaApple className="inline w-5 md:w-6 h-fit mr-3"/>Continue with Apple
                                </button>
                                        
                            </div>


                        </form>
                    </div>
                </div> {/* end of sign up portion  */}
            
            </div> {/* end of container mx-auto */}
        </main>
    </>
)
}
export default SignUp;
//,<