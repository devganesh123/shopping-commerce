import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";

import stripImage from "../../assets/home-strip.png";
import classes from "./Strip.module.css";
import Btn from "../Button/Btn";
import { Link } from "react-router-dom";

const Strip = () => {
  return (
    <section aria-label="strip-section" className={classes.stripSection}>
      <Box sx={{ bgcolor: "secondary.light" }}>
        <Container>
          <img
            src={stripImage}
            alt=""
            style={{
              width: "100%",
              maxHeight: "240px",
              objectFit: "contain",
              objectPosition: "80% 10%",
            }}
          />

          <Box className={classes.stripContent}>
            <Typography
              component="h3"
              sx={{ fontWeight: "bold", fontSize: "4rem", color: "#23313e" }}
            >
              FLAT 50% OFF
            </Typography>
            <Typography sx={{ mb: "1rem", fontSize: "2rem" }}>
              Deals ends in 24 days
            </Typography>
            <Btn>
              <Link to="/shop">SHOP NOW </Link>
            </Btn>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default Strip;
