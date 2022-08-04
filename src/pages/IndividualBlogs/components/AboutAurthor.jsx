import React from "react";
import ImageAsset from "../../commonComponents/ImageAssets";

const AboutAurthor = () => {
  return (
    <div>
      <div className="mt-20 border-t-4 flex flex-col border-gray-50 py-10 px-4 lg:px-0 lg:py-20">
        <h3 className="text-[24px] font-[600]">About the Author</h3>
        <div className="flex items-center gap-10 mt-10 text-[24px] font-[600] ">
          <div className="rounded-full h-20 w-20 bg-gray-250 ">
            <ImageAsset src="BlogUserImage" />
          </div>
          <div className="flex flex-col">
            <h3>Graham Sawrey </h3>
            <h3 className="text-orange-850 opacity-50">Lorem Ipsum</h3>
          </div>
        </div>
        <p className="text-[20px] mt-10 font-[400] leading-[32px] text-gray-850">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex justify-between items-center mt-20">
          <h3 className=" text-[16px] lg:text-[24px] font-[600]">
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

      <div className="flex flex-col  border-t-4  border-gray-150 ">
        <div className="flex text-[24px] font-[600] pt-20 justify-start">
          <h3 className="">Post a Reply</h3>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row   mt-10">
          <div className="w-full lg:w-1/2">
            <textarea
              name=""
              className="h-[20rem] w-full pt-8 pl-8 text-[20px] font-[400] rounded-[3rem] bg-gray-150 border border-gray-200"
              id=""
              cols="30"
              rows="10"
              placeholder="Comment"
            ></textarea>
          </div>
          <div className="w-full lg:w-1/2 gap-10 flex flex-col">
            <input
              type="text"
              className="h-20 w-full pl-10 rounded-[3rem] flex items-center bg-gray-150"
              placeholder="Name*"
            />
            <input
              type="text"
              className="h-20 w-full pl-10 rounded-[3rem] flex items-center bg-gray-150"
              placeholder="Email*"
            />
            <button className="flex justify-center items-center bg-orange-850 text-white text-[24px] font-[700] rounded-[3rem] w-full py-6">
              Post Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAurthor;
