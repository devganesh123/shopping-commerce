import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import classes from "./Footer.module.css";
import Btn from "../Button/Btn";

const Footer = () => {
  return (
    <Box
      sx={{ bgcolor: "secondary.dark", py: "4rem", color: "common.white" }}
      className={classes.footer}
    >
      <Container>
        <Box className={classes.footerColumn}>
          <Box>
            <Typography
              variant="h2"
              component="div"
              sx={{ mb: "1rem", fontWeight: "bold" }}
            >
              Ecommerce
            </Typography>
            <Typography sx={{ mb: "1rem" }}>
              Where Convenience Meets Quality
              <br /> Your <span style={{ whiteSpace: "nowrap" }}>One-Stop</span>
              Shop for All Your Needs!
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              About
            </Typography>

            <Typography>Shop</Typography>
            <Typography>Men</Typography>
            <Typography>Women</Typography>
            <Typography>Kids</Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: "1rem" }}>
              Newsletter
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{ borderColor: "#fff" }}
              />
              <Btn bgColor="common.white" color="common.black" height="55px">
                Join
              </Btn>
            </Box>
          </Box>
        </Box>
        <Typography> @2024 copyright reserved</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
