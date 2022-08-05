import React, { useState, useEffect } from "react";
import TWCconfig from "../../../TWCconfig.json";
import HeroAboutusImg from "../../../images/HeroAboutusImg.png";

export default function HeroAboutus(props) {
  const location = localStorage.getItem("SelectedPage");
  const {
    HeroAboutusContent2,
    HeroAboutusContent,
    HeroSectionImg,
    HeroSectionTitle2,
    HeroSectionTitleWrap,
    HeroSectionText,
    HeroAboutusImgClass,
    SeeBtn,
    BookACallBtn,
  } = TWCconfig;
  return (
    <div className="bg-pink-150 w-full mx-auto flex flex-wrap items-center 2xl:items-start pt-[150px] lg:pt-[180px] xl:pt-[250px] xl:pt-[100px] pb-[50px] xl:pb-[100px] pl-[20px] lg:pl-[50px] 2xl:pl-20 pr-[20px] md:pr-[50px]  relative ">

      <div className={HeroAboutusImgClass}>
        <img className="w-[80%] lg:w-[70%] xl:w-[47%]" src={HeroAboutusImg} alt="" />
      </div>
      <div className={HeroAboutusContent2}>
        <div className={HeroSectionTitleWrap}>
          <h1 className={HeroSectionTitle2}>
            We're a Copywriting Team that actually{" "}
            <b className="font-bold text-orange-850">
              Walk the walk and Talk the Talk.
            </b>{" "}
          </h1>
          <p className={HeroSectionText}>
            As content site owners ourselves, we know what it takes <br /> to
            drive organic traffic by using high quality, and <br /> optimized
            content.{" "}
          </p>
          <a className={BookACallBtn} href="#">
            Book a Call
          </a>
          <a className={SeeBtn} href="#">
            See Pricing
          </a>
        </div>
      </div>
    </div>
  );
}
