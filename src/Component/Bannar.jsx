import React from "react";
import hero from "../Component/../assets/hero.png";
const Bannar = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-5xl pt-20 font-bold text-[#001931]">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#632EE3] bg-clip-text text-transparent">
            Productive
          </span>{" "}
           Apps
        </h1>
        <p className=" pt-6 text-[#627382]  ">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div className="mt-10 ">
          <button className="btn mr-5">
            <i class="fa-brands fa-google-play"></i>Google Play
          </button>
          <button className="btn ">
            <i class="fa-brands fa-app-store-ios"></i> App Store
          </button>
        </div>
      </div>

      {/* ...............  */}
      <div className="mt-10">
        <img src={hero} className="mx-auto h-80 pr-2" alt="" />
      </div>

      {/* ..............  */}
      <div className="pb-30 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] ">
        <h2 className="text-4xl py-12 font-semibold text-[#FFFFFF]">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex justify-between items-center md:mx-20 lg:mx-50">
          <div className=" text-[#FFFFFF]">
            <h4 className="text-[12px]">Total Downloads</h4>
            <h2 className="my-3 font-bold text-5xl ">29.6M</h2>
            <h4 className="text-[12px]">21% more than last month</h4>
          </div>
          <div className=" text-[#FFFFFF]">
            <h4 className="text-[12px]">Total Reviews</h4>
            <h2 className="my-3 font-bold text-5xl ">906K</h2>
            <h4 className="text-[12px]">46% more than last month</h4>
          </div>
          <div className=" text-[#FFFFFF]">
            <h4 className="text-[12px]">Active Apps</h4>
            <h2 className="my-3 font-bold text-5xl ">132+</h2>
            <h4 className="text-[12px]">31 more will Launch</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
