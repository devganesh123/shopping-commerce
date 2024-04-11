import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Box, Typography, Button, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <Box
      sx={{
        bgcolor: "secondary.dark",
        color: "common.white",
        py: ".5rem",
      }}
    >
      <Container>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}
        >
          <Typography
            sx={{
              // fontSize: (theme) => `${theme.palette.typography.h3.fontSize}`,
              fontSize: "h3.fontSize",
            }}
            component="h1"
          >
            <Link to="/"> E-commerce</Link>
          </Typography>
          <Box sx={{ display: "flex", gap: "4rem" }}>
            <Box sx={{ display: "flex", gap: ".5rem" }}>
              <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <Typography>
                  <Link to="/shop">Shop</Link>
                </Typography>
                <Typography>
                  <Link to="/mens">Men</Link>
                </Typography>
                <Typography>
                  <Link to="/womens">Women</Link>
                </Typography>
                <Typography>
                  <Link to="/kids">Kids</Link>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: ".5rem" }}>
              <Box>
                <IconButton aria-label="sign-in">
                  <AccountCircleIcon
                    sx={{ color: "common.white" }}
                  ></AccountCircleIcon>
                  <Typography
                    sx={{
                      fontSize: "subtitle1.fontSize",
                      color: "common.white",
                    }}
                  >
                    SignIn
                  </Typography>
                </IconButton>
              </Box>
              <Box>
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={0} color="secondary">
                    <ShoppingCartIcon sx={{ color: "common.white" }} />
                  </StyledBadge>
                </IconButton>
              </Box>
            </Box>
            {/* <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
