import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF2625" : "",
        backgroundColor: "#FFF",
        borderBottomLeftRadius: "20px",
        width: "160px",
        height: "170px",
        cursor: "pointer",
        gap: "47px",
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      ></img>
      <Typography
        fontSize="20px"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
