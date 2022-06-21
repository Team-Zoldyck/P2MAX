import React from 'react'
import Navbar from "../components/Navbar";
import FAQsCard from "../components/FAQs"
import Footer from "../components/footer"

const FAQSData = [
    {
        title: "What is P2Max?",
        description: ""
    },
    {
        title: "How many countries does P2Max operate in?",
        description: "P2Max is present in 19 countries in Africa. We are looking to further increase our reach and influence as we grow."
    },
    {
        title: "What are the benefits of having an account?",
        description: ""
    },
    {
        title: "What kind of debit cards can I use on P2Max?",
        description: ""
    },
    {
        title: "How safe is my wallet?",
        description: ""
    },
    {
        title: "Are there transaction limits on a P2Max account?",
        description: ""
    }
]

const FAQs = () => {
    return <>
        <Navbar/>

        <section className="mt-20 sm:w-[max-content] mx-auto flex flex-col sm:items-center sm:text-center w-[90%]">
            <div className="flex sm:items-center sm:justify-center">
                <svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:ml-[-6rem] sm:mr-[4.5rem] sm:w-[2.5rem] sm:h-[2.5rem] w-[1.5rem] h-[1.5rem] mr-4 ml-3">
                    <circle r="6" transform="matrix(-1 0 0 1 29 24)" fill="#D9F8E0" />
                    <ellipse rx="10.5" ry="10" transform="matrix(-1 0 0 1 10.5 10)" fill="#F3E0FF" />
                </svg>

                <h1 className="text-matic sm:text-3xl text-[1.1rem] font-bold">Frequently Asked Questions</h1>
            </div>

            <form>
                <div className="bg-subtle mt-10 sm:w-[32rem] sm:h-[3rem] flex sm:items-center sm:px-10 rounded-lg w-[100%] h-[2.2rem] px-5">
                    <button type="" className="mr-5"> 
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.55055 12.4468 8.05071 12.9999 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0V0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z" fill="#AABBF4" />
                        </svg>
                    </button>
                    <input type="search" className="w-[100%] h-[100%] outline-none bg-subtle" placeholder="Search your question here"/>
                </div>
            </form>

            <div className="sm:w-[max-content] w-[90%] mt-20 mx-auto">
                {
                    FAQSData?.map(({ title, description }) => {
                        return <FAQsCard FAQ={ title } description={ description }/>
                    })
                }
            </div>

            <div className="mt-[8rem] mb-12 rounded-xl px-12 py-5 mx-auto bg-subtle w-[max-content] text-left text-matic hidden sm:block">
                <h3 className="text-[1.25rem] font-bold mb-1">Receive updates</h3>
                <p>Be the first to receive information about our activities.</p>

                <div className="p-4 bg-[#CDD7E5] mt-5 flex rounded-lg">
                    <input type="email" placeholder="Your email address" className="rounded-l-lg h-[2.5rem] w-[80%] px-4 outline-none"/>
                    <button className="w-[20%] bg-secondary rounded-lg text-white ml-[-.3rem]">opt in</button>
                </div>
            </div>
        </section>
        <Footer/>
    </>
}

export default FAQs
