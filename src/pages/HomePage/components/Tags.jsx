import React, { useState, useEffect } from "react";
import TWCconfig from "../../../TWCconfig.json";
import tagicon1 from "../../../images/tag-icon1.svg";

export default function Tags(props) {
  const { TagsList, TagBtn, Tag } = TWCconfig;
  return (
    <ul className={TagsList}>
      <li className={Tag}>
        {" "}
        <button className={TagBtn}>
          {" "}
          <img className="mr-4" src={tagicon1} alt="" /> Entrepreneurship
        </button>{" "}
      </li>
      <li className={Tag}>
        {" "}
        <button className={TagBtn}>
          {" "}
          <img className="mr-4" src={tagicon1} alt="" /> Marketing
        </button>{" "}
      </li>
      <li className={Tag}>
        {" "}
        <button className={TagBtn}>
          {" "}
          <img className="mr-4" src={tagicon1} alt="" /> Beauty
        </button>{" "}
      </li>
      <li className={Tag}>
        {" "}
        <button className={TagBtn}>
          {" "}
          <img className="mr-4" src={tagicon1} alt="" /> Health
        </button>{" "}
      </li>
      <li className={Tag}>
        {" "}
        <button className={TagBtn}>
          {" "}
          <img className="mr-4" src={tagicon1} alt="" /> Pets
        </button>{" "}
      </li>
      <li className={Tag}>
        {" "}
        <button className={TagBtn}>
          {" "}
          <img className="mr-4" src={tagicon1} alt="" /> Travel
        </button>{" "}
      </li>
      <li className={Tag}>
        {" "}
        <button className={TagBtn}>
          {" "}
          <img className="mr-4" src={tagicon1} alt="" /> Politics
        </button>{" "}
      </li>
      <li className={Tag}>
        {" "}
        <button className={TagBtn}>
          {" "}
          <img className="mr-4" src={tagicon1} alt="" /> World Events
        </button>{" "}
      </li>
      <li className={Tag}>
        {" "}
        <button className={TagBtn}>
          {" "}
          <img className="mr-4" src={tagicon1} alt="" /> Sports
        </button>{" "}
      </li>
      <li className={Tag}>
        {" "}
        <button className={TagBtn}>
          {" "}
          <img className="mr-4" src={tagicon1} alt="" /> Landing Pages
        </button>{" "}
      </li>
    </ul>
  );
}
