import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
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

        <section className="mt-20 w-[max-content] mx-auto flex flex-col items-center text-center">
            <h1 className="text-matic text-3xl font-bold">Frequently Asked Questions</h1>

            <form>
                <div className="bg-subtle mt-10 w-[35rem] h-[2.2rem] flex items-center">
                    <input type="search" className="w-[35rem] h-[2.2rem] outline-none" placeholder="Search your question here"/>
                </div>
            </form>

            <div className="w-[max-content] mt-20">
                {
                    FAQSData?.map(({ title, description }) => {
                        return <FAQsCard FAQ={ title } description={ description }/>
                    })
                }
            </div>

            <div className="mt-[8rem] mb-12 rounded-xl px-12 py-5 mx-auto bg-subtle w-[max-content] text-left text-matic">
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
