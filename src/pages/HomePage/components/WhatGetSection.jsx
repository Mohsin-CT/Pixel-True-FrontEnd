import React, { useState, useEffect } from "react";
import TWCconfig from "../../../TWCconfig.json";
import img2 from "../../../images/img2.png";
import icon4 from "../../../images/icon4.svg";
import icon5 from "../../../images/icon5.svg";
import icon6 from "../../../images/icon6.svg";
import icon7 from "../../../images/icon7.svg";
import icon8 from "../../../images/icon8.svg";
import icon9 from "../../../images/icon9.svg";
import icon10 from "../../../images/icon10.svg";
import icon11 from "../../../images/icon11.svg";

export default function WhatGetSection(props) {
  const { WhatGetContainer, WhatGetItems, ItemBtn, WhatGetItem } = TWCconfig;
  return (
    <div className={WhatGetContainer}>
      <div className="w-full md:w-1/3 2xl:w-[406px] order-1">
        <ul className={WhatGetItems}>
          <li className={WhatGetItem}>
            {" "}
            <button className={ItemBtn}>
              {" "}
              <img className="mr-5" src={icon4} alt="" /> All costs up front
            </button>{" "}
          </li>
          <li className={WhatGetItem}>
            {" "}
            <button className={ItemBtn}>
              {" "}
              <img className="mr-5" src={icon5} alt="" /> Fast turnaround
            </button>{" "}
          </li>
          <li className={WhatGetItem}>
            {" "}
            <button className={ItemBtn}>
              {" "}
              <img className="mr-5" src={icon6} alt="" /> Top Talent
            </button>{" "}
          </li>
          <li className={WhatGetItem}>
            {" "}
            <button className={ItemBtn}>
              {" "}
              <img className="mr-5" src={icon7} alt="" /> Streamlined project
              matching
            </button>{" "}
          </li>
          <li className={WhatGetItem}>
            {" "}
            <button className={ItemBtn}>
              {" "}
              <img className="mr-5" src={icon4} alt="" /> Editing on every
              project
            </button>{" "}
          </li>
        </ul>
      </div>
      <div className="order-3 md:order-2 w-full md:w-1/3 2xl:w-full 2xl:max-w-[590px] md:pl-[30px] 2xl:pl-[70px] 2xl:pr-[18px] mt-10 md:mt-0">
        <img className="w-full" src={img2} alt="" />
      </div>
      <div className="w-full md:w-1/3 2xl:w-[406px] order-2 md:order-3">
        <ul className={WhatGetItems}>
          <li className={WhatGetItem}>
            {" "}
            <button className={ItemBtn}>
              {" "}
              <img className="mr-5" src={icon4} alt="" /> No plagiarism
            </button>{" "}
          </li>
          <li className={WhatGetItem}>
            {" "}
            <button className={ItemBtn}>
              {" "}
              <img className="mr-5" src={icon8} alt="" /> Unlimited revisions
            </button>{" "}
          </li>
          <li className={WhatGetItem}>
            {" "}
            <button className={ItemBtn}>
              {" "}
              <img className="mr-5" src={icon9} alt="" /> 100% money-back
              guarantee
            </button>{" "}
          </li>
          <li className={WhatGetItem}>
            {" "}
            <button className={ItemBtn}>
              {" "}
              <img className="mr-5" src={icon10} alt="" /> Dedicated account
              managers
            </button>{" "}
          </li>
          <li className={WhatGetItem}>
            {" "}
            <button className={ItemBtn}>
              {" "}
              <img className="mr-5" src={icon11} alt="" /> State-of-the-art
              platform
            </button>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
