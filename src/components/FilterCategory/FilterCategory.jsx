import React, { useContext } from "react";
import ThemeContext from "../../context/DataContext";
import MediaCard from "../CardComponent/MediaCard";

const FilterCategory = ({ title, categoryName }) => {
  const productsData = useContext(ThemeContext);

  //filter the product based on the category name
  let filteredProducts = productsData.filter(
    (item) => item.category === categoryName
  );
  console.log(filteredProducts);

  return (
    <div>
      <MediaCard title={title} popularData={filteredProducts}></MediaCard>
    </div>
  );
};

export default FilterCategory;
