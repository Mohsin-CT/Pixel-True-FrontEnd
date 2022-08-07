import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TWCconfig from "../../../TWCconfig.json";
import ImageAsset from "../../commonComponents/ImageAssets";

export default function WritingHeroSection(props) {
  const location = localStorage.getItem("SelectedPage");
  const params = useParams();
  const {
    HeroSectionWrapper,
    HeroSectionContent,
    HeroSectionImg,
    HeroSectionTitle,
    HeroSectionTitleWrap,
    HeroSectionText,
    SeeBtn,
    HeroSectionTitleWriting,
  } = TWCconfig;
  return (
    <div
      className={`w-full bg-pink-150 mx-auto flex flex-col lg:flex-wrap lg:flex-row pt-[150px] lg:pt-[180px] xl:pt-[250px] pb-[50px] relative px-[20px] lg:px-[50px] xl:px-[100px] ${
        location === "individualBlog" ||
        location === "writingSample" ||
        location === "activateTMobile" ||
        location === "pixelCopyBlog" ||
        location === "aboutUs"
          ? "bg-orange-150"
          : "bg-white"
      }`}
    >
      <div className="flex flex-col lg:flex-row justify-center w-full ">
        <div className="w-full max-w-[1450px] mx-auto flex items-center flex-col md:flex-row">
          <div className="w-full md:w-[50%]  g:order-1">
            <div className={HeroSectionTitleWrap}>
              <h1 className={HeroSectionTitleWriting}>Writing Samples</h1>
              <p className={HeroSectionText}>
                Want to see what we can do? Review some of the amazing articles
                below that have increased engagement, driven organic traffic,
                and led to increased affiliate/sales conversions.
              </p>
              <a className={SeeBtn} href="#">
                SEE PRICING
              </a>
            </div>
          </div>
          <div className="mt-[40px] md:mt-[0] w-full md:w-[50%] flex lg:justify-center lg:order-2 justify-center md:px-[50px] lg:px-[100px]">
            <ImageAsset src="writingHeroImage" />
          </div>
        </div>
      </div>
    </div>
  );
}
