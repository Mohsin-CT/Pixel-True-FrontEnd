import React from "react";

const TableOfContent = () => {
  return (
    <div>
      <div className="flex justify-center bg-green-150 px-[20px] lg:px-[50px] xl:px-[100px] mt-[50px]">
        <div className="container px-4 lg:px-0 py-20 flex-col">
          <div className="flex ">
            <h3 className="text-[20px] md:text-[24px] font-poppin-bold">Table of Contents</h3>
          </div>
          <div className="flex flex-col gap-5 text-[18px] lg:text-[20px] mt-5 text-gray-850 font-[4000]">
            <div className="flex gap-3 items-center relative">
              <div className="h-4 w-4 rounded-full bg-green-400 absolute left-0 top-[6px]"></div>
              <h3 className="pl-[25px]">
                How to Activate a Metro by T-Mobile Phone For Free On a New
                Account
              </h3>
            </div>
            <div className="flex gap-3 items-center relative">
              <div className="h-4 w-4 rounded-full bg-green-400 absolute left-0 top-[6px]"></div>
              <h3 className="pl-[25px]">If You Already Have a Metro by T-Mobile Account</h3>
            </div>
            <div className="flex gap-3 items-center relative">
              <div className="h-4 w-4 rounded-full bg-green-400 absolute left-0 top-[6px]"></div>
              <h3 className="pl-[25px]">Activating a Phone You Brought Over From Another Carrier</h3>
            </div>
            <div className="flex gap-3 items-center relative">
              <div className="h-4 w-4 rounded-full bg-green-400 absolute left-0 top-[6px]"></div>
              <h3 className="pl-[25px]">
                How to Activate a Metro by T-Mobile Phone For Free: Final
                Thoughts
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContent;
