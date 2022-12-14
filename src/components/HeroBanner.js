import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/Couple.png";

function HeroBanner() {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
        pb: { lg: "390px", xs: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "45px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        No Pain , No Gain
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#FF2625", p: "10px" }}
      >
        Explore Exercises
      </Button>
      {/* <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercise
      </Typography> */}
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img"></img>
    </Box>
  );
}

export default HeroBanner;
