import React from "react";
import TWCconfig from "../../../TWCconfig.json";
import ImageAsset from "../../commonComponents/ImageAssets";

const IndividualMetroPcs = () => {
  const { CopywritingSecrets, CopywritingP, CopywritingTitle } = TWCconfig;
  // BlogActivatePerson,
  // blogActivatingphone,
  // BlogActiveMetroFree,
  // blogFinalThoughts,
  // BlogMetroPcs,
  // BlogUserImage,
  return (
    <div>
      <div className=" flex flex-col py-0 lg:py-20">
        <div className=" flex  mt-20">
          <ImageAsset src="BlogMetroPcs" className="w-full object-cover " />
        </div>
        <div className="flex flex-col gap-8 text-[20px] px-2 lg:px-0 mt-20 font-[400] pr-0 lg:pr-20">
          <p className="leading-[32px]">
            MetroPCS (now Metro by T-Mobile) has free phone activation for both
            new and existing clients. There are a variety of ways to activate
            new phones, including calling into customer service, going into a
            store, or activating online. All you need is your account
            information and a Metro SIM card.
          </p>
          <p>
            Keep reading to learn more about how to activate a Metro by T-Mobile
            phone for free, whether you’re a new or existing customer!
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndividualMetroPcs;
