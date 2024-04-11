import React from "react";
import { Box, Typography, Button } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ProductTable from "../ProductTable/ProductTable";
import Btn from "../../Button/Btn";
import ProductDescTab from "../ProductDescTab";

const ProductContent = ({ productItem }) => {
  return (
    <>
      <Box>
        <Typography variant="h2" component="h1" sx={{ fontWeight: "bold" }}>
          {productItem.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: ".25rem",
            alignItems: "center",
          }}
        >
          <Box>
            <GradeIcon></GradeIcon>
            <GradeIcon></GradeIcon>
            <GradeIcon></GradeIcon>
            <StarHalfIcon></StarHalfIcon>
            <StarBorderIcon></StarBorderIcon>
          </Box>
          <Box>(23 reviews)</Box>
        </Box>
        <Typography variant="h3" component="div" sx={{ fontWeight: "bold" }}>
          ${productItem.new_price}
        </Typography>
        <Typography variant="h6" component="div" sx={{ fontWeight: "400" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
        <ProductTable></ProductTable>
        <Box sx={{ my: "1.5rem" }}>
          <Typography> Quantity:</Typography>
          <Box
            sx={{
              display: "flex",
              gap: ".5rem",
              alignItems: "center",
            }}
          >
            <Btn width="30px"> - </Btn>
            <span>{1}</span>
            <Btn width="30px"> + </Btn>
          </Box>
          <Box sx={{ my: "1.5rem" }}>
            <Btn> Add to Cart </Btn>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductContent;