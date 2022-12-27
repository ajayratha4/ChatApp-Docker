import { AppBar, Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar position="static">
      <Box
        sx={{
          height: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          px: 2,
        }}
      >
        <Typography variant="h6">Home</Typography>
      </Box>
    </AppBar>
  );
};

export default Header;
