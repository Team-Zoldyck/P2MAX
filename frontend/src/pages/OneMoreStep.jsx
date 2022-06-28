import React from 'react'
import Navbar from "../components/Navbar";
import hero_ellipse from "../assets/images/hero_ellipse.png";

const OneMoreStep = () => {
  return (
    <>
        <Navbar />
        <img
            className="absolute bg-transparent w-[7.5rem] top-[800px] left-[700px] lg:top-[200px] lg:left-[90px]"
            src={hero_ellipse}
            alt="ero_ellipse"
          />
        <main className="">
            <div className="container mx-auto lg:my-14 flex lg:flex-row flex-col justify-center">
                <div className="my-24 ">
                    <div className="lg:p-24 pl-4">
                        <h2 className="mb-4 font-bold text-3xl text-secondary">One more step</h2>
                        <p className="text-xl text-blue-900 font-bold">Your account is almost set up.
                            <br /> Choose a unique username to proceed </p>
                        <p className="my-12"> 
                            Already have an account?
                        <span className=" ml-2"> 
                        <a href="login" className="font-bold text-secondary hover:underline decoration-2">Sign in</a>
                        </span>
                        </p>
                    </div>
                </div> 
                <div className="bg-neutral-100 lg:w-5/12 w-full h-fit md:self-center self-start">
                    <div className="px-6 py-2 mx-auto my-3">
                        <form action="index.html" method="post">
                            <label htmlFor="name" className="block mb-2 text-secondary font-semibold">Select username</label>
                            <input type="text" className="w-full h-10 rounded bg-white-600 border-2 border-blue-200 hover:shadow-md hover:shadow-blue-600" name="username"></input>
                            <br />
                            <div className="flex justify-center  my-8 ">
                                <button type="submit" className="py-2 rounded bg-secondary text-white w-full">FINISH</button>

                            </div>
                        </form>
                    </div>
                </div> 
            
            </div> {/* end of container mx-auto */}
        </main>
    </>
  )
}

export default OneMoreStep