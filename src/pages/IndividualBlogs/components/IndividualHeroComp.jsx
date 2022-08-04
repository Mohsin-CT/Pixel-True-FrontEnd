import React from "react";

const individualHero = () => {
  return (
    <div>
      <div className="bg-orange-150 ">
        <div className="flex justify-center">
          <div className="container marker:flex flex-col px-4  py-20">
            <div>
              <h3 className="text-[26px] lg:text-[64px] font-[600]">
                How to Activate a Metro by <br />
                <span className="text-orange-850">T-Mobile Phone For Free</span>
              </h3>
            </div>
            <div className="flex flex-col lg:flex-row   gap-4 mt-5 text-[24px] font-[600] items-start">
              <div>
                <h3>March 8, 2022</h3>
              </div>
              <div className="flex gap-3 items-center">
                <div className="h-8 w-2 bg-orange-850"></div>
                <h3 className="text-orange-850">Graham Sawrey</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default individualHero;
