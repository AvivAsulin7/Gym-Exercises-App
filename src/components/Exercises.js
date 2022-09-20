import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import { exercisesOptions, fetchData } from "../utils/fetchData";
import SearchExercises from "./SearchExercises";
import ExercisesCard from "./ExercisesCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ExForPage = 9;
  const indexOfLastEx = currentPage * ExForPage;
  const indexOfFirstEx = indexOfLastEx - ExForPage;
  const currentExercises = exercises.slice(indexOfFirstEx, indexOfLastEx);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    fetchExercisesData();
  }, [bodyPart]);

  const fetchExercisesData = async () => {
    let exercisesData = [];
    if (bodyPart == "all") {
      exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exercisesOptions
      );
    } else {
      exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        exercisesOptions
      );
    }

    setExercises(exercisesData);
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <p>
            <ExercisesCard key={index} exercise={exercise} />
          </p>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / ExForPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          ></Pagination>
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
