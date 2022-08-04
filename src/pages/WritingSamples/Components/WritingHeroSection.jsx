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
    WritingHeroSectionWrapper,
  } = TWCconfig;
  return (
    <div
      className={`w-full bg-orange-150 mx-auto flex flex-col lg:flex-wrap lg:flex-row pt-14 pb-[130px] pl-0 lg:pl-20 pr-0 relative ${
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
        <div className="container flex items-center flex-col lg:flex-row">
          <div className="w-full lg:w-[53%] pl-10 lg:pl-[180px]  g:order-1">
            <div className={HeroSectionTitleWrap}>
              <h1 className={HeroSectionTitle}>Writing Samples</h1>
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
          <div className=" w-full lg:w-[47%]  flex lg:justify-center lg:order-2 justify-center HeroSectionImg-overlay px-4 lg:pr-24 pt-10">
            <ImageAsset src="writingHeroImage" className="h-[80%] w-[60%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
