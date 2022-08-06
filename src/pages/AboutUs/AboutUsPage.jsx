import React from "react";
import TWCconfig from "../../TWCconfig.json";
import img4 from "../../images/img4.png";
import GrahamIcon from "../../images/Graham.png";
import PatrickIcon from "../../images/patrick.png";
import warrenIcon from "../../images/warren.png";
import QuoteLargeEndIcon from "../../images/QuoteLargeEndIcon.png";
import QuoteLargeStartIcon from "../../images/QuoteLargeStartIcon.png";
import Header from "../commonComponents/Header";
import HeroAboutus from "./components/HeroAboutus";
import Section4Aboutus from "./components/Section4Aboutus";
import Section3 from "./components/Section3Aboutus";
import OurMissionAboutus from "./components/OurMissionAboutus";
import AboutusTags from "./components/AboutusTags";
import Footer from "../commonComponents/Footer";
import CopywritingForm from "../HomePage/components/CopywritingForm";
import SideContentBox from "../commonComponents/SideContentBox";
import BookCall from "../commonComponents/BookCallSection";
import SliderView from "../commonComponents/SliderView";

export const AboutUsPage = () => {
  const {
    Section4AboutusContainer,
    SimpleTextBlockTitle2,
    LightTextSection4Aboutus,
    Section4AboutusText,
    Section4AboutusConnectTitle,
    ContactBtn,
    TeamMemberCard,
    SimpleTextBlock6,
    CopywritingTitle2,
    LightBlockSection4Aboutus,
    LightBlockSection4Aboutus2,
    BookCallSection4,
    SimpleTextBlock2,
    SimpleTextBlockTitle3,
    LightSimpleTextBlock5,
    SimpleTextBlockTitle6,
    SimpleTextBlockText6,
    SliderContainer,
    CopywritingSecrets2,
    CopywritingTitle4,
    CopywritingP,
    AboutUsTextTitle,
    ViewMoreBtnAbout,
    OurTeamContainer,
    CopywritingSecrets3,
    CopywritingTitle
  } = TWCconfig;
  return (
    <div>
      <Header />
      <HeroAboutus />
      <OurMissionAboutus />
      <Section3 />
  <div className="flex justify-center">
    <div className=" w-full flex flex-wrap lg:flex-nowrap items-center bg-[#ffeee3]">
        <div className="w-full lg:w-[50%]">
          <div className={`${Section4AboutusContainer} `}>
            <div className={`${LightTextSection4Aboutus} `}>
              <h2 className={AboutUsTextTitle}>
                We Provide The <br /> Services You <br /> Need
              </h2>
              <p className={Section4AboutusText}>
                We don't just write content. We can create <br /> sales copy,
                landing pages, researched e- <br /> books and more.
              </p>
              <a href="#" className={ViewMoreBtnAbout}>
              View More
            </a>
            </div>
            
          </div>
        </div>
        <div className="w-full lg:w-[50%] relative">
          <Section4Aboutus />
        </div>
      </div>
  </div>

      <div className="w-full items-start bg-[#fce6dc] px-[20px] md:px-[50px] xl:px-[100px]">
        <div className={LightBlockSection4Aboutus2}>
          <div className={`${BookCallSection4}`}>
            <h4 className={Section4AboutusConnectTitle}>
              Connect with us to learn <br /> more about the services.
            </h4>
            <a className={ContactBtn} href="#">
              CONTACT US
            </a>
          </div>
        </div>
      </div>
      {/* membership benefits... */}

      <div className="w-full bg-blue-200">
        <div className={SimpleTextBlock6}>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-[50%] order-2 md:order-1">
              <img
                className="xl:max-w-[790px] xl:-ml-[140px] xl:-mt-[53px]"
                src={img4}
                alt=""
              />
            </div>
            <div className="w-full sm:w-[50%] order-1 md:order-2">
              <h2 className={CopywritingTitle2}>Membership Benefits</h2>
              <SideContentBox />
            </div>
          </div>
        </div>
      </div>
      {/* book a call... */}
      <div className="w-full BookCallFullW">
        <div className={LightBlockSection4Aboutus}>
          <BookCall />
        </div>
      </div>
      <div className="w-full">
        <div className={OurTeamContainer}>
          <h2 className={SimpleTextBlockTitle3}>Our Passionate Team</h2>
          <p className={SimpleTextBlockText6}>
            We only hire experienced writers from the U.S. to ensure that your{" "}
            <br /> copy fits with your audience.
          </p>
          {/* <AboutusTags/> */}
          <div className="relative pt-[50px] sm:pt-[0]">
            <div className="flex flex-wrap self-center pb-[90px] md:px-[50px] xl:px-[100px] relative">
              <img
                src={QuoteLargeEndIcon}
                alt=""
                className="w-[130px] sm:w-[150px] sm:w-[100px] lg:w-[140px] 2xl:w-[180px] absolute bottom-[0rem] left-[0] sm:left-[20px] lg:left-[0px] xl:left-[-50px]"
              />
              <img
                src={QuoteLargeStartIcon}
                alt=""
                className="w-[180px] sm:w-[150px] lg:w-[200px] 2xl:w-[250px] absolute top-[-50px] right-[-30px] sm:right-[0px] lg:right-[0px] xl:right-[-100px]"
              />

              <div className={TeamMemberCard}>
                <img className="w-auto sm:w-[150px] md:w-[200px] xl:w-[250px] 2xl:w-[350px] mx-auto" src={GrahamIcon} alt="" />
                <p className="pt-[28px] text-[20px] lg:text-[24px] font-bold">Graham</p>
                <p>CEO</p>
              </div>
              <div className={TeamMemberCard}>
                <img className="w-auto sm:w-[150px] md:w-[200px] xl:w-[250px] 2xl:w-[350px] mx-auto" src={PatrickIcon} alt="" />
                <p className="pt-[42px] text-[20px] lg:text-[24px] font-bold">Patrick</p>
                <p>Director - Content & Planning</p>
              </div>
              <div className={TeamMemberCard}>
                <img className="w-auto sm:w-[150px] md:w-[200px] xl:w-[250px] 2xl:w-[350px] mx-auto" src={warrenIcon} alt="" />
                <p className="pt-[28px] text-[20px] lg:text-[24px] font-bold">Warren</p>
                <p>CMO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-blue-200">
        <div className={SimpleTextBlock2}>
          <h2 className={SimpleTextBlockTitle3}>Our Partners</h2>
          <AboutusTags />
        </div>
      </div>
      <div className="w-full lg:-mb-48">
        <div className={LightSimpleTextBlock5}>
          <h2 className={SimpleTextBlockTitle6}>What’s Our Client Say</h2>
          <p className={SimpleTextBlockText6}>
            Our clients tell the true story of how we can help <br /> drive
            results through copy
          </p>
        </div>
      </div>
      <div className={SliderContainer}>
            {/* <img src={SliderView} alt="" /> */}
            <div className="h-[550px] xl:h-[700px] w-full">
              <SliderView />
            </div>
          </div>
      <div className={CopywritingSecrets3}>
        <div className="flex w-full flex-wrap max-w-[1405px] mx-auto items-center">
        <div className="w-full sm:w-1/2 pr-[50px]">
          <h2 className={CopywritingTitle}>
          Inspired by What you <br /> see ? <span className="text-orange-850">Let’s Talk About <br /> Your Project.</span>
          </h2>
          <p className={CopywritingP}>
          Sign up for contact and receive a series of invaluable copywriting tips that are sure to improve your SEO and increase organic traffic.
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <CopywritingForm />
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
