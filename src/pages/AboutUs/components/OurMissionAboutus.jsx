import React from "react";
import TWCconfig from "../../../TWCconfig.json";
import OurMissionImg from "../../../images/OurMissionImg.png";

export default function OurMissionAboutus(props) {
  const {
    HeroSectionWrapper,
    Section3AboutusTitle,
    OurMissionSectionContent2,
    HeroSectionText,
  } = TWCconfig;
  return (
    <div className={HeroSectionWrapper}>
      <div className={OurMissionSectionContent2}>
        <div className="w-full md:w-1/2 pr-[50px]">
        <h1 className={Section3AboutusTitle}>It is our Mission to Help you Grow your Business</h1>
        <p className={HeroSectionText}>
            We produce high quality content with your goals in mind. No matter
            whether you're looking to educate, promote or convert, we've got the
            U.S. writers for your content. Our writers are skilled at taking
            your topic and breaking it down into keyword optimized articles that
            will drive results for your business.
          </p>
        </div>
        <div className="w-full md:w-1/2 pt-[50px] md:pt-[0] lg:px-[50px] xl:px-[100px]">
        <img className="max-w-[445px] mx-auto" src={OurMissionImg} alt="" />
        </div>
      </div>
    </div>
  );
}
