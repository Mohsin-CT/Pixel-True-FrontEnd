import React from "react";
import TWCconfig from "../../TWCconfig.json";
import ImageAssets from "../commonComponents/ImageAssets";
import Card from "./Card";
const cardData = [
  {
    title: "Mckinney Drain Repair (Plumbing Services in Texas)",
    desc: "Our Murley Plumbing professionals have served the businesses and residents of Mckinney, Texas ",
    img: "writingPipe",
  },
  {
    title: "Mckinney Drain Repair (Plumbing Services in Texas)",
    desc: "Our Murley Plumbing professionals have served the businesses and residents of Mckinney, Texas ",
    img: "WritingDog",
  },
];

const RecommendedBlogs = () => {
  const {
    writingmainContainer,
    writingmainDiv,
    gridMainContainer,
    TagsMainContainer,
    extracardMainContainer,
    extractSubContainer,
    seePricing,
    welive,
    hireusContainer,
    hireUs,
  } = TWCconfig;

  return (
    <div className="px-4 lg:px-0 pt-10">
      <div className=" text-[20px] lg:text-[48px] font-[600]">
        <h3>Recommended blogs</h3>
      </div>
      <div>
        <div className={gridMainContainer}>
          <div className={extracardMainContainer}>
            <div className={extractSubContainer}>
              <div className={hireusContainer}>
                <h3 className={hireUs}>Hire a U.S Copywriting team</h3>
                <p className={welive}>
                  We live, eat, breath and sleep copy. Hire a team from people
                  that actually walk the walk and talk the talk.
                </p>
                <div className="flex justify-center mt-5">
                  <button className={seePricing}>See Pricing</button>
                </div>
              </div>
            </div>
          </div>
          {cardData.map((data) => {
            return (
              <div
                className="shadow-2xl  rounded-lg"
                onClick={() =>
                  localStorage.setItem("SelectedPage", "pixelCopyBlog")
                }
              >
                <a href="/pixelCopyBlog">
                  <Card data={data} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecommendedBlogs;
