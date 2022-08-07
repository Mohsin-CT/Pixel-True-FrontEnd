import React from "react";
import TWCconfig from "../../TWCconfig.json";
import ImageAssets from "./ImageAssets";

const includesData = [
  {
    title: "Activating your phone online",
  },
  {
    title: "Calling the MetroPCS customer service number from another phone",
  },
  {
    title: "Dialing 228 on the phone you want to activate",
  },
  { title: "Going into a Metro store" },
];

const HowToActivate = () => {
  const selectedRoute = localStorage.getItem("SelectedPage");
  console.log("Seleceted Route  ", selectedRoute);
  const { CopywritingSecrets, CopywritingP, CopywritingTitle } = TWCconfig;

  return (
    <div className="flex flex-col py-10 lg:py-20">
      <div>
        {selectedRoute === "individualBlog" ? (
          <ImageAssets src="BlogActiveMetroFree" style={{ width: "100%" }} />
        ) : (
          <ImageAssets src="HowtoActive" style={{ width: "100%" }} />
        )}
      </div>
      <div className="flex gap-8 py-10">
        <div
          className={`w-[0.8rem]  ${
            selectedRoute === "individualBlog"
              ? "bg-orange-850"
              : "bg-green-400"
          }`}
        ></div>
        <div
          className={`"text-[30px] lg:text-[38px] xl:text-[48px] font-poppin-semibold " ${
            selectedRoute === "individualBlog" ? "" : "pr-0"
          }`}
        >
          <h3 className="lg:leading-[56px] leading-6">
            How to Activate a Metro by
            <span className="text-orange-850">
              T-Mobile Phone For <br /> Free &nbsp;
            </span>
            On a New Account
          </h3>
        </div>
      </div>
      <div className="flex flex-col text-[20px] font-Manjari-400 text-gray-850 gap-6 px-2 lg:px-0 pr-0 lg:pr-20">
        <p>
          When it comes to how to activate a MetroPCS phone for free, you’ll be
          happy to know that MetroPCS has free activation for their phones
          across the board!
        </p>
        <p>
          Looking to bring a phone from an old account? Free. What if you bought
          a brand new phone? Still free. Maybe you bought a used phone from
          Facebook Marketplace? 100% free!
        </p>
        <p>
          Even though all of the options are free, you still need to know how to
          go about activating your phone. If you’re a new customer, you have
          several options.
        </p>
      </div>
      <div className="pt-10 lg:py-20 px-4 lg:px-0 flex-col ">
        <div className="flex ">
          <h3 className="text-[24px] font-poppin-bold">This Includes :</h3>
        </div>
        <div className="flex flex-col gap-5 text-[18px] lg:text-[20px] mt-5 text-gray-850 font-[4000]">
          {includesData.map((data) => {
            return (
              <div className="flex gap-4 items-center relative">
                <div
                  className={` h-4 w-4 rounded-full absolute left-0 top-[6px]  ${
                    selectedRoute === "individualBlog"
                      ? "bg-green-400"
                      : "bg-orange-850"
                  } `}
                ></div>
                <h3 className="pl-[25px]">{data.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowToActivate;
