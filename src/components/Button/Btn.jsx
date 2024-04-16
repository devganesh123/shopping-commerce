import React from "react";
import { Button } from "@mui/material";

const Btn = ({
  children,
  size = "small",
  bgColor = "secondary.dark",
  color = "common.white",
  width = "auto",
  height = "auto",
  ...buttonProps
}) => {
  return (
    <Button
      size={size}
      variant="outlined"
      {...buttonProps}
      sx={{
        color: color,
        bgcolor: bgColor,
        minWidth: "auto",
        padding: "5px 10px",
        fontWeight: "500",
        width: width,
        height: height,
        "&:hover": {
          bgcolor: bgColor,
        },
      }}
    >
      {children}
    </Button>
  );
};

export default Btn;
