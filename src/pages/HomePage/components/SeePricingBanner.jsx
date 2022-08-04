import React, { useState, useEffect } from "react";
import TWCconfig from "../../../TWCconfig.json";

export default function SeePricing(props) {
  const { BookCallSection2, BookCallTitle2, BookCallBtn2, BookCallText } =
    TWCconfig;
  return (
    <div className={BookCallSection2}>
      <div>
        <h4 className={BookCallTitle2}>Try Us Out!</h4>
        <p className={BookCallText}>
          All our plans are backed by a 7 day money-back guarantee.
        </p>
      </div>
      <a className={BookCallBtn2} href="#">
        SEE PRICING
      </a>
    </div>
  );
}
