import React from "react";
import { useState, useContext, useEffect } from "react";
import ThemeContext from "../context/DataContext";
import MediaCard from "../components/CardComponent/MediaCard";

const Shop = () => {
  const productsData = useContext(ThemeContext);

  return (
    <>
      <MediaCard title="Shop" popularData={productsData}></MediaCard>
    </>
  );
};

export default Shop;
