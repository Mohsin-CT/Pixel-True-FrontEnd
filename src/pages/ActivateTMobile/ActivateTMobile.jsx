import React from "react";
import TWCconfig from "../../TWCconfig.json";
import Footer from "../commonComponents/Footer";
import Header from "../commonComponents/Header";
import Pagination from "../commonComponents/Pagination";
import RecommendedBlogs from "../commonComponents/RecommendedBlogs";
import SeePricing from "../HomePage/components/SeePricingBanner";
import ActivateForFree from "./components/ActivateForFree";
import ActivateHeroComp from "./components/ActivateHeroComp";
import ActivateSteps from "../commonComponents/ActivateSteps";
import AlreadyHaveAccount from "../commonComponents/AlreadyHaveAccount";
import HowToActivate from "../commonComponents/HowToActivate";
import InformationBox from "../commonComponents/InformationBox";
import MetroPcs from "./components/MetroPcs";
import TableOfContent from "./components/TableOfContent";

const ActivateTMobile = () => {
  const { CopywritingSecrets, CopywritingP, CopywritingTitle } = TWCconfig;

  return (
    <div>
      <Header />
      <ActivateHeroComp />
      <div className="flex justify-center px-[20px] md:px-[50px] lg:px-[100px]">
        <div className="w-full max-w-[1396px] mx-auto">
          <MetroPcs />
        </div>
      </div>
      <TableOfContent />
      <div className="flex justify-center px-[20px] md:px-[50px] lg:px-[100px]">
        <div className="w-full max-w-[1396px] mx-auto">
          <HowToActivate />
        </div>
      </div>
      <InformationBox />
      <div className="flex justify-center px-[20px] md:px-[50px] lg:px-[100px]">
        <div className="w-full max-w-[1396px] mx-auto">
          <ActivateSteps />
          <AlreadyHaveAccount />
        </div>
      </div>
      <InformationBox />
      <div className="flex justify-center px-[20px] md:px-[50px] lg:px-[100px]">
        <div className="w-full max-w-[1396px] mx-auto">
          <ActivateForFree />
          <RecommendedBlogs />
        </div>
      </div>

      <div>
        <Pagination/>
      </div>

      <div className="mb-[-5rem]">
        <SeePricing />
      </div>
      <Footer />
    </div>
  );
};

export default ActivateTMobile;
