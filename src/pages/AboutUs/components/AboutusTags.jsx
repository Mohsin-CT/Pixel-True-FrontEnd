import React, { useState, useEffect } from "react";
import TWCconfig from "../../../TWCconfig.json";

export default function AboutusTags(props) {
  const { TagsList, TagBtn, Tag } = TWCconfig;
  return (
    <ul className={TagsList}>
      <li className={Tag}>
        {" "}
        <button className={TagBtn}> Pixel True</button>{" "}
      </li>
      <li className={Tag}>
        {" "}
        <button className={TagBtn}> Pixel True Animation Studio</button>{" "}
      </li>
      <li className={Tag}>
        {" "}
        <button className={TagBtn}> Pixel Minter</button>{" "}
      </li>
    </ul>
  );
}
