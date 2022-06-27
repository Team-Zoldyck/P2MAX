import React from "react";
import Navbar from "../components/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple} from 'react-icons/fa'
const Login =()=>{
return(
    <>
        <Navbar />
        <main>
            <div  className="container mx-auto lg:my-14 flex lg:flex-row flex-col justify-between">
                <div className="my-24 ">
                    <div className="lg:p-24 pl-4">
                        <h2 className="mb-4 font-bold text-3xl text-secondary">Sign In</h2>
                        <p className="text-xl text-blue-900 font-bold">Hey there. Get right back into your account</p>
                        <p className="my-12"> 
                        Yet to have an account?
                        <span className=" ml-2"> 
                        <a href="home" className="font-bold text-secondary hover:underline decoration-2">Create one!</a>
                        </span>
                        </p>
                    </div>
                </div> {/* end of line:14 div */}
                <div className="bg-neutral-100 lg:w-1/3">
                    <div className="px-6 py-2 mx-auto my-3">
                        <form action="index.html" method="post">
                            <label htmlFor="name" className="block mb-2 text-secondary font-semibold">Email address or username</label>
                            <input type="text" className="w-11/12 h-10 rounded bg-white-600 border-2 border-blue-200 hover:shadow-md hover:shadow-blue-600" name="username"></input>
                            <label htmlFor="password" className="block mt-6 mb-2 text-secondary font-semibold">Password</label>
                            <input type="text" className="w-11/12 h-10 rounded bg-white-600 border-2 border-blue-200 hover:shadow-md hover:shadow-blue-600" name="password"></input><br/>
                            <div className="flex justify-end pr-8 mb-8 ">
                                <a href="#" className="text-secondary hover:underline decoration-2">Forgot your password?</a>

                            </div>
                            <div className="flex justify-center  mb-8 ">
                                <button type="submit" className="py-2 rounded bg-secondary text-white w-10/12 lg:w-full">LOGIN</button>

                            </div>

                            {/* Alternative logins */}

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
                </div> {/* end of line:26 div  */}
            
            </div> {/* end of container mx-auto */}
        </main>
    </>
)
}
export default Login;
//,<