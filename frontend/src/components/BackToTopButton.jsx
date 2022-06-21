import { IoIosArrowUp } from "react-icons/io";

const BackToTopButton = ({ onScrollToTop }) => {

  return (
    <div onClick={onScrollToTop} className="bottom-[50px] right-[50px] cursor-pointer shadow-lg shadow-indigo-500/40 fixed w-[40px] h-[38px] flex justify-center items-center rounded-md bg-[#D9F8E0]">
        <IoIosArrowUp className="text-[#2B54E4]" style={{fontSize: '1.5rem'}} />
    </div>
  )
}

export default BackToTopButton