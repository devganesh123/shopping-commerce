import React from "react";
import new_collection from "../data/new_collections";
import MediaCard from "./CardComponent/MediaCard";

const MenPopularity = () => {
  return (
    <div>
      <MediaCard
        title="New Collection"
        popularData={new_collection}
      ></MediaCard>
    </div>
  );
};

export default MenPopularity;
