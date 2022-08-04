import React, { useState, useEffect } from "react";
import HeroImg from "../../../images/HeroImg.png";
import { useParams } from "react-router-dom";
import TWCconfig from "../../../TWCconfig.json";
import Card from "../../commonComponents/Card";

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
    img: "WritingTools",
  },
  {
    title: "Mckinney Drain Repair (Plumbing Services in Texas)",
    desc: "Our Murley Plumbing professionals have served the businesses and residents of Mckinney, Texas ",
    img: "writingPipe",
  },
];

export default function CopyWritingTeam(props) {
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
    <div className={writingmainContainer}>
      <div className={writingmainDiv}>
        <div className="flex flex-col pt-10">
          <div className={TagsMainContainer}>
            <h1>All</h1>
            <h1>Technology</h1>
            <h1>Environment</h1>
            <h1>pet</h1>
            <h1>Branding</h1>
            <h1>Design</h1>
          </div>

          <div className={gridMainContainer}>
            {cardData.map((data) => {
              return (
                <div className="shadow-2xl  rounded-lg">
                  <Card data={data} />
                </div>
              );
            })}
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
          </div>
        </div>
      </div>
    </div>
  );
}
