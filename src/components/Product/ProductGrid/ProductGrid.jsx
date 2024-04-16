import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ProductTab from "../ProductTab/ProductTab";
import ProductContent from "../ProductContent/ProductContent";
import ProductDescTab from "../ProductDescTab/ProductDescTab";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ProductGrid({ productItem }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ProductTab productItem={productItem}></ProductTab>
        </Grid>
        <Grid item xs={6}>
          <ProductContent productItem={productItem}></ProductContent>
        </Grid>
        <Grid item xs={9}>
          <ProductDescTab></ProductDescTab>
        </Grid>
      </Grid>
    </Box>
  );
}
