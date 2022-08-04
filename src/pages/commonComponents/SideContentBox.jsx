import React, { useState, useEffect } from "react";
import TWCconfig from "../../TWCconfig.json";
import icon12 from "../../images/icon12.svg";
import icon13 from "../../images/icon13.svg";
import icon14 from "../../images/icon14.svg";

export default function SideContentBox(props) {
  const {
    SideContentBoxList,
    SideContentBoxItem,
    SideContentBoxIcon,
    SideContentBoxTitle,
    SideContentBoxText,
  } = TWCconfig;
  return (
    <ul className={SideContentBoxList}>
      <li className={SideContentBoxItem}>
        <i className={SideContentBoxIcon}>
          {" "}
          <img src={icon12} alt="" />{" "}
        </i>
        <h4 className={SideContentBoxTitle}>Human Powered Live Chat</h4>
        <p className={SideContentBoxText}>
          Get in touch when you need to and speak with a real person
        </p>
      </li>
      <li className={SideContentBoxItem}>
        <i className={SideContentBoxIcon}>
          {" "}
          <img src={icon13} alt="" />{" "}
        </i>
        <h4 className={SideContentBoxTitle}>Multiple layers of oversight</h4>
        <p className={SideContentBoxText}>
          Professional writers reviewed by editors and cross referenced by
          quality assurance speciailists
        </p>
      </li>
      <li className={SideContentBoxItem}>
        <i className={SideContentBoxIcon}>
          <img src={icon14} alt="" />{" "}
        </i>
        <h4 className={SideContentBoxTitle}>Hands off publishing</h4>
        <p className={SideContentBoxText}>
          From start to finish, we can make sure your content gets posted
          without issue.
        </p>
      </li>
    </ul>
  );
}
