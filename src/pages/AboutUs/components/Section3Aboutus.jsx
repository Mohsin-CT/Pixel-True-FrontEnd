import React, { useState, useEffect } from "react";
import TWCconfig from "../../../TWCconfig.json";
import HeroAboutusImg from "../../../images/Section3.png";

export default function Section3Aboutus(props) {
  const {
    Section3AboutusWrapper,
    HeroAboutusContent,
    Section3AboutusImgClass,
    Section3AboutusTitle,
    HeroSectionTitleWrap,
    HeroSectionText,
    HeroAboutusImgClass,
    SeeBtn,
    BookACallBtn,
  } = TWCconfig;
  return (
    <div className={Section3AboutusWrapper}>
      <div className="max-w-[1550px] mx-auto flex flex-wrap items-center">
      <div className={Section3AboutusImgClass}>
        <img src={HeroAboutusImg} alt="" />
      </div>
      <div className={HeroAboutusContent}>
        <div className={HeroSectionTitleWrap}>
          <h1 className={Section3AboutusTitle}>We make things easy for you.</h1>
          <p className={HeroSectionText}>
            The advantage of a large team and scale is that we can write
            competently on a wide range of themes and speak to a diverse range
            of audiences. You can trust that our writers will touch your
            readers' hearts.{" "}
          </p>
        </div>
      </div>
      </div>
      
    </div>
  );
}
