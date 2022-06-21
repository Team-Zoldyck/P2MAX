

const OptIn = () => {

  return (
    <div className="my-[8rem] lg:mb-[0rem] mx-auto w-[85%] lg:w-screen lg:h-[450px] rounded-xl sm:px-12 py-5 bg-subtle  text-left text-matic">
      <div className="lg:mt-[150px] mx-auto my-auto max-w-6xl p-[20px] flex flex-col lg:flex-row lg:items-center justify-center items-start">
        <div className="lg:mr-[30px]">
              <h2 className="text-[25px] sm:text-[38px] font-[700] leading-[30px] font-bold mb-[20px]">Receive updates</h2>
              <p className="text-[15px] font-[400]">Be the first to receive information about our activities.</p>
          </div>

          <div className="lg:ml-[100px] w-[100%] lg:w-[40%] p-3 sm:p-5 bg-[#CDD7E5] mt-5 flex rounded-lg">
              <input type="email" placeholder="Your email address" className="text-[12px] sm:text-[14px] font-[400] rounded-l-lg h-[2.2rem] sm:h-[2.5rem] w-[80%] px-4 outline-none"/>
              <button className="w-[20%] bg-secondary rounded-lg text-white ml-[-.3rem] text-[12px] sm:text-[14px] font-[400]">OPT IN</button>
          </div>
      </div>
    </div>
  )
}

export default OptIn