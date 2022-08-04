import React from "react";
import TWCconfig from "../../../TWCconfig.json";

const ActivateHeroComp = () => {
  const { CopywritingSecrets, CopywritingP, CopywritingTitle } = TWCconfig;

  return (
    <div className="flex bg-orange-150 py-5 lg:pt-36 lg:py-0  ">
      <div className="py-5 pl-4 lg:pl-0 lg:py-20 text-[32px] leading-[2.5rem] lg:text-[64px] w-full lg:leading-[72px] font-[600] flex justify-center ">
        <p>
          How to Activate a Metro by
          <span className="text-orange-850">
            &nbsp; T-Mobile <br /> Phone For Free
          </span>
        </p>
      </div>
    </div>
  );
};

export default ActivateHeroComp;
