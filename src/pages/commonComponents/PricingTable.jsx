import React, { useState, useEffect } from "react";
import TWCconfig from "../../TWCconfig.json";
import checkSign from "../../images/checkSign.svg";
import checkSign2 from "../../images/checkSign2.svg";
import checkSign3 from "../../images/checkSign3.svg";

export default function PricingTable(props) {
    const {
        PricingTableContainer,
        PricingTableItems,
        PricingTableTitle,
        PricingPackage,
        GetStartedBtn,
        PricingPackageLi,
        GetStartedBtnOrng,
        GetStartedBtnBlue,
        PricingTableItemsActive
      } = TWCconfig;
  return (
   <div className={PricingTableContainer}>
    <div className={PricingTableItems}>
        <h2 className={PricingTableTitle}> <small className="font-Manjari text-base text-gray-850 mb-[20px] xl:mb-[45px]">SMB</small> $1,199/mo</h2>
        <ul className={PricingPackage}>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign} alt="" /> 8,000 words per month </li>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign} alt="" /> Editor & QA Review </li>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign} alt="" /> Keyword and Title Research </li>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign} alt="" /> ROI Driven </li>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign} alt="" /> CMS Formatted </li>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign} alt="" /> Fact Checked </li>
        </ul>
        <a className={GetStartedBtn} href="#">GET STARTED</a>
    </div>

    <div className={PricingTableItemsActive}>
        <h2 className={PricingTableTitle}> <small className="font-Manjari text-base text-gray-850 mb-[20px] xl:mb-[45px]">AGENCY</small> $2,299/mo</h2>
        <ul className={PricingPackage}>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign2} alt="" /> Everything in SMB, and: </li>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign2} alt="" /> 16,000 words per month </li>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign2} alt="" /> Images </li>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign2} alt="" /> Basic Uploading </li>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign2} alt="" /> Titles & Metadescription </li>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign2} alt="" /> Alt Text </li>
        </ul>
        <a className={GetStartedBtnOrng} href="#">GET STARTED</a>
    </div>

    <div className={PricingTableItems}>
        <h2 className={PricingTableTitle}> <small className="font-Manjari text-base text-gray-850 mb-[20px] xl:mb-[45px]">ENTERPRISE</small> $3,399/mo</h2>
        <ul className={PricingPackage}>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign3} alt="" /> Everything in Agency, and: </li>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign3} alt="" /> 24,000 words per month </li>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign3} alt="" /> Comprehensive Uploading </li>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign3} alt="" /> Internal & External Links </li>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign3} alt="" /> Schema Generation </li>
        </ul>
        <a className={GetStartedBtnBlue} href="#">GET STARTED</a>
    </div>

    <div className={PricingTableItems}>
        <h2 className={PricingTableTitle}> <small className="font-Manjari text-base text-gray-850 mb-[20px] xl:mb-[45px]">ENTERPRISE</small> $3,399/mo</h2>
        <ul className={PricingPackage}>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign} alt="" /> Everything in Agency, and: </li>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign} alt="" /> 24,000 words per month </li>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign} alt="" /> Comprehensive Uploading </li>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign} alt="" /> Internal & External Links </li>
            <li className={PricingPackageLi}> <img className="mr-3" src={checkSign} alt="" /> Schema Generation </li>
        </ul>
        <a className={GetStartedBtn} href="#">GET STARTED</a>
    </div>

   </div>
  );
}