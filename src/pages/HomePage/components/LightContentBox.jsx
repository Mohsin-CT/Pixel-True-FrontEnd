import React, { useState, useEffect } from "react";
import TWCconfig from "../../../TWCconfig.json";
import BookIcon from "../../../images/BookIcon.svg";

export default function LightContentBox(props) {
  const {
    LightContentBoxWrap,
    LightContentBoxItem,
    LightContentBoxItemTitle,
    LightContentBoxItemText,
    ContentIconBox,
  } = TWCconfig;
  return (
    <div className={LightContentBoxWrap}>
      <div className={LightContentBoxItem}>
        <div className={ContentIconBox}>
          <img src={BookIcon} alt="" />
        </div>
        <h3 className={LightContentBoxItemTitle}>Optimized Copywriting</h3>
        <p className={LightContentBoxItemText}>
          Written to pull organic traffic to your site and reduce bouncerates.
        </p>
      </div>
      <div className={LightContentBoxItem}>
        <div className={ContentIconBox}>
          <img src={BookIcon} alt="" />
        </div>
        <h3 className={LightContentBoxItemTitle}>No More Waiting</h3>
        <p className={LightContentBoxItemText}>
          Fast turn-around times and regular updates so you know where you're
          at.
        </p>
      </div>
      <div className={LightContentBoxItem}>
        <div className={ContentIconBox}>
          <img src={BookIcon} alt="" />
        </div>
        <h3 className={LightContentBoxItemTitle}>Delegate Uploading</h3>
        <p className={LightContentBoxItemText}>
          Our experienced team will take on all the uploading, linking and
          meta-data activities to make your life simple.
        </p>
      </div>
    </div>
  );
}
