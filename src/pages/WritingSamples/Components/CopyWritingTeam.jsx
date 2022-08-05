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
    FiltersMenu,
    extracardMainContainer,
    extractSubContainer,
    seePricing,
    welive,
    hireusContainer,
    hireUs,
    active
  } = TWCconfig;
  return (
    <div className={writingmainContainer}>
      <div className={writingmainDiv}>
        <div className="flex flex-col">
          <ul className={FiltersMenu}>
            <li className={active}> <a href="#">All</a> </li>
            <li> <a href="#">Technology</a> </li>
            <li> <a href="#">Environment</a> </li>
            <li> <a href="#">Pet</a> </li>
            <li> <a href="#">Branding</a> </li>
            <li> <a href="#">Design</a> </li>
          </ul>

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
