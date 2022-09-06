import React, { useState } from "react";
import { Box } from "@mui/material";
import Exercises from "../Exercises";
import HeroBanner from "../HeroBanner";
import SearchExercises from "../SearchExercises";

function Home() {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
}

export default Home;
