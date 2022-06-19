import React from 'react'
import FAQsCard from "../components/FAQs"

const FAQSData = [
    {
        id: 1,
        title: "What is P2Max?",
        description: ""
    },
    {
        id: 2,
        title: "How many countries does P2Max operate in?",
        description: "P2Max is present in 19 countries in Africa. We are looking to further increase our reach and influence as we grow."
    },
    {
        id: 3,
        title: "What are the benefits of having an account?",
        description: ""
    },
    {
        id: 4,
        title: "What kind of debit cards can I use on P2Max?",
        description: ""
    },
    {
        id: 5,
        title: "How safe is my wallet?",
        description: ""
    },
    {
        id: 6,
        title: "Are there transaction limits on a P2Max account?",
        description: ""
    }
]

const FAQs = () => {
    return <>

        <section className="mt-20 w-[max-content] mx-auto flex flex-col items-center text-center">
            <div className="flex items-center justify-center">
                <svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-[-6rem] mr-[4.5rem] w-[2.5rem] h-[2.5rem]">
                    <circle r="6" transform="matrix(-1 0 0 1 29 24)" fill="#D9F8E0" />
                    <ellipse rx="10.5" ry="10" transform="matrix(-1 0 0 1 10.5 10)" fill="#F3E0FF" />
                </svg>

                <h1 className="text-matic text-3xl font-bold">Frequently Asked Questions</h1>
            </div>

            <form>
                <div className="bg-subtle mt-10 w-[32rem] h-[3rem] flex items-center px-10 rounded-lg">
                    <button type="" className="mr-5"> 
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.55055 12.4468 8.05071 12.9999 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0V0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z" fill="#AABBF4" />
                        </svg>
                    </button>
                    <input type="search" className="w-[32rem] h-[3rem] outline-none bg-subtle" placeholder="Search your question here"/>
                </div>
            </form>

            <div className="w-[max-content] mt-20">
                {
                    FAQSData?.map(({ title, description, id }) => {
                        return <FAQsCard key={ id } FAQ={ title } description={ description }/>
                    })
                }
            </div>
            
        </section>
    </>
}

export default FAQs
