import React from "react";
import TWCconfig from "../../../TWCconfig.json";

const individualHero = () => {
  const {HeroSectionTitleoverlayTitle3 } = TWCconfig;
  return (
    <div>
      <div className="flex bg-pink-150 pt-[150px] lg:pt-[180px] xl:pt-[250px] 2xl:pt-[421px] pb-[100px] px-[20px] lg:px-[50px] xl:px-[100px]">
      <div className="w-full max-w-[1500px] mx-auto flex justify-center flex-col ">
        <h1 className={HeroSectionTitleoverlayTitle3}>
        How to Activate a Metro by <br />
        <span className="text-orange-850">T-Mobile Phone For Free</span>
        </h1>
        <div className="flex space-x-[14px] items-center mt-[24px]">
        <h4 className="text-gray-850 text-[18px] lg:text-[20px] xl:text-[24px] font-poppin-semibold">March 8, 2022</h4>
        <div className="w-[4px] h-[20px] bg-orange-850"></div>
        <h4 className="text-[18px] lg:text-[20px] xl:text-[24px] text-orange-850 font-poppin-semibold">Graham Sawrey</h4>
        </div>
      </div>
      </div>
    </div>
  );
};

export default individualHero;
