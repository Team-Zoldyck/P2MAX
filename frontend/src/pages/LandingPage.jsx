import React from "react";

import rafiki_hero from "../assets/images/rafiki_hero.png";
import hero_btn_icon from "../assets/images/hero_btn_icon.png";

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row  gap-6 py-20 justify-center items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            With P2Max, you can
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-green my-6">
            send so much more money
          </h1>
          <p className="text-base ">
            With zero charges, you can send money seamlessly.
          </p>
          <p className="text-base">
            Experience money transfer in a whole new way with P2Max
          </p>
          <div className="mt-6 pb-6 text-center md:text-left md:pb-0">
            <button className="flex justify-center items-center gap-4" id="btn">
              {" "}
              <img src={hero_btn_icon} alt="hero_btn_icon" />
              SEND MONEY NOW
            </button>
          </div>
        </div>

        <div className="md:mt-6">
          <img src={rafiki_hero} alt="hero_img" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
