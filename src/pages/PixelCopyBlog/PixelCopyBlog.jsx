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
  const {} = TWCconfig;

  const NavigateTo = () => {
    localStorage.setItem("SelectedPage", "individualBlog");
    navigate("/individualBlog");
  };

  return (
    <>
      <Header />
      <div className="flex flex-col bg-orange-150 py-5 lg:pt-36 lg:py-0  ">
        <div className="pl-4 lg:pl-0 text-[32px] leading-[2.5rem] lg:text-[64px] w-full lg:leading-[72px] font-[600] flex justify-center ">
          <p className=" text-[32px] lg:text-[64px] font-[700]">
            Pixel <span className="text-orange-850">Copy Blog</span>
          </p>
        </div>
        <div className="flex justify-center">
          <p className="px-4 lg:px-24 py-7 text-center text-[16px] lg:text-[32px] font-[400] lg:w-[1600px] lg:leading-[40px]">
            Find our latest articles on all things copy. Make sure to sign up
            for our newsletter so that you don't miss the hottest tips on
            improving your organic traffic with content creation.
          </p>
        </div>
      </div>
      <div className="flex justify-center pt-16">
        <div className="container flex justify-center flex-wrap py-6">
          {/* <!-- Posts Section --> */}
          <section className="md:w-2/3 max-w-[90%] lg:h-[64.188rem] flex justify-center">
            <article className="flex max-w-[90%] xl:w-[918px] flex-col shadow-xl my-4 h-[1027px] rounded-[10px]">
              {/* <!-- Article Image --> */}
              <a href="#" className="">
                <ImageAsset
                  className="rounded-t-lg h-[459px] w-full object-cover"
                  src="TapWater"
                />
              </a>
              <div className="bg-white flex flex-col justify-start p-6 pl-[55px]">
                <a
                  href="#"
                  className="text-[32px] lg:w-[622px] lg:text-[48px] font-[600] pb-4  leading-[2.3rem] lg:leading-[56px]"
                >
                  Water Heater Repair piano (heater repair info <br /> and
                  guide)
                </a>

                <a
                  href="#"
                  className="pb-6 font-[400] text-[20px] lg:w-[845px] max-w-[90%]"
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
                  <a href="#" className="font-[600] text-[20px]">
                    By Barkva.org
                  </a>
                </p>
                <hr className="border-t-[1px] border-orange-850 xl:w-[796px] max-w-[90%]" />
                <div className="flex justify-between pt-5 xl:w-[796px] max-w-[90%]">
                  <p className="text-orange-850 text-[20px] font-[600]">
                    February 23, 2022
                  </p>
                  <p className="text-orange-850 text-[20px] font-[600]">
                    5 Min Read
                  </p>
                </div>
              </div>
            </article>
          </section>

          {/* <!-- Sidebar Section --> */}
          <aside className="w-full md:w-1/3 lg:mt-0 flex justify-center pl-3 pt-3">
            <div className="w-full">
              <BlogCoulmnCard />
            </div>
          </aside>

          <section className="w-full md:w-3/3 grid grid-cols-1 lg:grid-cols-3 mt-16 px-9">
            {cardData.map((data) => {
              return (
                <div onClick={NavigateTo}>
                  <Card data={data} />
                </div>
              );
            })}
          </section>
        </div>
      </div>
      <div>
        <SeePricingBanner />
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
                <p className="w-[342px] text-center text-[20px] font-[400] px-4">
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
