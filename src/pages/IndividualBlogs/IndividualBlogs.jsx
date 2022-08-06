import React from "react";
import { useParams, useLocation } from "react-router-dom";
import ActivateSteps from "../commonComponents/ActivateSteps";
import AlreadyHaveAccount from "../commonComponents/AlreadyHaveAccount";
import BlogCoulmnCard from "../commonComponents/BlogCoulmnCard";
import Footer from "../commonComponents/Footer";
import Header from "../commonComponents/Header";
import HowToActivate from "../commonComponents/HowToActivate";
import InformationBox from "../commonComponents/InformationBox";
import RecommendedBlogs from "../commonComponents/RecommendedBlogs";
import SeePricing from "../HomePage/components/SeePricingBanner";
import AboutAurthor from "./components/AboutAurthor";
import FinalThought from "./components/FinalThought";
import IndividualHeroComp from "./components/IndividualHeroComp";
import IndividualMetroPcs from "./components/IndividualMetroPcs";
import TableOfContent from "./components/TableOfContent";

const IndividualBlogs = () => {
  const data = useLocation();
  console.log("params data", data);
  return (
    <div>
      <div>
        <Header />
        <IndividualHeroComp />
        <div className="flex justify-center px-[20px] lg:px-[50px] xl:px-[100px] pt-[50px] lg:pt-[100px] xl:pt-[150px]">
          <div className="max-w-[1396px] w-full mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 ">
              <div className="flex flex-col w-[100%] lg:w-[65%] xl:w-[68%]">
                <IndividualMetroPcs />
                <TableOfContent />
                <HowToActivate />
                <InformationBox />
                <ActivateSteps />
                <AlreadyHaveAccount />
                <InformationBox />
                <FinalThought />
              </div>

              <div className="flex flex-col w-full w-full lg:w-[35%] xl:w-[32%]">
                <BlogCoulmnCard />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center px-[20px] lg:px-[50px] xl:px-[100px]">
          <div className="max-w-[1396px] w-full mx-auto">
            <AboutAurthor />
            <div className="border-t-4  border-gray-150 my-20">
              <RecommendedBlogs />
            </div>
          </div>
        </div>

        <div className="px-[20px] lg:px-[50px] xl:px-[100px] mb-[50px] md:mb-[-110px]">
          <SeePricing />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default IndividualBlogs;
