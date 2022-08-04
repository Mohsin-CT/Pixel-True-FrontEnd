import React, { useState, useEffect } from "react";
import TWCconfig from "../../TWCconfig.json";
import sendicon from "../../images/send-icon.svg";
import Socialicon1 from "../../images/Social-icon1.svg";
import Socialicon2 from "../../images/Social-icon2.svg";
import Socialicon3 from "../../images/Social-icon3.svg";
import Socialicon4 from "../../images/Social-icon4.svg";
import Socialicon5 from "../../images/Social-icon5.svg";

export default function Footer(props) {
  const {
    FooterWrapper,
    FooterContainer,
    FooterCopyright,
    FooterTitle,
    FooterMenu,
    FooterP,
    NewsletterForm,
    NewsletterField,
    NewsletterBtn,
    FooterSocialLinks,
    CopyrightText,
    FooterCopyrightContainer,
    FooterSocial,
  } = TWCconfig;

  return (
    <div className="flex justify-center bg-blue-200">
      <footer className={FooterWrapper}>
        <div className={FooterContainer}>
          <div className="w-[50%] md:w-[33%] lg:w-[21%] pl-[5px]">
            <h4 className={FooterTitle}>PAGES</h4>
            <ul className={FooterMenu}>
              <li>
                <a
                  href="/pricing"
                  onClick={() =>
                    localStorage.setItem("SelectedPage", "pricing")
                  }
                  className="text-gray-850 hover:text-orange-850"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="text-gray-850 hover:text-orange-850"
                  href="/aboutUs"
                  onClick={() =>
                    localStorage.setItem("SelectedPage", "aboutUs")
                  }
                >
                  About Us
                </a>
              </li>
              <li
                onClick={() =>
                  localStorage.setItem("SelectedPage", "writingSample")
                }
              >
                <a
                  className="text-gray-850 hover:text-orange-850"
                  href="/writingSample"
                >
                  Writing Samples
                </a>
              </li>
              <li>
                <a
                  className="text-gray-850 hover:text-orange-850"
                  href="/pixelCopyBlog"
                  onClick={() =>
                    localStorage.setItem("SelectedPage", "pixelCopyBlog")
                  }
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[50%] md:w-[33%] lg:w-[20%]">
            <h4 className={FooterTitle}>LEGAL</h4>
            <ul className={FooterMenu}>
              <li>
                {" "}
                <a className="text-gray-850 hover:text-orange-850" href="#">
                  Terms of Service
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="text-gray-850 hover:text-orange-850" href="#">
                  Refund Policy
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="text-gray-850 hover:text-orange-850" href="#">
                  Privacy Policy
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="text-gray-850 hover:text-orange-850" href="#">
                  FAQ's
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="w-[100%] md:w-[33%] lg:w-[22%] mt-5 md:mt-0">
            <h4 className={FooterTitle}>GET IN TOUCH</h4>
            <ul className={FooterMenu}>
              <li>
                {" "}
                <a className="text-gray-850 hover:text-orange-850" href="#">
                  support@pixelcopy.com
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="w-[100%] lg:w-[35%] mt-[30px] lg:mt-[0]">
            <h4 className={FooterTitle}>NEWSLETTER</h4>
            <p className={FooterP}>
              Sign up for contact and receive a series of invaluable copywriting
              tips that are sure to improve your SEO and increase organic
              traffic.
            </p>
            <form className={NewsletterForm} action="">
              <input
                className={NewsletterField}
                type="email"
                placeholder="Enter your email"
                name=""
                id=""
              />
              <button className={NewsletterBtn} type="submit">
                {" "}
                <img className="mt-1" width="20" src={sendicon} alt="" />{" "}
              </button>
            </form>
          </div>
        </div>
        <div className={FooterCopyright}>
          <div className={FooterCopyrightContainer}>
            <p className={CopyrightText}>Copyright 2022, All Rights Reserved</p>
            <div className={FooterSocialLinks}>
              <p className={CopyrightText}>Follow Us</p>
              <ul className={FooterSocial}>
                <li>
                  {" "}
                  <a href="#">
                    {" "}
                    <img src={Socialicon1} alt="" />{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    {" "}
                    <img src={Socialicon2} alt="" />{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    {" "}
                    <img src={Socialicon3} alt="" />{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    {" "}
                    <img src={Socialicon4} alt="" />{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    {" "}
                    <img src={Socialicon5} alt="" />{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
