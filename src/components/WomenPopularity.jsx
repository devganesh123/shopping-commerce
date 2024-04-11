import React from "react";
import data from "../data/data";
import MediaCard from "./CardComponent/MediaCard";

const WomenPopularity = () => {
  return (
    <>
      <MediaCard title="Popular in Women" popularData={data}></MediaCard>
    </>
  );
};

export default WomenPopularity;
