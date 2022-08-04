import React, { useState, useEffect } from "react";
import { images } from "../../images";

export default function ImageAsset(props) {
  const { src, className, onClick, style } = props;

  return (
    <img
      alt="icon"
      src={images[src]}
      className={`${className}`}
      onClick={onClick}
      style={style}
    />
  );
}
