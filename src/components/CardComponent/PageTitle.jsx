import React from "react";
import Typography from "@mui/material/Typography";

import classes from "./MediaCard.module.css";

const PageTitle = ({ title }) => {
  return (
    <Typography
      className={classes.cardTitle}
      variant="h1"
      component="h2"
      sx={{
        textAlign: "center",
        fontWeight: "bold",
        my: "2rem",
        pb: "10px",
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
  );
};

export default PageTitle;
