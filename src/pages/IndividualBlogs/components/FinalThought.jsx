import React from "react";
import ImageAsset from "../../commonComponents/ImageAssets";
const FinalThought = () => {
  return (
    <div className="flex flex-col mt-20">
      <div>
        <ImageAsset src="blogFinalThoughts" style={{ width: "100%" }} />
      </div>
      <div className="flex gap-8 py-10">
        <div className="w-[0.5rem]  bg-green-400"></div>
        <div className="text-[20px]  lg:text-[48px] font-[600] ">
          <h3 className="leading-[2rem] lg:leading-[56px]">
            How to Activate a Metro by T-Mobile <br /> Phone For Free:
            <span className="text-orange-850">Final Thoughts</span>
          </h3>
        </div>
      </div>
      <div className="flex flex-col text-[24px] font-[400] text-gray-850 gap-6 px-4 lg:pl-0 lg:pr-10">
        <p className=" px-0 lg:pl-0  lg:pr-20">
          Hopefully, by now you know how to activate a Metro by T-Mobile phone
          for free using the simple methods from our article! No matter if you
          have a new or used phone, activating with MetroPCS is a simple
          process.
        </p>
      </div>
    </div>
  );
};

export default FinalThought;
