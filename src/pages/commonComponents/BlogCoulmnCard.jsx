import React from "react";
import ImageAsset from "./ImageAssets";

const dataArr = [
  {
    title: "The 6 Best Bark Collars For Small Dogs.....",
    date: "February 27, 2022",
    img: "DogCollar",
  },
  {
    title: "Best Wind Turbines For Your Home: Rankings...",
    date: "April 12, 2022",
    img: "WindT",
  },
  {
    title: "Brindle Poodle Breed And Coat Coloration ",
    date: "October 25, 2022",
    img: "BigDog",
  },
  {
    title: "Solar Thermal Power Plants: Pros And Cons",
    date: "October 25, 2022",
    img: "SolarP",
  },
];

const BlogCoulmnCard = () => {
  return (
    <div className="">
      <div className="w-full flex flex-col">
        <p className="text-[24px] font-[600] pb-4">Latest Blogs</p>
        <hr className="border-t-2 xl:w-[437px] pb-4 border-orange-850 max-w-[90%]" />
      </div>
      <div className="flex flex-col">
        {dataArr.map((data) => {
          return (
            <div className="flex items-center mb-6 xl:w-[437px] max-w-[90%] leading-[30px]">
              <ImageAsset
                className="w-[165.77px] h-[119px] rounded-[10px] object-cover"
                src={data.img}
                alt="Avatar of Jonathan Reinink"
              />
              <div className="pl-5">
                <p className="font-[600] text-[20px] xl:w-[235px] max-w-[90%]">
                  {data.title}
                </p>
                <p className="text-orange-850 font-[700] text-[20px]">
                  {data.date}

                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full mt-4 mb-7">
        <p className="text-[24px] font-[600]">Popular Blogs</p>
      </div>
      <div className="max-w-[90%] w-full xl:w-[437px] mt-2 rounded-[10px]">
        <div class="relative overflow-hidden rounded[10px] shadow-lg max-w-[90%] xl:w-[437px] h-[299px] ">
          <ImageAsset
            className="object-cover lg:w-[437px] h-full rounded-[10px]"
            src="WindTT"
          />

          <div class="absolute bottom-0 left-0 px-4 py-1">
            <p class=" text-white font-[600] text-[24px]">
              Best Wind Turbines For Your Home: Rankings & Reviews
            </p>
            <h4 class="mb-3 text-[20px] font-[600] tracking-tight text-white mt-1">
              April 12, 2022
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCoulmnCard;
