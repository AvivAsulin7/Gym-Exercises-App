import React, { useContext } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import BodyPart from "./BodyPart";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel = ({ data, bodyPart, setBodyPart }) => {
  return (
    <Stack direction="row" flexWrap="wrap">
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map((item, index) => (
          <SwiperSlide
            className="swiper-slide"
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};

export default Carousel;

// import React, { useContext } from "react";
// import { Box, Typography, Button } from "@mui/material";
// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
// import BodyPart from "./BodyPart";
// import RightArrowIcon from "../assets/icons/right-arrow.png";
// import LeftArrowIcon from "../assets/icons/left-arrow.png";

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollPrev()} className="right-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollNext()} className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

// const Carousel = ({ data, bodyPart, setBodyPart }) => {
//   return (
//     <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//       {data.map((item, index) => (
//         <Box
//           key={item.id || item}
//           itemID={item.id || item}
//           title={item.id || item}
//           m="0 40px"
//         >
//           <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
//         </Box>
//       ))}
//     </ScrollMenu>
//   );
// };

// export default Carousel;
