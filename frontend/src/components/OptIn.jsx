

const OptIn = () => {

  return (
    <div className="mt-[8rem] w-screen h-[350px] rounded-xl px-12 py-5 bg-subtle  text-left text-matic">
      <div className="mt-[100px] mx-auto my-auto max-w-6xl flex justify-center items-center">
        <div className="mr-[30px]">
              <h2 className="text-[38px] font-[700] leading-[30px] font-bold mb-[20px]">Receive updates</h2>
              <p className="text-[16px font-[400]">Be the first to receive information about our activities.</p>
          </div>

          <div className="ml-[100px] w-[40%] p-4 bg-[#CDD7E5] mt-5 flex rounded-lg">
              <input type="email" placeholder="Your email address" className="rounded-l-lg h-[2.5rem] w-[80%] px-4 outline-none"/>
              <button className="w-[20%] bg-secondary rounded-lg text-white ml-[-.3rem]">OPT IN</button>
          </div>
      </div>
    </div>
  )
}

export default OptIn