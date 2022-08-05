import React, { useState, useEffect } from "react";
import TWCconfig from "../../../TWCconfig.json";
import HeroImg from "../../../images/HeroImg.png";

export default function HeroSection(props) {
  const {
    HeroSectionWrapper,
    HeroSectionContent,
    HeroSectionImg,
    HeroSectionTitle,
    HeroSectionTitleWrap,
    HeroSectionText,
    HeroSectionTitleoverlayTitle,
    SeeBtn,
  } = TWCconfig;
  return (
    <div className={HeroSectionWrapper}>
      <div className={HeroSectionContent}>
        <div className={HeroSectionTitleWrap}>
          <h1 className={HeroSectionTitleoverlayTitle}>
            Hire a U.S. Copywriting <br /> Team to{" "}
            <b className="font-bold text-orange-850">
              Grow Your <br /> Business <em>Organically</em>{" "}
            </b>{" "}
          </h1>
          <p className={HeroSectionText}>
            We live, eat, breathe and sleep copy. Hire a team from <br /> people
            that actually walk the walk and talk the talk.
          </p>
          <a className={SeeBtn} href="#">
            SEE PRICING
          </a>
        </div>
      </div>
      <div className={HeroSectionImg}>
        <img className="w-full lg:pr-20" src={HeroImg} alt="" />
      </div>
    </div>
  );
}
