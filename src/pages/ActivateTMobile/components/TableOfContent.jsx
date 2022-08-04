import React from "react";
import TWCconfig from "../../../TWCconfig.json";
import ImageAsset from "../../commonComponents/ImageAssets";

const TableOfContent = () => {
  const { CopywritingSecrets, CopywritingP, CopywritingTitle } = TWCconfig;

  return (
    <div className="flex justify-center bg-orange-50 ">
      <div className="container px-4 lg:px-0 py-20 flex-col">
        <div className="flex ">
          <h3 className="text-[24px] font-[700]">Table of Contents</h3>
        </div>
        <div className="flex flex-col gap-5 text-[20px] mt-5 text-gray-850 font-[4000]">
          <div className="flex gap-3 items-center">
            <div className="h-4 w-4 rounded-full bg-orange-850"></div>
            <h3 className="">
              How to Activate a Metro by T-Mobile Phone For Free On a New
              Account
            </h3>
          </div>
          <div className="flex gap-3 items-center">
            <div className="h-4 w-4 rounded-full bg-orange-850 "></div>
            <h3>If You Already Have a Metro by T-Mobile Account</h3>
          </div>
          <div className="flex gap-3 items-center">
            <div className="h-4 w-4 rounded-full bg-orange-850 "></div>
            <h3>Activating a Phone You Brought Over From Another Carrier</h3>
          </div>
          <div className="flex gap-3 items-center">
            <div className="h-4 w-4 rounded-full bg-orange-850 "></div>
            <h3>
              How to Activate a Metro by T-Mobile Phone For Free: Final Thoughts
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContent;
