import About_Image from "../assets/images/about_image_1.png";
import Story_Image from "../assets/images/about_image_2.png";

const AboutUs = () => {

  return (

    <div className="">
        <section className="mx-auto max-w-6xl h-fit flex justify-between align-items mt-[100px] p-10">
            <div className="w-[55%] mr-[80px]">
                <h1 className="text-3xl md:text-[64px] font-[700] leading-[84px] mb-[70px] text-[#2B54E4]">About Us</h1>
                <article className="text-[22px] font-[500] leading-[30px]">
                    We are a fast growing financial services company that focuses on providing quality money transfer services to our customers anywhere across the globe.<br></br><br></br>

                    Send money to anyone, anywhere, without being charged a dime for that. You should not have to pay to send money.
                </article>
            </div>
            <div className="w-[40%]">
                <img className="object-cover" src={About_Image} alt="" />
            </div>
        </section>

        <section className="w-screen bg-[#F7F7FA] py-1">
            <div className="mx-auto max-w-6xl h-fit flex justify-between align-items mt-[100px] p-10">
                <div className="w-[40%]">
                    <img className="object-cover" src={Story_Image} alt="" />
                </div>
                <div className="w-[55%]  ml-[130px]">
                    <div className="flex justify-center items-center mb-[60px]">
                        <h1 className="text-3xl md:text-[64px] font-[700] leading-[84px] text-[#2B54E4]">Our Story</h1>
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
                    <div className="flex justify-center items-center">
                        <div>
                            
                        </div>
                    </div>
            </div>
        </section>
    </div>
  )
}

export default AboutUs