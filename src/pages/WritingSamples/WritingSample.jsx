import React from "react";
import TWCconfig from "../../TWCconfig.json";
import WritingHeroSection from "./Components/WritingHeroSection";
import CopyWritingTeam from "./Components/CopyWritingTeam";
import PixelCopy from "./Components/PixelCopy";
import ImageAsset from "../commonComponents/ImageAssets";
import Footer from "../commonComponents/Footer";
import Header from "../commonComponents/Header";
import CopywritingForm from "../HomePage/components/CopywritingForm";
import SeePricing from "../HomePage/components/SeePricingBanner";
import Pagination from "../commonComponents/Pagination";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";

const WritingSample = () => {
  const { CopywritingSecrets, CopywritingP, CopywritingTitle } = TWCconfig;

  return (
    <div>
      <Header />
      <WritingHeroSection />
      <CopyWritingTeam />
      <div className="py-20">
        <SeePricing />
      </div>
      <div>
        <PixelCopy />
      </div>

      <div className={CopywritingSecrets}>
        <div className="w-full lg:w-1/2">
          <h2 className={CopywritingTitle}>Copywriting Secrets</h2>
          <p className={CopywritingP}>
            Sign up for contact and receive a series of invaluable copywriting
            tips that are sure to improve your SEO and increase organic traffic.
          </p>
          <img className=" lg:-ml-[60px] mt-[70px]" src={img3} alt="" />
        </div>
        <div className=" w-full lg:w-1/2">
          <CopywritingForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WritingSample;
