import React from "react";
import Navbar from "../components/Navbar";
import rafiki_hero from "../assets/images/rafiki_hero.png";
import hero_btn_icon from "../assets/images/hero_btn_icon.png";
import hero_ellipse from "../assets/images/hero_ellipse.png";
import fast_transfer from "../assets/images/fast_transfer.png";
import security from "../assets/images/security.png";
import scheduler from "../assets/images/scheduler.png";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row  gap-6 py-20 px-20 justify-center items-center relative">
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
          <img
            className="absolute bg-transparent w-[7.5rem] top-[260px] left-[90px]"
            src={hero_ellipse}
            alt="ero_ellipse"
          />
        </div>

        <div className="md:mt-6">
          <img src={rafiki_hero} alt="hero_img" />
        </div>
      </div>

      <div>
        <h1>What Makes P2Max Standout</h1>
        <div>
          <div>
            <div>
              <img src={fast_transfer} alt="fast_transfer" />
              <h2>Fast Transfers</h2>
            </div>
            <p>
              We provide quick, fast and easy transfers from bank to bank to
              seamlessly fit into your busy and productive lifestyle.
            </p>
          </div>

          <div>
            <div>
              <img src={security} alt="security" />
              <h2>Security</h2>
            </div>
            <p>
              With P2Max It’s never been easier to send and receive money, but
              that doesn’t mean it shouldn’t be safe. We provide the peace of
              mind your looking for.{" "}
            </p>
          </div>

          <div>
            <div>
              <img src={scheduler} alt="scheduler" />
              <h2>Scheduler</h2>
            </div>
            <p>
              Easily schedule your transactions to be processed at a later date
              straight from your dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
