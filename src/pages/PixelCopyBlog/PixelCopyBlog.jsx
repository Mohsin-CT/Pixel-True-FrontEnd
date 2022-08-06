import React from "react";

import TWCconfig from "../../TWCconfig.json";
import BlogCoulmnCard from "../commonComponents/BlogCoulmnCard";
import Card from "../commonComponents/Card";
import SeePricingBanner from "../HomePage/components/SeePricingBanner";
import Header from "../commonComponents/Header";
import Pagination from "../commonComponents/Pagination";
import ImageAsset from "../commonComponents/ImageAssets";
import Footer from "../commonComponents/Footer";
import CopyWritingTeam from "../WritingSamples/Components/CopyWritingTeam";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    title: "Mckinney Drain Repair (Plumbing Services in Texas)",
    desc: "Our Murley Plumbing professionals have served the businesses and residents of Mckinney, Texas ",
    img: "writingPipe",
  },
  {
    title: "Mckinney Drain Repair (Plumbing Services in Texas)",
    desc: "Our Murley Plumbing professionals have served the businesses and residents of Mckinney, Texas ",
    img: "WritingDog",
  },
  {
    title: "Mckinney Drain Repair (Plumbing Services in Texas)",
    desc: "Our Murley Plumbing professionals have served the businesses and residents of Mckinney, Texas ",
    img: "WritingTools",
  },
];

const PixelCopyBlog = () => {
  const navigate = useNavigate();
  const {HeroSectionTitleoverlayTitle3} = TWCconfig;

  const NavigateTo = () => {
    localStorage.setItem("SelectedPage", "individualBlog");
    navigate("/individualBlog");
  };

  return (
    <>
      <Header />
      <div className="flex bg-pink-150 pt-[150px] lg:pt-[180px] xl:pt-[250px] 2xl:pt-[421px] pb-[100px] px-[20px] lg:px-[50px] xl:px-[100px]">
      <div className="w-full max-w-[1500px] mx-auto flex justify-center text-center flex-col ">
        <h1 className={HeroSectionTitleoverlayTitle3}>
          Pixel Copy <span className="text-orange-850">Blog</span>
        </h1>
        <p className="mt-[32px] text-center text-[18px] md:text-[20px] lg:text-[25px] xl:text-[28px] 2xl:text-[32px] font-Manjari-400 leading-[1.6]">
            Find our latest articles on all things copy. Make sure to sign up
            for our newsletter so that you <br /> don't miss the hottest tips on
            improving your organic traffic with content creation.
          </p>
      </div>
      </div>
      <div className="w-full px-[20px] md:px-[50px] xl:px-[100px] flex justify-center pt-[50px] lg:pt-[100px] xl:pt-[150px]">
        <div className="max-w-[1396px] w-full mx-auto flex justify-between flex-wrap">
          {/* <!-- Posts Section --> */}
          <section className="w-[100%] lg:w-[65%] xl:w-[68%] pr-[30px] lg:h-[64.188rem] flex justify-center">
            <article className="flex w-full flex-col shadow-xl my-4 h-[950px] lg:h-[1015px] rounded-[10px]">
              {/* <!-- Article Image --> */}
              <a href="#" className="">
                <ImageAsset
                  className="rounded-t-lg h-[459px] w-full object-cover"
                  src="TapWater"
                />
              </a>
              <div className="bg-white flex flex-col justify-start py-6 px-[20px] xl:px-[40px]">
                <a
                  href="#"
                  className="text-[32px] xl:text-[40px] 2xl:text-[48px] font-poppin-semibold pb-4 leading-[1.5]"
                >
                  Water Heater Repair piano (heater repair info and
                  guide)
                </a>

                <a
                  href="#"
                  className="pb-6 font-Manjari-400 text-[18px] lg:text-[20px]"
                >
                  If you’re looking for water heater repair in Plano, TX, then
                  you’re on the right track! We’ve serviced many Plano residents
                  with plenty of success. At Murley Plumbing, our licensed
                  expert plumbers are on call 24 hours of the day, 7 days a
                  week.
                  <br />
                  <br />
                  We have the know-how to deal with any water heater problems
                  you may have, whether it’s traditional or tankless.
                </a>
                <p href="#" className="text-sm pb-5">
                  <a href="#" className="font-poppin-semibold text-[20px]">
                    By Barkva.org
                  </a>
                </p>
                <hr className="border-t-[1px] border-orange-850 w-[100%]" />
                <div className="flex justify-between pt-5 xl:w-[796px] max-w-[90%]">
                  <p className="text-orange-850 text-[16px] lg:text-[18px] xl:text-[20px] font-poppin-semibold">
                    February 23, 2022
                  </p>
                  <p className="text-orange-850 text-[16px] lg:text-[18px] xl:text-[20px] font-poppin-semibold">
                    5 Min Read
                  </p>
                </div>
              </div>
            </article>
          </section>

          {/* <!-- Sidebar Section --> */}
          <aside className="w-full lg:w-[35%] xl:w-[32%] lg:mt-0 flex justify-center">
            <div className="w-full">
              <BlogCoulmnCard />
            </div>
          </aside>
          <div className="max-w-[1396px] w-full mx-auto">
          <section className="w-full pb-[100px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-[25px] xl:gap-5 mt-10">
            {cardData.map((data) => {
              return (
                <div onClick={NavigateTo}>
                  <Card data={data} />
                </div>
              );
            })}
            </div>
          </section>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto px-[20px] lg:px-[50px] xl:px-[100px]">
        <div className="max-w-[1396px] w-full mx-auto">
        <SeePricingBanner />
        </div>
      </div>
      <CopyWritingTeam />
      {/* <div className="w-full flex justify-center">
        <div className="w-full container px-2 lg:mx-48 flex flex-wrap justify-center py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 ">
            <div className="flex flex-col justify-center items-center w-[26.183rem] h-[38.813rem] bg-[#FBF7F4] lg:ml-8">
              <div className="flex justify-center items-center flex-col">
                <h1 className="font-[600] text-[24px] mb-3">
                  Ready to try out pixel copy
                </h1>
                <p className="w-[342px] text-center text-[20px] font-Manjari-400 px-4">
                  We live, eat, breath and sleep copy. Hire a team from people
                  that actually walk the walk and talk the talk.
                </p>
              </div>
              <div className="mt-16">
                <a
                  className="rounded-full px-5 py-3 text-white bg-orange-850 text-[20px] font-[700]"
                  href=""
                >
                  See Pricing
                </a>
              </div>
            </div>

            {cardData.map((data) => {
              return <Card data={data} />;
            })}

            <Card data={cardData[1]} />
            <Card data={cardData[2]} />
          </div>
        </div>
      </div> */}
      <div className=" w-full flex justify-center mb-10">
        <Pagination />
      </div>

      <Footer />
    </>
  );
};

export default PixelCopyBlog;
