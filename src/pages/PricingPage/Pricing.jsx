import React from "react";
import TWCconfig from "../../TWCconfig.json";
import Footer from "../commonComponents/Footer";
import Header from "../commonComponents/Header";
import PricingTable from "../commonComponents/PricingTable";
import img2 from "../../images/img2.png";
import img4 from "../../images/img4.png";
import AlternativesTable from "../HomePage/components/AlternativesTable";
import ChooseAddOns from "./components/ChooseAddOns";
import GetStarted from "./components/GetStarted";
import SideContentBox from "../commonComponents/SideContentBox";
import FAQ from "./components/Faqs";
import CopywritingForm from "../HomePage/components/CopywritingForm";
import SliderView from "../commonComponents/SliderView";

const Pricing = () => {
  const {
    PricingTitleBar,
    PricingTitleBarInner,
    PricingTitle,
    PricingText,
    TableDescription,
    TableDescriptionInner,
    TableDescriptionText,
    SimpleTextBlock5,
    SimpleTextBlockTitle5,
    SimpleTextBlockText4,
    LightContentBoxContainer,
    LightSimpleTextBlock3,
    SimpleTextBlockTitlePrice,
    CopywritingTitle2,
    SimpleTextBlock6,
    LightSimpleTextBlock5,
    SimpleTextBlockTitle6,
    SimpleTextBlockText6,
    SliderContainer,
    CopywritingSecrets3,
    CopywritingTitle,
    CopywritingP,
  } = TWCconfig;

  return (
    <div>
      <Header />
      <div className={PricingTitleBar}>
        <div className={PricingTitleBarInner}>
          <h1 className={PricingTitle}>
            Pick a Plan that’s{" "}
            <span className="font-bold text-orange-850">Right for you!</span>{" "}
          </h1>
          <p className={PricingText}>
            No matter how much content you need, we have a plan to fit your
            budget. Our comprehensive <br /> service goes beyond just writing
            copy, we make sure that your project is completed from <br /> start
            to finish without issue.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="container">
            <PricingTable />
          </div>
        </div>
      </div>

      <div className={TableDescription}>
        <div className={TableDescriptionInner}>
          <p className={TableDescriptionText}>
            Why do we have a minimum of 8,000 words? Well we want you to see
            value out of our writing and if you're not <br /> posting at least
            two articles per week, the current search engine algorithms won't
            bother to reward your site. <br /> So in order for us to drive value
            for you, we need to write a minimum of 8 articles a month.
          </p>
        </div>
      </div>
      <ChooseAddOns />
      <div className="w-full bg-blue-200">
        <div className={SimpleTextBlock5}>
          <h2 className={SimpleTextBlockTitle5}>Compare The Alternatives</h2>
          <p className={SimpleTextBlockText4}>
            Whether your copywriting needs are large or small, we're here to
            help you scale. Checkout <br /> what makes us different from others.{" "}
          </p>
          <div className="pt-[50px] lg:pt-[111px] block">
            <AlternativesTable />
            <p className="text-left text-2xl font-poppin-Medium text-gray-850 mt-10">
              Note : Depending on experience
            </p>
          </div>
        </div>
      </div>
      <div className={LightContentBoxContainer}>
        <div className={LightSimpleTextBlock3}>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-[65%] text-left pr-[0] md:pr-[50px] lg:pr-[150px]">
              <h2 className={SimpleTextBlockTitlePrice}>
                <small className="font-poppin-semibold mb-[15px]">
                  Let’s Try!
                </small>
                Start Today and Enjoy our 7 Day Guarantee
              </h2>
              <p className="text-white text-[20px] xl:text-[24px] font-Manjari">
                All our plans are backed by a 7 day money-back <br /> guarantee.
              </p>
              <GetStarted />
            </div>
            <div className="w-full md:w-[35%] pt-[50px] md:pt-[0]">
              <img className="mx-auto" src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>
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
      <div className="w-full">
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
      <div className={LightContentBoxContainer}>
        <div className={LightSimpleTextBlock3}>
          <div className="flex flex-wrap items-center">
            <div className="w-full">
              <h2 className={SimpleTextBlockTitlePrice}>FAQs</h2>
              <p className="text-white text-[18px] md:text-[20px] font-Manjari">
                Everything you need to know about the plans and billing. Can’t
                find the answer you’r looking for? <br /> Please chat to our
                friendly team.
              </p>
              <FAQ />
            </div>
          </div>
        </div>
      </div>

      <div className={CopywritingSecrets3}>
        <div className="flex flex-col lg:flex-row w-full max-w-[1405px] mx-auto items-center">
          <div className="lg:w-1/2 pr-[50px]">
            <h2 className={CopywritingTitle}>
              Inspired by What you <br /> see ?{" "}
              <span className="text-orange-850">
                Let’s Talk About <br /> Your Project.
              </span>
            </h2>
            <p className={CopywritingP}>
              Sign up for contact and receive a series of invaluable copywriting
              tips that are sure to improve your SEO and increase organic
              traffic.
            </p>
          </div>
          <div className="lg:w-1/2">
            <CopywritingForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
