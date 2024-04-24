import { useState, useContext, useEffect } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import CartItem from "./CartItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActions, CardActionArea } from "@mui/material";
import CartContext from "../../context/CartContext";
import Btn from "../Button/Btn";
import PageTitle from "../CardComponent/PageTitle";
import { Link } from "react-router-dom";

export default function CartData() {
  const cartData = useContext(CartContext);
  const [cartStoredData, setCartStoredData] = useState([]);

  //! store in local Storage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartStoredData));
  }, [cartData.items]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems"));
    if (items) {
      setCartStoredData(items);
    }
  }, []);

  // useEffect(() => {
  //   setCartStoredData(JSON.parse(localStorage.getItem("cartItems")));
  // }, [cartData.items]);

  function removeItemFromCart(id) {
    cartData.removeItem(id);
  }

  const totalPrice = () => {
    let finalTotal = 0;
    cartData.items.map((item) => {
      finalTotal = finalTotal + item.quantity * item.price;
    });
    return finalTotal;
  };

  const totalAmount = totalPrice();
  let discountedAmount = totalAmount - totalAmount * 0.1;
  let isCartEmpty = cartData.items.length < 1;

  let emptyCartDetails = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        textAlign: "center",
        my: "2rem",
      }}
    >
      <Typography variant="h2" component="div">
        Cart is Empty
      </Typography>
      <Typography variant="h6" component="div">
        Add Items to Cart
      </Typography>
    </Box>
  );
  return (
    <Box>
      <Container>
        <PageTitle title="My Cart"></PageTitle>
        {isCartEmpty && emptyCartDetails}
        {!isCartEmpty && (
          <Grid container spacing={2} sx={{ my: "3rem" }}>
            <Grid item xs={8}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {cartData.items.map((item, index) => (
                  <CartItem
                    item={item}
                    key={index}
                    onRemoveItemFromCartHandler={removeItemFromCart}
                  ></CartItem>
                ))}
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          gap: "1rem",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          Total price
                        </Typography>

                        <Typography>${totalAmount}</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          gap: "1rem",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography gutterBottom variant="h6" component="div">
                          Discount (10%)
                        </Typography>

                        <Typography>${totalAmount * 0.1}</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          gap: "1rem",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography gutterBottom variant="h6" component="div">
                          Total
                        </Typography>

                        <Typography>${discountedAmount}</Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Link to="/checkout">
                      <Btn>Checkout</Btn>
                    </Link>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
}
