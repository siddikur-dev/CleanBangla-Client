import React from "react";
import Slider from "../../Component/Slider/Slider";
import Review from "../Review/Review";
import Faq from "../Faq/Faq";
import RecentComplaints from "../../Component/RecentComplain/RecentComplaints";
import CommunityStats from "../CommunityStats/CommunityStats";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <RecentComplaints></RecentComplaints>
      <CommunityStats></CommunityStats>
      <Review></Review>
      {/* Faq */}
      <Faq />
    </div>
  );
};

export default Home;
