import * as React from "react";
import { Box, Container, Grid } from "@mui/material";
import CardComponent from "./CardComponent";
import classes from "./MediaCard.module.css";
import PageTitle from "./PageTitle";

const h2Style = {};
export default function MediaCard({ title, popularData }) {
  return (
    <Box>
      <Container className={classes.mediaContainer}>
        <PageTitle title={title}></PageTitle>
        <Grid spacing={3} className={classes.cardContainer}>
          {popularData.map((item) => (
            <CardComponent item={item} key={item.id}></CardComponent>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
