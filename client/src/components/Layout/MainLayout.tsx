import React from "react";
import { Box } from "@mui/material";
import Chart from "../../page/Chart";
import Header from "../Header";

const MainLayout = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Box sx={{ display: "flex", height: 60 }}>
        <Header />
      </Box>
      <Box sx={{ height: "calc(100% - 60px)" }}>
        <Chart />
      </Box>
    </Box>
  );
};

export default MainLayout;
