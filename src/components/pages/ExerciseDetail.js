import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {
  exercisesOptions,
  fetchData,
  youtubeOptions,
} from "/WEB/gym-exercises-app/src/utils/fetchData";
import Detail from "../Detail";
import SimilarExercises from "../SimilarExercises";
import ExerciseVideos from "../ExerciseVideos";
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exercisesVideos, setExercisesVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Every time the ID changes ==> fetching exercise detail by ID
    fetchExercisesData();
  }, [id]);

  const fetchExercisesData = async () => {
    const exerciseDBUrl = "https://exercisedb.p.rapidapi.com";
    const youtubeSearchUrl =
      "https://youtube-search-and-download.p.rapidapi.com";

    const exercisesDetailData = await fetchData(
      `${exerciseDBUrl}/exercises/exercise/${id}`,
      exercisesOptions
    );
    setExerciseDetail(exercisesDetailData);

    // const exercisesVideosData = await fetchData(
    //   `https://youtube-search-and-download.p.rapidapi.com/search?q=${exercisesDetailData.name}`,
    //   youtubeOptions
    // );
    // setExercisesVideos(exercisesVideosData);
  };
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />{" "}
      {/* <ExerciseVideos
        exercisesVideos={exercisesVideos}
        name={exerciseDetail.name}
      />{" "} */}
      {/* <SimilarExercises />{" "} */}
    </Box>
  );
};

export default ExerciseDetail;
