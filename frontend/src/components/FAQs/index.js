import { useState } from "react"
import { CloseFAQsIcon, OpenFAQsIcon } from "./FAQIcon"

const FAQsCard = ({ FAQ, description }) => {
    const [openFAQ, setOpenFAQ] = useState(false);
    
    const handleOpenFAQ = () => {
        setOpenFAQ(!openFAQ)
    }

    return (
        <div className="sm:w-[32rem] w-[100%] flex flex-col justify-start mb-10 sm:text-left">
            <span className="flex sm:items-center w-[100%] justify-between">
                <p className="text-secondary font-bold sm:text-[1.2rem] text-[14px] mr-auto w-[80%]">{FAQ}</p>

                {
                    !openFAQ ? <OpenFAQsIcon className="w-[1rem] h-[1rem]" click={handleOpenFAQ}/> : <CloseFAQsIcon className="w-[1rem] h-[1rem]" click={handleOpenFAQ}/>
                }     
            </span>     
            {
                openFAQ && description ? <p className="text-left w-[70%] mt-4 text-matic">{description}</p>: null
            }
        </div>
    )
}

export default FAQsCard