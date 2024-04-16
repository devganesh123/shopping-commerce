import React, { useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Btn from "../Button/Btn";

const CartItem = ({ item, onRemoveItemFromCartHandler }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <img src={`${item.productImg}`} height={120} />

      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
        }}
      >
        <Typography>{item.name}</Typography>
        <Typography>Quantity: {item.quantity}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <Typography>${item.price}</Typography>
      </Box>
      <Btn onClick={() => onRemoveItemFromCartHandler(item.id)}>Remove</Btn>
    </Box>
  );
};

export default CartItem;
