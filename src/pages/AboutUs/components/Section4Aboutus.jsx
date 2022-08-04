import React, { useState, useEffect } from "react";
import TWCconfig from "../../../TWCconfig.json";
import BookIcon from "../../../images/BookSection4Aboutus.svg";

export default function Section4Aboutus(props) {
  const {
    LightContentBoxWrap,
    LightContentBoxItem,
    LightContentBoxItemTitle,
    LightContentBoxItemText,
    ContentIconBox,
    Section4CardText,
  } = TWCconfig;
  return (
    <div className={""}>
      <div className="flex flex-wrap sm:flex-nowrap lg:ml-[-120px] xl:ml-[-200px] w-full lg:w-[770px] xl:w-[1000px] 2xl:w-[900px] 2xl:w-[1110px] py-[50px] xl:py-[0px] px-[20px] lg:px-[50px]">
        <div className="flex flex-col bg-white shadow-md rounded-[10px] p-6 w-[100%] mx-[10px] 2xl:mx-[24px] my-[20px] sm:my-[0]">
          <img
            src={BookIcon}
            className="flex self-center w-[80px] xl:w-[110px] pt-[30px] 2xl:pt-[40px]"
            alt=""
          />
          <p className="text-[18px] xl:text-[22px] xl:text-[24px] font-poppin-bold leading-[24px] tracking-[-0.6px] mt-[42px] self-center">
            Sales Copy
          </p>
          <p className={Section4CardText}>
            High quality, converting sales copy that will get you new business
          </p>
        </div>
        <div className="flex flex-col bg-white shadow-md rounded-[10px] p-6 w-[100%] mx-[10px] my-[20px] sm:my-[0]">
          <img
            src={BookIcon}
            className="flex self-center w-[80px] xl:w-[110px] pt-[30px] 2xl:pt-[40px]"
            alt=""
          />
          <p className="text-[18px] xl:text-[22px] xl:text-[24px] font-poppin-bold leading-[24px] tracking-[-0.6px] mt-[42px] self-center">
            Landing Pages
          </p>
          <p className={Section4CardText}>
            High quality, converting sales copy that will get you new business
          </p>
        </div>
        <div className="flex flex-col bg-white shadow-md rounded-[10px] p-6 w-[100%] mx-[10px] my-[20px] sm:my-[0]">
          <img
            src={BookIcon}
            className="flex self-center w-[80px] xl:w-[110px] pt-[30px] 2xl:pt-[40px]"
            alt=""
          />
          <p className="text-[18px] xl:text-[22px] xl:text-[24px] font-poppin-bold leading-[24px] tracking-[-0.6px] mt-[42px] self-center">
            E-Books
          </p>
          <p className={Section4CardText}>
            High quality, converting sales copy that will get you new business
          </p>
        </div>
      </div>
    </div>
  );
}
