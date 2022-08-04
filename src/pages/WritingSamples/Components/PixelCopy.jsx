import React, { useState, useEffect } from "react";
import Card from "../../commonComponents/Card";
import TWCconfig from "../../../TWCconfig.json";

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
  {
    title: "Mckinney Drain Repair (Plumbing Services in Texas)",
    desc: "Our Murley Plumbing professionals have served the businesses and residents of Mckinney, Texas ",
    img: "WritingTools",
  },
  {
    title: "Mckinney Drain Repair (Plumbing Services in Texas)",
    desc: "Our Murley Plumbing professionals have served the businesses and residents of Mckinney, Texas ",
    img: "writingPipe",
  },
  {
    title: "Mckinney Drain Repair (Plumbing Services in Texas)",
    desc: "Our Murley Plumbing professionals have served the businesses and residents of Mckinney, Texas ",
    img: "WritingTools",
  },
];

export default function PixelCopy() {
  const {
    pixelMainContainer,
    pixelsubContainer,
    pixelThirdContainer,
    pixelGridMainContainer,
    pixelGridSubContainer,
    pixelGridSeePricing,
    pixelHireUs,
    picelweLive,
  } = TWCconfig;
  return (
    <div className={pixelMainContainer}>
      <div className={pixelsubContainer}>
        <div className={pixelThirdContainer}>
          <div className={pixelGridMainContainer}>
            <div className={pixelGridSubContainer}>
              <div className="flex pb-6 flex-col gap-5 ">
                <div className="flex justify-center px-6 flex-col gap-5">
                  <h3 className={pixelHireUs}>Hire a U.S Copywriting team</h3>
                  <p className={picelweLive}>
                    We live, eat, breath and sleep copy. Hire a team from people
                    that actually walk the walk and talk the talk.
                  </p>
                  <div className="flex justify-center mt-5">
                    <button className={pixelGridSeePricing}>See Pricing</button>
                  </div>
                </div>
              </div>
            </div>
            {cardData.map((data) => {
              return (
                <div className="shadow-2xl rounded-lg">
                  <Card data={data} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
