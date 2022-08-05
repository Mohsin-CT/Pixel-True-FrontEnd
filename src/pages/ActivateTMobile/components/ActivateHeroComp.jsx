import React from "react";
import TWCconfig from "../../../TWCconfig.json";

const ActivateHeroComp = () => {
  const { CopywritingSecrets, CopywritingP, CopywritingTitle, HeroSectionTitleoverlayTitle2 } = TWCconfig;

  return (
    <div className="flex bg-pink-150 pt-[150px] lg:pt-[180px] xl:pt-[250px] 2xl:pt-[421px] pb-[100px] px-[20px] md:px-[50px] lg:px-[100px]">
      <div className="w-full flex justify-center ">
        <h1 className={HeroSectionTitleoverlayTitle2}>
          How to Activate a Metro by
          <span className="text-orange-850">
            &nbsp; T-Mobile <br /> Phone For Free
          </span>
        </h1>
      </div>
    </div>
  );
};

export default ActivateHeroComp;
