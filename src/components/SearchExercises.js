import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exercisesOptions, fetchData } from "../utils/fetchData";
import Carousel from "./Carousel";

const SearchExercises = ({
  exercises,
  setExercises,
  bodyPart,
  setBodyPart,
}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    // While the site is loading ==> fetching body parts to carousel
    fetchExercisesData();
  }, []);

  const fetchExercisesData = async () => {
    const bodyPartsData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
      exercisesOptions
    );
    setBodyParts(["all", ...bodyPartsData]);
  };

  //----------------------------------------------//

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exercisesOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        {" "}
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1000px", xs: "350px" },
            backgroundColor: "#FFF",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(event) => setSearch(event.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        ></TextField>
        <Button
          sx={{
            bgcolor: "#FF2625",
            color: "#FFF",
            textTransform: "none",
            ml: "5px",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            poistion: "absoulte",
            right: 0,
          }}
          className="search-btn"
          onClick={handleSearch}
          href="#exercises"
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "realtive", width: "100%", p: "20px" }}>
        <Carousel
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
