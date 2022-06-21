import About_Image from "../assets/images/about_image_1.png";
import Story_Image from "../assets/images/about_image_2.png";

const AboutUs = () => {

  return (

    <div className="overflow-x-hidden">
        <section className="mx-auto max-w-6xl h-fit flex flex-col lg:flex-row justify-between align-items mt-[50px] p-10">
            <div className="lg:w-[55%] lg:mr-[80px] text-center lg:text-left ">
                <h1 className="text-3xl md:text-[64px] font-[700] leading-[84px] mb-[30px] lg:mb-[70px] text-[#2B54E4]">About Us</h1>
                <article className="text-[22px] font-[500] leading-[30px]">
                    We are a fast growing financial services company that focuses on providing quality money transfer services to our customers anywhere across the globe.<br></br><br></br>

                    Send money to anyone, anywhere, without being charged a dime for that. You should not have to pay to send money.
                </article>
            </div>
            <div className="my-[50px] mx-auto w-[60%] lg:w-[40%]">
                <img className="w-full object-cover" src={About_Image} alt="" />
            </div>
        </section>

        <div className="relative w-full h-fit">

            <section className="w-screen bg-[#F7F7FA] pt-1 pb-2">
                <div className="mx-auto max-w-6xl h-fit flex flex-col lg:flex-row justify-between align-items my-[60px] p-10">
                    <div className="mx-auto w-[60%] lg:w-[40%] my-[50px] order-2 lg:order-1">
                        <img className="object-cover" src={Story_Image} alt="" />
                    </div>
                    <div className="lg:w-[55%]  lg:ml-[130px] text-center lg:text-left order-1 lg:order-2">
                        <div className="flex justify-center items-center mb-[60px]">
                            <h1 className="text-3xl md:text-[64px] font-[700] leading-[84px]  text-[#2B54E4]">Our Story</h1>
                        </div>
                        <article className="text-[22px] font-[500] leading-[30px]">
                            Imagine being charged for every time you sought to send money to a loved one or for an important need.<br></br><br></br>

                            Out of this imagination, P2Max was born. A finance solution that allows its customers send money without being charged. <span className="text-[#2B54E4]"><i>What You Send Is What Is Deducted.</i></span> No extra charges.
                        </article>
                    </div>
                </div>
            </section>

            <section className="w-screen py-1">
                <div className="mx-auto max-w-6xl h-fit mt-[100px] p-10">
                    <div className="flex justify-center items-center mb-[60px]">
                        <h1 className="text-3xl md:text-[64px] font-[700] leading-[84px]">Our Foundation</h1>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row justify-center items-center">
                        <div className="w-[95%] lg:w-[37%] h-[400px] sm:h-[320px] bg-[#F7F7FA] shadow-lg shadow-indigo-500/40 p-[50px] lg:mr-[40px]">
                            <div className="mb-[50px]">
                                <h2 className="text-[#2B54E4] text-[28px] font-[700] leading-[30px]">Our Vision</h2>
                            </div>
                            <div>
                                <p>P2Max is creating a world in which money transfer is seamless and cost effective. This is because we believe that our customers deserve a convenient means of money transfer.</p>
                            </div>
                        </div>
                        <div className="mt-[70px] lg:mt-[0] w-[95%] lg:w-[37%] sm:h-[320px] bg-[#F7F7FA] shadow-lg shadow-indigo-500/40 p-[50px] lg:ml-[40px]">
                            <div className="mb-[50px]">
                                <h2 className="text-[#2B54E4] text-[28px] font-[700] leading-[30px]">Our Mission</h2>
                            </div>
                            <div>
                                <p>P2Max seeks to provide its customers with an easy, convenient and cost effective way to send and receive money, powered by the use of technology that ensures maximum security of funds.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

        </div>

    </div>
  )
}

export default AboutUs