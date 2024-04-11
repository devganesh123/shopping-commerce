import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ThemeContext from "../context/DataContext";
import BasicBreadcrumbs from "../components/Product/BasicBreadcrumbs/BasicBreadcrumbs";
import { Box, Container } from "@mui/material";
import ProductGrid from "../components/Product/ProductGrid/ProductGrid";

const ProductDetail = () => {
  const { id } = useParams();
  const dataContext = useContext(ThemeContext);
  const data = dataContext[id - 1];

  // useEffect(() => {
  //   async function fetchData() {
  //     console.log(data);
  //     const productData = await dataContext[id - 1];

  //     setData(productData);
  //     console.log(data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <Box>
      <Container>
        <Box sx={{ my: "1rem" }}>
          <BasicBreadcrumbs
            productCategoryName={data.category}
            productTitle={data.name}
          ></BasicBreadcrumbs>
          <ProductGrid productItem={data}></ProductGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetail;
