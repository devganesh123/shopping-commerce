import * as React from "react";
import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardComponent from "./CardComponent";
import classes from "./MediaCard.module.css";

const h2Style = {};
export default function MediaCard({ title, popularData }) {
  return (
    <Box
      sx={{
        my: "3rem",
      }}
    >
      <Container>
        <Typography
          className={classes.cardTitle}
          variant="h1"
          component="h2"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: "2rem",
            pb:"10px",
            position: "relative",

            "&::after": {
              position: "absolute",
              content: '""',
              top: "100%",
              width: "120px",
              height: "3px",
              background: "black",
              left: "50%",
              transform: "translateX(-50%)",
            },
          }}
        >
          {title}
        </Typography>
        <Box className={classes.cardContainer}>
          {popularData.map((item) => (
            <CardComponent item={item} key={item.id}></CardComponent>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
