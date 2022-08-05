import React, { useEffect } from "react";
import TWCconfig from "../../TWCconfig.json";
import BookCall from "../commonComponents/BookCallSection";
import SideContentBox from "../commonComponents/SideContentBox";
import Tags from "./components/Tags";
import Footer from "../commonComponents/Footer";
import Header from "../commonComponents/Header";
import CopywritingForm from "./components/CopywritingForm";
import SeePricing from "./components/SeePricingBanner";
import HeroSection from "./components/HeroSection";
import ContentBox from "./components/ContentBox";
import LightContentBox from "./components/LightContentBox";
import WhatGetSection from "./components/WhatGetSection";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import AlternativesTable from "./components/AlternativesTable";
import PricingTable from "../commonComponents/PricingTable";
import AddOns from "./components/AddOns";
import SliderView from "../commonComponents/SliderView";
// import SliderView from "../../images/SliderView.png";

const Homepage = () => {
  const {
    ContentBoxContainer,
    ContentBoxTitle,
    SimpleTextBlock,
    SimpleTextBlockTitle,
    SimpleTextBlockText,
    LightContentBoxContainer,
    SimpleTextBlockTitle2,
    LightSimpleTextBlock,
    CopywritingSecrets,
    CopywritingP,
    CopywritingTitle,
    SimpleTextBlock2,
    LightSimpleTextBlock3,
    SimpleTextBlock4,
    SimpleTextBlock5,
    SimpleTextBlockTitle5,
    CopywritingTitle2,
    LightSimpleTextBlock5,
    SimpleTextBlockTextPricing,
    LightSimpleTextBlock2,
    SimpleTextBlockTitle6,
    SliderContainer,
    SimpleTextBlockText6,
    SimpleTextBlockText4,
    SimpleTextBlockTitle3,
    SimpleTextBlockText3,
    SimpleTextBlockText5,
    SimpleTextBlockTitle4,
    LightSimpleTextBlock4,
    SimpleTextBlock6,
  } = TWCconfig;
  localStorage.setItem("SelectedPage", "Homepgae");
  return (
    <div>
      <Header />
      <HeroSection />
      <div className={ContentBoxContainer}>
        <h2 className={ContentBoxTitle}>
          We Get it, Great Writers <br /> are Hard to Find.
        </h2>
        <ContentBox />
      </div>
      <div className={SimpleTextBlock}>
        <h2 className={SimpleTextBlockTitle}>100% U.S. Writers</h2>
        <p className={SimpleTextBlockText}>
          Hire writers with the same life experience as your audience. No more
          wasted time having to edit copy to fit with the colloquial language
          that fits for your readers. Have it done right the first time. Our
          writers create copy that draws your reader in and gets them engaged so
          that you convert on a much higher level.
        </p>
      </div>
      <div className="w-full bg-blue-200">
        <div className={SimpleTextBlock2}>
          <h2 className={SimpleTextBlockTitle3}>
            Scope of What our Writers can Write
          </h2>
          <p className={SimpleTextBlockText3}>
            The benefit of a large team and scale is that we can write
            proficiently on a wide range of topics and speak to a breadth of
            audiences. You can feel confident that our writers will pull on the
            heartstrings of your readers.
          </p>
          <p className={SimpleTextBlockText3}>
            There isn't a niche we haven't written about, but these are the most
            common ones our clients have <br /> asked us to write about.
          </p>
          <Tags />
        </div>
      </div>
      <div className={LightContentBoxContainer}>
        <div className={LightSimpleTextBlock3}>
          <h2 className={SimpleTextBlockTitle2}>
            Nailing copywriting doesn’t have to be hard.So we make it easy.
          </h2>
          <LightContentBox />
        </div>
      </div>

      <div className="w-full bg-blue-200">
        <div className={SimpleTextBlock4}>
          <h2 className={SimpleTextBlockTitle}>What You Get</h2>
          <WhatGetSection />
        </div>
      </div>

      <div className={CopywritingSecrets}>
        <div className="w-full lg:w-1/2 ">
          <h2 className={CopywritingTitle}>Copywriting Secrets</h2>
          <p className={CopywritingP}>
            Sign up for contact and receive a series of invaluable copywriting
            tips that are sure to improve your SEO and increase organic traffic.
          </p>
          <img
            // className=" lg:-ml-[60px] mt-[70px] w-full h-full"
            src={img3}
            alt=""
          />
        </div>
        <div className=" w-full lg:w-1/2">
          <CopywritingForm />
        </div>
      </div>

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

      <div className="w-full">
        <div className={LightSimpleTextBlock4}>
          <h2 className={SimpleTextBlockTitle4}>Pricing</h2>
          <p className={SimpleTextBlockText5}>
            No matter how much content you need, we have a plan to fit your
            budget. Our comprehensive service goes beyond <br /> just writing
            copy, we make sure that your project is completed from start to
            finish without issue.
          </p>
          <PricingTable />
          <div className="w-full max-w-[1280px] m-auto text-center pt-[80px] pb-[119px]">
            <p className={SimpleTextBlockTextPricing}>
              Why do we have a minimum of 8,000 words? Well we want you to see
              value out of our writing and if you're not posting at least two
              articles per week, the current search engine algorithms won't
              bother to reward your site. So in order for us to drive value for
              you, we need to write a minimum of 8 articles a month.
            </p>
            <h3 className="text-[24px] tracking-[-0.6px] font-poppin-semibold mt-[40px] mb-[10px]">
              Add-Ons:
            </h3>
            <AddOns />
          </div>
          <BookCall />
        </div>
      </div>

      <div className="w-full bg-blue-200">
        <div className={SimpleTextBlock6}>
          <div className="flex flex-wrap">
            <div className="w-full md:w-[50%]">
              <img
                className="xl:max-w-[790px] xl:-ml-[140px] xl:-mt-[53px]"
                src={img4}
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h2 className={CopywritingTitle2}>Membership Benefits</h2>
              <SideContentBox />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:-mb-48">
        <div className={LightSimpleTextBlock5}>
          <h2 className={SimpleTextBlockTitle6}>What’s Our Client Say</h2>
          <p className={SimpleTextBlockText6}>
            Our clients tell the true story of how we can help <br /> drive
            results through copy
          </p>
          <div className={SliderContainer}>
            {/* <img src={SliderView} alt="" /> */}
            <div className="h-[24rem] w-full">
              <SliderView />
            </div>
          </div>
          <div className="flex ">
            <SeePricing />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
