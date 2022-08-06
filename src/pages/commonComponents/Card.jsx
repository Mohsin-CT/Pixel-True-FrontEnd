import React, { useState, useEffect } from "react";
import ImageAsset from "./ImageAssets";

export default function Card(props) {
  const {} = props;
  return (
    <div className="flex pb-6 flex-col gap-5 relative shadow-3xl rounded-lg">
      <button className="absolute px-6 py-1 text-[18px] lg:text-[20px] text-white font-poppin-semibold bg-opacity-70 rounded-md bg-lightgreen-150 top-8 left-8 ">
        Service
      </button>

      <ImageAsset src={props.data.img} className="rounded-t-2xl object-cover" />

      <div className="flex px-6 flex-col gap-5">
        <h3 className="text-[20px] xl:text-[24px] font-poppin-bold leading-[1.6]">
          {props.data.title}
        </h3>
        <p className="text-[18px] xl:text-[20px] font-Manjari-400 leading-[1.6]">
          {props.data.desc}
        </p>
        <h6 className="text-[18px] font-[700]">By Barkva.org</h6>
        <div className="flex justify-between border-t pt-5 ">
          <button className="text-[16px] xl:text-[18px] font-[700] text-orange-750 outline-none border-none">
            February 27, 2022
          </button>
          <button className="text-[16px] xl:text-[18px] font-[700] text-orange-750 outline-none border-none">
            5 Min Read
          </button>
        </div>
      </div>
    </div>
  );
}
