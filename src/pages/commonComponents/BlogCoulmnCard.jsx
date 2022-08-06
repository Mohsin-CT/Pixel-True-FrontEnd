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
    <div>
      <div className="w-full flex flex-col">
        <p className="text-[24px] font-poppin-semibold pb-4">Latest Blogs</p>
        <hr className="border-t-2 pb-4 border-orange-850" />
      </div>
      <div className="flex flex-col">
        {dataArr.map((data) => {
          return (
            <div className="flex items-center mb-6 leading-[30px]">
              <ImageAsset
                className="w-[120px] xl:w-[165.77px] h-[119px] rounded-[10px] object-cover"
                src={data.img}
                alt="Avatar of Jonathan Reinink"
              />
              <div className="pl-5">
                <p className="font-poppin-semibold leading-[1.5] text-[16px] lg:text-[18px] xl:text-[20px]">
                  {data.title}
                </p>
                <p className="text-orange-850 font-[700] text-[16px] lg:text-[18px] xl:text-[20px]">
                  {data.date}

                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full mt-4 mb-7">
        <p className="text-[24px] font-poppin-semibold">Popular Blogs</p>
      </div>
      <div className="w-full mt-2 rounded-[10px]">
        <div class="relative overflow-hidden rounded[10px] shadow-lg h-[250px] lg:h-[299px] ">
          <ImageAsset
            className="object-cover w-full h-full rounded-[10px]"
            src="WindTT"
          />

          <div class="absolute bottom-0 left-0 px-4 py-1">
            <p class=" text-white font-poppin-semibold text-[18px] md:text-[20px] lg:text-[24px]">
              Best Wind Turbines For Your Home: Rankings & Reviews
            </p>
            <h4 class="mb-3 text-[20px] font-poppin-semibold tracking-tight text-white mt-1">
              April 12, 2022
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCoulmnCard;
