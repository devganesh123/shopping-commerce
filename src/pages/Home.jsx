import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/Banner";
import WomenPopularity from "../components/WomenPopularity";
import HomeStrip from "../components/HomeStrip";
import MenPopularity from "../components/MenPopularity";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WomenPopularity></WomenPopularity>
      <HomeStrip></HomeStrip>
      <MenPopularity></MenPopularity>
    </div>
  );
};

export default Home;
