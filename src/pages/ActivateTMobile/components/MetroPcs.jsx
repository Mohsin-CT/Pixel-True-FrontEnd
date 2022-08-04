import React from "react";
import TWCconfig from "../../../TWCconfig.json";
import ImageAsset from "../../commonComponents/ImageAssets";

const MetroPcs = () => {
  const { CopywritingSecrets, CopywritingP, CopywritingTitle } = TWCconfig;

  return (
    <div>
      <div className=" flex flex-col py-20">
        <div className="flex flex-col gap-10 lg:gap-0  lg:flex-row px-5 lg:px-20 ">
          <div className="w-full lg:w-[30%] flex justify-between ">
            <div className="flex flex-col">
              <h3 className="text-[24px] font-[700]">Author</h3>
              <h3 className="text-[20px] text-orange-850 font-[600]">
                Pixel Copy
              </h3>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[24px] font-[700]">Published on</h3>
              <h3 className="text-[20px] text-orange-850 font-[600]">
                March 8, 2022
              </h3>
            </div>
          </div>

          <div className="w-full lg:w-[70%] flex justify-center lg:ustify-end gap-6">
            <button className="flex justify-center px-12 h-fit gap-4 py-3 items-center bg-orange-850 text-white font-[600] text-[10px] lg:text-[20px] rounded-xl">
              <ImageAsset src="copyLink" className="h-5 w-5 lg:h-8 lg:w-8" />
              Copy link
            </button>
            <button className="bg-orange-850 rounded-lg p-4 h-fit">
              <ImageAsset src="facebook" className="h-3 w-3 lg:h-6 lg:w-6" />
            </button>
            <button className="bg-orange-850 rounded-lg p-4 h-fit">
              <ImageAsset src="skype" className="h-3 w-3 lg:h-6 lg:w-6" />
            </button>
          </div>
        </div>
        <div className=" flex relative mt-20">
          <ImageAsset
            src="AtivateQuotesEnd"
            className="absolute hidden lg:flex bottom-[-7rem] left-[-6rem]"
          />
          <ImageAsset
            src="ActivateQuotesStart"
            className="absolute hidden lg:flex top-[-2rem] right-[-10.5rem]"
          />
          <ImageAsset
            src="ActiveTMobileHeader"
            className="w-full object-cover "
          />
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

export default MetroPcs;
