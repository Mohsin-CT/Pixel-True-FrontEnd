import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivateTMobile from "../pages/ActivateTMobile/ActivateTMobile";
import WritingSample from "../pages/WritingSamples/WritingSample";
import Homepage from "../pages/HomePage/Homepage";
import { AboutUsPage } from "../pages/AboutUs/AboutUsPage";
import IndividualBlogs from "../pages/IndividualBlogs/IndividualBlogs";
import PixelCopyBlog from "../pages/PixelCopyBlog/PixelCopyBlog";
import Pricing from "../pages/PricingPage/Pricing";


const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="writingSample" element={<WritingSample />} />
        <Route path="activateTMobile" element={<ActivateTMobile />} />
        <Route path="aboutUs" element={<AboutUsPage />} />
        <Route path="individualBlog" element={<IndividualBlogs />} />
        <Route path="pixelCopyBlog" element={<PixelCopyBlog />} />
        <Route path="pricing" element={<Pricing />} />

      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
