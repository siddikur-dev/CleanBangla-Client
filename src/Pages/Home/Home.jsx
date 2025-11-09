import React from "react";
import AllToys from "../../Component/Toys/AllToys";
import Slider from "../../Component/Slider/Slider";
import Review from "../Review/Review";
import Faq from "../Faq/Faq";
import RecentComplainCard from "../../Component/RecentComplain/RecentComplainCard";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <RecentComplainCard></RecentComplainCard>
      <AllToys></AllToys>
      <Review></Review>
      {/* Faq */}
      <Faq />
    </div>
  );
};

export default Home;
