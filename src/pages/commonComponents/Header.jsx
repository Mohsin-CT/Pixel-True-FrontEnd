import React, { useState, useEffect } from "react";
import TWCconfig from "../../TWCconfig.json";
import xtremewebtecho from "../../images/logo.svg";
import Socialicon1 from "../../images/Social-icon1.svg";
import Socialicon2 from "../../images/Social-icon2.svg";
import ImageAsset from "./ImageAssets";

export default function Header(props) {
  const location = localStorage.getItem("SelectedPage");
  const {
    HeaderWrapper,
    HeaderContainer,
    MainMenu,
    MainMenuLi,
    BookCall,
    logo,
    MobileSocial,
    MobileSidebarMenu,
  } = TWCconfig;

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header
      className={`w-full flex absolute left-0 right-0 top-0 z-10 ${
        location === "individualBlog" ||
        location === "writingSample" ||
        location === "activateTMobile" ||
        location === "pixelCopyBlog" ||
        location === "aboutUs"
          ? ""
          : ""
      }`}
    >
      <div className={HeaderContainer}>
        <a className={logo} href="/">
          <img width="80" src={xtremewebtecho} alt="" />
        </a>
        {!showMenu && (
          <button className="block md:hidden" onClick={handleMenu}>
            <ImageAsset src="menuopen" className="h-6 w-6" />
          </button>
        )}
        <nav className="w-6/12 hidden md:block">
          <ul className={MainMenu}>
            <li className={MainMenuLi}>
              <a
                href="/pricing"
                onClick={() => localStorage.setItem("SelectedPage", "pricing")}
              >
                Pricing
              </a>
            </li>
            <li className={MainMenuLi}>
              <a href="#">About Us</a>
            </li>

            <li className={MainMenuLi}>
              <a>Writing Samples</a>
            </li>
          </ul>
        </nav>
        <div className="w-3/12 text-right hidden md:block">
          <button className={BookCall}>BOOK A CALL</button>
        </div>
      </div>

      {showMenu && (
        <>
          <div className="relative">
            <div className={MobileSidebarMenu}>
              {showMenu && (
                <button
                  className="block absolute top-14 right-8  md:hidden"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <ImageAsset src="menuclose" className="h-6 w-6" />
                </button>
              )}
              <ul className={MainMenu}>
                <li className={MainMenuLi}>
                  <a href="#">Pricing</a>
                </li>
                <li className={MainMenuLi}>
                  <a href="#">About Us</a>
                </li>
                <li className={MainMenuLi}>
                  <a href="#">Writing Samples</a>
                </li>
              </ul>
              <button className={BookCall}>BOOK A CALL</button>

              <ul className={MobileSocial}>
                <li>Follow us</li>
                <li>
                  <a href="#">
                    <img src={Socialicon1} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Socialicon2} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
