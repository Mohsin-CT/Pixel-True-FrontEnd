import React from "react";
import TWCconfig from "../../TWCconfig.json";
import ImageAssets from "./ImageAssets";

const InformationBox = () => {
  const location = localStorage.getItem("SelectedPage");
  const { CopywritingSecrets, CopywritingP, CopywritingTitle } = TWCconfig;

  return (
    <div
      className={`flex justify-center   ${
        location === "individualBlog"
          ? "bg-green-150 pl-0 lg:pl-20"
          : "p-0 bg-orange-50"
      }`}
    >
      <div className="container py-10 px-4 lg:pl-0 lg:py-20 lg:pr-20">
        <div className="flex flex-col text-[24px] text-gray-850 font-[400] gap-10">
          <p>
            As long as you have your Metro by T-Mobile SIM card, all of these
            options are available to you. If you don’t have a SIM card, you’ll
            need to either go into a store for activation or call customer
            service to have them ship you a SIM card before you can proceed with
            activation.
          </p>
          <p>
            A SIM card is included in the package when you buy a new Metro
            phone. If you’re buying your phone secondhand, you’ll need to call
            the company to get one.
          </p>
          <p>
            Since MetroPCS is a prepaid service, you’ll have to pay your first
            month’s bill upfront if you’re starting a new account in addition to
            activating.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InformationBox;
