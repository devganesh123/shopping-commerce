import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import classes from "./CardComponent.module.css";
import { Link } from "react-router-dom";
import Btn from "../Button/Btn";

const CardComponent = ({ item }) => {
  return (
    <Box sx={{ padding: ".5rem" }}>
      <Card
        className={classes.card}
        sx={{
          maxWidth: 345,
          transition: " transform 200ms linear",
          mb: ".8rem",
          "&:hover": {
            transform: "scale(1.03)",
          },
        }}
      >
        <CardMedia sx={{ height: 300 }} image={item.image} title={item.name} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {item.name}
          </Typography>
          {item.category && (
            <Typography gutterBottom variant="h6" component="div">
              <span style={{ color: "gray" }}> Category:</span> {item.category}
            </Typography>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
              }}
            >
              <Typography>${item.new_price}</Typography>
              <Typography
                sx={{ textDecoration: "line-through", color: "gray" }}
              >
                ${item.old_price}
              </Typography>
            </Box>
            <Box>
              <Btn>
                <Link to={`/products/${item.id}`}> Buy</Link>
              </Btn>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardComponent;
