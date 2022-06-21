import { useState } from "react"
import { CloseFAQsIcon, OpenFAQsIcon } from "./FAQIcon"

const FAQsCard = ({ FAQ, description }) => {
    const [openFAQ, setOpenFAQ] = useState(false);
    
    const handleOpenFAQ = () => {
        setOpenFAQ(!openFAQ)
    }

    return (
        <div className="w-[32rem] flex flex-col justify-start mb-10">
            <span className="flex items-center w-[inherit] justify-between">
                <p className="text-secondary font-bold text-[1.2rem]">{FAQ}</p>

                {
                    !openFAQ ? <OpenFAQsIcon className="w-[1rem] h-[1rem]" click={handleOpenFAQ}/> : <CloseFAQsIcon className="w-[1rem] h-[1rem]" click={handleOpenFAQ}/>
                }     
            </span>     
            {
                openFAQ && description ? <p className="text-left w-[inherit] mt-4 text-matic">{description}</p>: null
            }
        </div>
    )
}

export default FAQsCard