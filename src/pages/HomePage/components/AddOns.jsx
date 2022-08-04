import React, { useState, useEffect } from "react";
import TWCconfig from "../../../TWCconfig.json";

export default function AddOns(props) {
  const { AddOnsList, AddOnsItem } = TWCconfig;
  return (
    <ul className={AddOnsList}>
      <li className={AddOnsItem}>
        {" "}
        Competitor Research <b className="text-orange-850">$349</b>{" "}
      </li>
      <li className={AddOnsItem}>
        4,000 Extra Words: <b className="text-orange-850">$499</b>{" "}
      </li>
      <li className={AddOnsItem}>
        Surfer Optimization: <b className="text-orange-850">$399</b>{" "}
      </li>
      <li className={AddOnsItem}>
        Long-term Content Planning <b className="text-orange-850">$299</b>{" "}
      </li>
    </ul>
  );
}
