import React from "react";
import { Carousel } from "3d-react-carousal";
import userImage from "../../images/Slider/user.png";
import LeftQuote from "../../images/Slider/leftquote.jpg";
import RightQuotes from "../../images/Slider/quote.jpg";
import ImageAsset from "./ImageAssets";

let slides = [
  <div className="flex  bg-white">
    <div className="w-[35%] p-0">
      <img src={userImage} className="h-full w-full" alt="" />
    </div>
    <div className="w-[65%] flex flex-col">
      <div className="flex w-full justify-start">
        <ImageAsset
          src="quotes"
          className="ml-5 mt-5"
          style={{ height: "2rem", width: "2rem" }}
        />
      </div>
      <div className="flex flex-col py-10 text-left justify-start items-start px-4">
        <h3 className="text-[24px] font-[600]">Alice Smith</h3>
        <p className="text-[14px] font-[400]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar
          arcu in iaculis lorem. Mattis varius scelerisque dictum duis varius
          morbi scelerisque. Interdum mi venenatis malesuada egestas sed
          consectetur cras dictum diam.{" "}
        </p>
      </div>
      <div className="flex w-full justify-end">
        <ImageAsset
          src="leftquote"
          className="mr-5 -mt-5"
          style={{ height: "2rem", width: "2rem" }}
        />
      </div>
    </div>
  </div>,
  <div className="flex  bg-white">
    <div className="w-[35%] p-0">
      <img src={userImage} className="h-full w-full" alt="" />
    </div>
    <div className="w-[65%] flex flex-col">
      <div className="flex w-full justify-start">
        <ImageAsset
          src="quotes"
          className="ml-5 mt-5"
          style={{ height: "2rem", width: "2rem" }}
        />
      </div>
      <div className="flex flex-col py-10 text-left justify-start items-start px-4">
        <h3 className="text-[24px] font-[600]">Alice Smith</h3>
        <p className="text-[14px] font-[400]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar
          arcu in iaculis lorem. Mattis varius scelerisque dictum duis varius
          morbi scelerisque. Interdum mi venenatis malesuada egestas sed
          consectetur cras dictum diam.{" "}
        </p>
      </div>
      <div className="flex w-full justify-end">
        <ImageAsset
          src="leftquote"
          className="mr-5 -mt-5"
          style={{ height: "2rem", width: "2rem" }}
        />
      </div>
    </div>
  </div>,
  <div className="flex  bg-white">
    <div className="w-[35%] p-0">
      <img src={userImage} className="h-full w-full" alt="" />
    </div>
    <div className="w-[65%] flex flex-col">
      <div className="flex w-full justify-start">
        <ImageAsset
          src="quotes"
          className="ml-5 mt-5"
          style={{ height: "2rem", width: "2rem" }}
        />
      </div>
      <div className="flex flex-col py-10 text-left justify-start items-start px-4">
        <h3 className="text-[24px] font-[600]">Alice Smith</h3>
        <p className="text-[14px] font-[400]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar
          arcu in iaculis lorem. Mattis varius scelerisque dictum duis varius
          morbi scelerisque. Interdum mi venenatis malesuada egestas sed
          consectetur cras dictum diam.{" "}
        </p>
      </div>
      <div className="flex w-full justify-end">
        <ImageAsset
          src="leftquote"
          className="mr-5 -mt-5"
          style={{ height: "2rem", width: "2rem" }}
        />
      </div>
    </div>
  </div>,
  <div className="flex  bg-white">
    <div className="w-[35%] p-0">
      <img src={userImage} className="h-full w-full" alt="" />
    </div>
    <div className="w-[65%] flex flex-col">
      <div className="flex w-full justify-start">
        <ImageAsset
          src="quotes"
          className="ml-5 mt-5"
          style={{ height: "2rem", width: "2rem" }}
        />
      </div>
      <div className="flex flex-col py-10 text-left justify-start items-start px-4">
        <h3 className="text-[24px] font-[600]">Alice Smith</h3>
        <p className="text-[14px] font-[400]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar
          arcu in iaculis lorem. Mattis varius scelerisque dictum duis varius
          morbi scelerisque. Interdum mi venenatis malesuada egestas sed
          consectetur cras dictum diam.{" "}
        </p>
      </div>
      <div className="flex w-full justify-end">
        <ImageAsset
          src="leftquote"
          className="mr-5 -mt-5"
          style={{ height: "2rem", width: "2rem" }}
        />
      </div>
    </div>
  </div>,
  <div className="flex  bg-white">
    <div className="w-[35%] p-0">
      <img src={userImage} className="h-full w-full" alt="" />
    </div>
    <div className="w-[65%] flex flex-col">
      <div className="flex w-full justify-start">
        <ImageAsset
          src="quotes"
          className="ml-5 mt-5"
          style={{ height: "2rem", width: "2rem" }}
        />
      </div>
      <div className="flex flex-col py-10 text-left justify-start items-start px-4">
        <h3 className="text-[24px] font-[600]">Alice Smith</h3>
        <p className="text-[14px] font-[400]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar
          arcu in iaculis lorem. Mattis varius scelerisque dictum duis varius
          morbi scelerisque. Interdum mi venenatis malesuada egestas sed
          consectetur cras dictum diam.{" "}
        </p>
      </div>
      <div className="flex w-full justify-end">
        <ImageAsset
          src="leftquote"
          className="mr-5 -mt-5"
          style={{ height: "2rem", width: "2rem" }}
        />
      </div>
    </div>
  </div>,

  //   <img src="https://picsum.photos/800/301/?random" alt="2" />,
  //   <img src="https://picsum.photos/800/302/?random" alt="3" />,
  //   <img src="https://picsum.photos/800/303/?random" alt="4" />,
  //   <img src="https://picsum.photos/800/304/?random" alt="5" />,
];

const callback = function (index) {
  console.log("callback", index);
};

const SliderView = () => {
  return (
    <div className="w-full  ">
      <div>
        <Carousel slides={slides} interval={1000} onSlideChange={callback} />
      </div>
    </div>
  );
};

export default SliderView;
