import React from "react";
import TWCconfig from "../../TWCconfig.json";
import ImageAsset from "./ImageAssets";

const AlreadyAccountListData = [
  { title: "Remove your SIM card from your old phone" },
  { title: " Insert the SIM card into your new phone" },
  { title: " Wait a few moments for the network to initialize" },
];

const MetroPCS = [
  { title: "T-Mobile" },
  { title: "AT&T" },
  { title: "iPhones from Verizon and US Cellular (except the iPhone 4)" },
  { title: "New, unlocked phones" },
];

const AcquirdList = [
  { title: "At a MetroPCS store" },
  { title: "By calling customer service" },
  { title: "By purchasing it from the MetroPCS website" },
];

const AlreadyHaveAccount = () => {
  const location = localStorage.getItem("SelectedPage");
  const { CopywritingSecrets, CopywritingP, CopywritingTitle } = TWCconfig;

  return (
    <div>
      <div className="flex flex-col py-20">
        <div>
          {location === "individualBlog" ? (
            <ImageAsset src="BlogActivatePerson" style={{ width: "100%" }} />
          ) : (
            <ImageAsset src="AlreadyActivate" style={{ width: "100%" }} />
          )}
        </div>
        <div className="flex gap-8 py-10">
          <div className="w-[0.5rem]  bg-green-400"></div>
          <div className="text-[20px]  lg:text-[48px] font-[600] ">
            <h3 className="leading-[2rem] lg:leading-[56px]">
              If You Already Have a Metro by &nbsp;
              <span className="text-orange-850">T-Mobile Account</span>
            </h3>
          </div>
        </div>
        <div className="flex flex-col text-[24px] font-[400] text-gray-850 gap-6 px-4 lg:pl-0 lg:pr-10">
          <p className=" px-0 lg:pl-0  lg:pr-20">
            If you already have a Metro by T-Mobile account and your new phone
            is set up for use with Metro, learning how to activate a Metro phone
            for free becomes much simpler.
          </p>
        </div>
        <div
          className={`  ${
            location === "individualBlog"
              ? "px-0 py-10 "
              : "px-4 lg:px-[18rem] py-10 lg:py-20"
          }`}
        >
          <div
            className={` p-10 lg:p-20 ${
              location === "individualBlog" ? "bg-green-150" : "bg-orange-50"
            }`}
          >
            <div className="flex-col">
              <div className="flex ">
                <h3 className="text-[24px] font-[700]">
                  To activate a phone on your existing account, follow these
                  steps:
                </h3>
              </div>
              <div className="flex flex-col gap-5 text-[20px] mt-5 text-gray-850 font-[4000]">
                {AlreadyAccountListData.map((data, index) => {
                  return (
                    <div className="flex gap-4 items-center">
                      <div
                        className={`h-4 w-4 rounded-full ${
                          location === "individualBlog"
                            ? "bg-green-400"
                            : "bg-orange-850"
                        }`}
                      ></div>
                      <h3>
                        <span className="font-[400] text-[24px]">
                          Step {index + 1}:
                        </span>
                        {data.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="text-[20px] font-[400] px-4 lg:pl-0 lg:pr-20">
          <p>
            That’s it! You’re all done and your new phone should be ready for
            use. The only time there will be any additional steps is if your new
            phone is from a different carrier (see below).
          </p>
        </div>
        <div>
          {location === "individualBlog" && (
            <div className="mt-5">
              <ImageAsset src="blogActivatingphone" style={{ width: "100%" }} />
            </div>
          )}
          <div className="flex gap-8 py-10 mt-2 lg:mt-20">
            <div className="w-[0.5rem]  bg-green-400"></div>
            <div className="text-[20px] lg:text-[48px] font-[600] ">
              <h3 className="leading-[2rem] lg:leading-[56px]">
                Activating a Phone You Brought Over From Another <br /> Carrier
              </h3>
            </div>
          </div>
          <div className="flex flex-col px-4 lg:pl-0 lg:pr-20 text-[20px] gap-10 font-[400]">
            <p>
              If you’re activating a phone that you had with a different
              carrier, you’ll first need to make sure that it’s compatible with
              MetroPCS.
            </p>
            <p>
              Since MetroPCS uses GSM networks, your phone will need to be
              compatible with that.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-10 px-4 lg:px-0 lg:mt-20">
          <div className="flex ">
            <h3 className="text-[24px] font-[700]">
              Here are some carriers whose phones are compatible with MetroPCS:
            </h3>
          </div>
          <div className="flex flex-col gap-5 text-[20px] mt-8 text-gray-850 font-[4000]">
            {MetroPCS.map((data) => {
              return (
                <div className="flex gap-4 items-center">
                  <div
                    className={`h-4 w-4 rounded-full  ${
                      location === "individualBlog"
                        ? "bg-green-400"
                        : "bg-orange-850"
                    }`}
                  ></div>
                  <h3>{data.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col mt-14 gap-10 text-[20px] font-[400] px-4 lg:pl-0 lg:pr-20">
          <p>
            If you have a newer phone that’s from a network other than T-Mobile
            or AT&T, there’s a chance that yours may be compatible. Newer phones
            are increasingly coming out with GSM capability, no matter their
            carrier.
          </p>
          <p>
            After determining that your phone is compatible, you need to get a
            SIM card. If you need one of these, you’ll have to pay a nominal $10
            fee for the kit.
          </p>
        </div>

        <div className="flex flex-col px-4 lg:px-0 mt-14">
          <div className="flex ">
            <h3 className="text-[24px] font-[700]">
              This can be acquired in several different ways:
            </h3>
          </div>
          <div className="flex flex-col gap-5 text-[20px] mt-2 text-gray-850 font-[4000]">
            {AcquirdList.map((data) => {
              return (
                <div className="flex gap-4 items-center">
                  <div
                    className={` h-4 w-4 rounded-full  ${
                      location === "individualBlog"
                        ? "bg-green-400"
                        : "bg-orange-850"
                    }`}
                  ></div>
                  <h3>{data.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlreadyHaveAccount;
