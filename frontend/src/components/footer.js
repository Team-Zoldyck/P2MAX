const Footer = () => {
    return (
        <div className="p-12 py-20 bg-secondary text-white flex items-center justify-between">
            <div className="h-[10rem]">
                <h5 className="font-bold text-[1.5rem] mb-5">P2Max</h5>
                <span>1/3 Pound Road, Aba</span>
            </div>

            <div className="h-[10rem]">
                <h5 className="font-bold text-[1.5rem] mb-5">Company</h5>

                    <a className="block mb-3" href="/">About Us</a>                
                    <a className="block mb-3" href="/">Privacy</a>                
                    <a className="block mb-3" href="/">Terms</a>                
                    <a className="block mb-3" href="/">Legal</a>   

            </div>

            <div className="h-[10rem]">
                <h5 className="font-bold text-[1.5rem] mb-5">Contact</h5>

                    <span className="block mb-3">info@worldcitizen.com</span>
                    <span className="block mb-3">+234 816 XXXX XXX</span>

            </div>
        </div>
    )
}

export default Footer