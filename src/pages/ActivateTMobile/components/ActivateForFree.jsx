import React from "react";
import TWCconfig from "../../../TWCconfig.json";
import ImageAsset from "../../commonComponents/ImageAssets";

const ActivateForFree = () => {
  const { CopywritingSecrets, CopywritingP, CopywritingTitle } = TWCconfig;

  return (
    <div className=" pt-10 lg:pt-[50px] xl:py-[100px] border-b-4 border-gray-50">
      <div className="flex flex-col">
        <div>
          <ImageAsset src="ActivateForFree" style={{ width: "100%" }} />
        </div>
        <div className="flex gap-8 py-10">
          <div className="w-[0.5rem]  bg-green-400"></div>
          <div className=" text-[30px] lg:text-[38px] xl:text-[48px] font-poppin-semibold">
            <h3 className="leading-[2rem] lg:leading-[56px]">
              How to Activate a Metro by T-Mobile Phone For Free: Final Thoughts
            </h3>
          </div>
        </div>
        <div className="flex flex-col text-[18px] lg:text-[20px] mt-5 lg:mt-10 font-Manjari-400 text-gray-850 gap-6 ">
          <p className="px-4 lg:pl-0 lg:pr-20">
            Hopefully, by now you know how to activate a Metro by T-Mobile phone
            for free using the simple methods from our article! No matter if you
            have a new or used phone, activating with MetroPCS is a simple
            process.
          </p>
        </div>
      </div>
      <div className="mt-20 border-t-4 flex flex-col border-gray-50 py-10 px-4 lg:px-0 xl:py-20">
        <h3 className="text-[24px] font-poppin-semibold">About the Author</h3>
        <div className="flex items-center gap-10 mt-10 text-[24px] font-poppin-semibold">
          <div className="rounded-full h-20 w-20 bg-gray-250 "></div>
          <h3>Pixel Copy </h3>
        </div>
        <p className="text-[18px] md:text-[20px] mt-10 font-Manjari-400 leading-[32px] text-gray-850">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex justify-between items-center mt-20">
          <h3 className=" text-[20px] lg:text-[24px] font-poppin-semibold">
            More posts by Pixel Copy
          </h3>
          <div className="flex gap-4">
            <button className="border-2 border-orange-850 px-5 py-4 h-fit rounded-lg">
              <ImageAsset src="orangeFacebook" />
            </button>
            <button className="border-2 border-orange-850 px-4 py-4 h-fit rounded-lg">
              <ImageAsset src="orangeSkype" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivateForFree;
