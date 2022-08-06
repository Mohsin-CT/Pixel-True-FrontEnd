import React from "react";
import TWCconfig from "../../TWCconfig.json";
import ImageAssets from "./ImageAssets";

const includesListData = [
  { title: "Activating your phone" },
  { title: "Taking personal information to start your account" },
  { title: "Taking payment for your first month’s bill" },
];

const ActivateSteps = () => {
  const location = localStorage.getItem("SelectedPage");
  const { CopywritingSecrets, CopywritingP, CopywritingTitle } = TWCconfig;

  return (
    <div className="flex flex-col px-4 py-10 lg:pl-0 lg:pr-20 lg:py-20 gap-20 ">
      <div className="flex flex-col gap-6">
        <h3 className="text-[32px] lg:text-[38px] xl:text-[48px] leading-[2.5rem] font-poppin-semibold lg:leading-none ">
          Activate Your Phone Online
        </h3>
        <p className="text-[18px] lg:text-[20px] font-Manjari-400 text-gray-850">
          On the Metro by T-Mobile website, there’s an Online Activation Tools
          option located under the New Accounts tab. This page will take you
          through the step-by-step instructions to activate your phone and
          create a new Metro by T-Mobile account.
        </p>
        <p className="text-[18px] lg:text-[20px] font-Manjari-400 text-gray-850">
          You’ll need to provide personal information such as your name and
          address, as well as the information for the phone you want to
          activate. This includes the ESN or IMEI number, which is usually
          located on a sticker underneath the phone’s battery.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-[32px] lg:text-[38px] xl:text-[48px] leading-[2.5rem] font-poppin-semibold">
          Activate by Calling Customer Service
        </h3>
        <p className="text-[18px] lg:text-[20px] font-Manjari-400 text-gray-850">
          By calling (888) 8METRO8, on a phone other than the one being
          activated (or deactivated, if you’re activating a new phone on an
          existing line), you can quickly activate your new phone.
        </p>
        <p className="text-[18px] lg:text-[20px] font-Manjari-400 text-gray-850">
          The customer service representative will help you with the activation
          process.
        </p>
        <p className="text-[18px] lg:text-[20px] font-Manjari-400 text-gray-850">
          Similar to activating online, you’ll need to provide your personal
          information to set up your new account, then the ESN or IMEI number
          for your new phone.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-[32px] lg:text-[38px] xl:text-[48px] font-poppin-semibold">
          Activate by Calling 228
        </h3>
        <p className="text-[18px] lg:text-[20px] font-Manjari-400 text-gray-850">
          If you don’t have another phone nearby and the phone you’re activating
          is already a Metro device, you can dial 228 to activate it. This
          process is simple and your phone will be unlocked moments after
          hanging up.
        </p>
      </div>
      <div className="flex-col">
        <div className="flex ">
          <h3 className="text-[22px] xl:text-[24px] font-poppin-bold">
            The automated system can handle many different tasks This Includes :
          </h3>
        </div>
        <div className="flex flex-col gap-5 text-[18px] lg:text-[20px] mt-5 text-gray-850 font-[4000]">
          {includesListData.map((data) => {
            return (
              <div className="flex gap-4 items-center relative">
                <div
                  className={`h-4 w-4 rounded-full absolute left-0 top-[6px] ${
                    location === "individualBlog"
                      ? "bg-green-400"
                      : "bg-orange-850"
                  }`}
                ></div>
                <h3 className="pl-[25px]">{data.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-[32px] lg:text-[38px] xl:text-[48px] leading-[2.5rem] font-poppin-semibold">
          Activate in Person
        </h3>
        <p className="text-[18px] lg:text-[20px] font-Manjari-400 text-gray-850">
          If you prefer a personal touch or simply don’t like activating over
          the phone, you can also drop by a MetroPCS store or service center to
          have a sales representative assist you in activating your phone and
          setting up your account.
        </p>
        <p className="text-[18px] lg:text-[20px] font-Manjari-400 text-gray-850">
          This option is nice for those who aren’t tech-savvy, or if you need to
          visit the store anyway to purchase your new phone. Since you’re
          already there, you might as well have them handle the process for you!
        </p>
      </div>
    </div>
  );
};

export default ActivateSteps;
