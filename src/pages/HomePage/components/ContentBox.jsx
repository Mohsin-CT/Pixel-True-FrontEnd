import React, { useState, useEffect } from "react";
import TWCconfig from "../../../TWCconfig.json";
import icon1 from "../../../images/icon1.svg";
import icon2 from "../../../images/icon2.svg";
import icon3 from "../../../images/icon3.svg";

export default function ContentBox(props) {
  const {
    ContentBoxWrap,
    ContentBoxItem,
    ContentBoxItemTitle,
    ContentBoxItemText,
  } = TWCconfig;
  return (
    <div className={ContentBoxWrap}>
      <div className={ContentBoxItem}>
        <img className="w-[87px] lg:w-[141px]" src={icon1} alt="" />
        <h3 className={ContentBoxItemTitle}>Substandard Copy</h3>
        <p className={ContentBoxItemText}>
          Hiring remote teams comes with the issues of language barriers, lack
          of content experience and cultural differences. Having U.S. writers
          can make all the difference.
        </p>
      </div>
      <div className={ContentBoxItem}>
        <img className="w-[87px] lg:w-[141px]" src={icon2} alt="" />
        <h3 className={ContentBoxItemTitle}>Long Turnaround Time</h3>
        <p className={ContentBoxItemText}>
          Good writers can get bogged down with too much work. Having a team can
          solve this.
        </p>
      </div>
      <div className={ContentBoxItem}>
        <img className="w-[87px] lg:w-[141px]" src={icon1} alt="" />
        <h3 className={ContentBoxItemTitle}>No Real-world Experience</h3>
        <p className={ContentBoxItemText}>
          Lots of copywriters can do research and come up with solid content but
          without real-world experience, they can't connect with our audience.
          Our team can.
        </p>
      </div>
    </div>
  );
}
