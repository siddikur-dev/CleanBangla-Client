import React from "react";
import AllToys from "../../Component/Toys/AllToys";
import Slider from "../../Component/Slider/Slider";
import Review from "../Review/Review";
import Faq from "../Faq/Faq";
import RecentComplaints from "../../Component/RecentComplain/RecentComplaints";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <RecentComplaints></RecentComplaints>
      <AllToys></AllToys>
      <Review></Review>
      {/* Faq */}
      <Faq />
    </div>
  );
};

export default Home;
