import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  Container,
} from "@mui/material";

function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let userDetails = {};

  const handleSubmit = (event) => {
    event.preventDefault();

    userDetails = {
      name,
      email,
      password,
    };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    // Reset the form after submission
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Box>
      <Container maxWidth="xs">
        <Box
          sx={{
            background: "#80ccdc",
            my: "3rem",
            p: "2rem",
            maxWidth: "500px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              color: "#ffffff",
              mb: "2rem",
            }}
            component="h1"
          >
            Sign In
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
}

export default SignIn;
