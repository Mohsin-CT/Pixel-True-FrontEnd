import React from "react";
import { Carousel } from "3d-react-carousal";
import userImage from "../../images/Slider/user.png";
import LeftQuote from "../../images/Slider/leftquote.jpg";
import RightQuotes from "../../images/Slider/quote.jpg";
import ImageAsset from "./ImageAssets";

let slides = [
  <div className="flex flex-wrap md:flex-nowrap items-center  bg-white">
    <div className="w-full md:max-w-[250px] lg:max-w-[333px] p-0">
      <img src={userImage} className="h-[220px] md:h-[350px] lg:h-[450px] xl:h-full w-full object-cover" alt="" />
    </div>
    <div className="w-full flex flex-col">
      <div className="flex w-full justify-start">
        <ImageAsset
          src="quotes"
          className="ml-5 mt-5 object-cover"
          style={{ height: "2rem", width: "2rem" }}
        />
      </div>
      <div className="flex flex-col p-[30px] text-left justify-start items-start">
        <h3 className="text-[24px] font-poppin-semibold mb-2">Alice Smith</h3>
        <p className="text-[14px] font-Manjari-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar
          arcu in iaculis lorem. Mattis varius scelerisque dictum duis varius
          morbi scelerisque. Interdum mi venenatis malesuada egestas sed
          consectetur cras dictum diam.{" "}
        </p>
      </div>
      <div className="flex w-full justify-end mb-[20px]">
        <ImageAsset
          src="leftquote"
          className="mr-5 -mt-5 object-cover"
          style={{ height: "2rem", width: "2rem" }}
        />
      </div>
    </div>
  </div>,
  <div className="flex flex-wrap md:flex-nowrap items-center bg-white">
    <div className="w-full md:max-w-[250px] lg:max-w-[333px] p-0">
      <img src={userImage} className="h-[220px] md:h-[350px] lg:h-[450px] xl:h-full w-full object-cover" alt="" />
    </div>
    <div className="w-full flex flex-col">
      <div className="flex w-full justify-start">
        <ImageAsset
          src="quotes"
          className="ml-5 mt-5"
          style={{ height: "2rem", width: "2rem" }}
        />
      </div>
      <div className="flex flex-col p-[30px] text-left justify-start items-start">
        <h3 className="text-[24px] font-poppin-semibold mb-2">Alice Smith</h3>
        <p className="text-[14px] font-Manjari-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar
          arcu in iaculis lorem. Mattis varius scelerisque dictum duis varius
          morbi scelerisque. Interdum mi venenatis malesuada egestas sed
          consectetur cras dictum diam.{" "}
        </p>
      </div>
      <div className="flex w-full justify-end mb-[20px]">
        <ImageAsset
          src="leftquote"
          className="mr-5 -mt-5"
          style={{ height: "2rem", width: "2rem" }}
        />
      </div>
    </div>
  </div>,
  <div className="flex flex-wrap md:flex-nowrap items-center  bg-white">
    <div className="w-full md:max-w-[250px] lg:max-w-[333px] p-0">
      <img src={userImage} className="h-[220px] md:h-[350px] lg:h-[450px] xl:h-full w-full object-cover" alt="" />
    </div>
    <div className="w-full flex flex-col">
      <div className="flex w-full justify-start">
        <ImageAsset
          src="quotes"
          className="ml-5 mt-5"
          style={{ height: "2rem", width: "2rem" }}
        />
      </div>
      <div className="flex flex-col p-[30px] text-left justify-start items-start">
        <h3 className="text-[24px] font-poppin-semibold mb-2">Alice Smith</h3>
        <p className="text-[14px] font-Manjari-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar
          arcu in iaculis lorem. Mattis varius scelerisque dictum duis varius
          morbi scelerisque. Interdum mi venenatis malesuada egestas sed
          consectetur cras dictum diam.{" "}
        </p>
      </div>
      <div className="flex w-full justify-end mb-[20px]">
        <ImageAsset
          src="leftquote"
          className="mr-5 -mt-5"
          style={{ height: "2rem", width: "2rem" }}
        />
      </div>
    </div>
  </div>,
  <div className="flex flex-wrap md:flex-nowrap items-center bg-white">
    <div className="w-full w-full md:max-w-[250px] lg:w-[333px] p-0">
      <img src={userImage} className="h-[220px] md:h-[350px] lg:h-[450px] xl:h-full w-full object-cover" alt="" />
    </div>
    <div className="w-full flex flex-col">
      <div className="flex w-full justify-start">
        <ImageAsset
          src="quotes"
          className="ml-5 mt-5"
          style={{ height: "2rem", width: "2rem" }}
        />
      </div>
      <div className="flex flex-col p-[30px] text-left justify-start items-start">
        <h3 className="text-[24px] font-poppin-semibold mb-2">Alice Smith</h3>
        <p className="text-[14px] font-Manjari-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar
          arcu in iaculis lorem. Mattis varius scelerisque dictum duis varius
          morbi scelerisque. Interdum mi venenatis malesuada egestas sed
          consectetur cras dictum diam.{" "}
        </p>
      </div>
      <div className="flex w-full justify-end mb-[20px]">
        <ImageAsset
          src="leftquote"
          className="mr-5 -mt-5"
          style={{ height: "2rem", width: "2rem" }}
        />
      </div>
    </div>
  </div>,
  <div className="flex flex-wrap md:flex-nowrap items-center bg-white">
    <div className="w-full md:max-w-[250px] lg:w-[333px] p-0">
      <img src={userImage} className="h-[220px] md:h-[350px] lg:h-[450px] xl:h-full w-full object-cover" alt="" />
    </div>
    <div className="w-full flex flex-col">
      <div className="flex w-full justify-start">
        <ImageAsset
          src="quotes"
          className="ml-5 mt-5"
          style={{ height: "2rem", width: "2rem" }}
        />
      </div>
      <div className="flex flex-col p-[30px] text-left justify-start items-start">
        <h3 className="text-[24px] font-poppin-semibold mb-2">Alice Smith</h3>
        <p className="text-[14px] font-Manjari-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar
          arcu in iaculis lorem. Mattis varius scelerisque dictum duis varius
          morbi scelerisque. Interdum mi venenatis malesuada egestas sed
          consectetur cras dictum diam.{" "}
        </p>
      </div>
      <div className="flex w-full justify-end mb-[20px]">
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
