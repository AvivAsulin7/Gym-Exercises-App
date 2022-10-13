import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-2.png";

function Footer() {
  let year = new Date();
  year = year.getFullYear();
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center">
        <img src={Logo} width="150px" height="130px"></img>
        <Typography variant="h7" pb="40px">
          &copy; Aviv Asulin {year}
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
