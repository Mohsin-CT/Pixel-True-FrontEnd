import React, { useState, useEffect } from "react";
import TWCconfig from "../../TWCconfig.json";

export default function BookCall(props) {
  const { BookCallSection, BookCallTitle, BookCallBtn } = TWCconfig;
  return (
    <div className={BookCallSection}>
      <h4 className={BookCallTitle}>
        "Ask about our quarterly and annual plans <br /> for information on
        included extras!"
      </h4>
      <a
        className={BookCallBtn}
        href="/activateTMobile"
        onClick={() => localStorage.setItem("SelectedPage", "activateTMobile")}
      >
        Book a Call
      </a>
    </div>
  );
}
