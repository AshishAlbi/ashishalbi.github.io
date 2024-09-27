import { Typography } from "@mui/material";
import React, { lazy } from "react";
import projectStyleClasses from "./Projects.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectDetails } from "../Constants/details";
const Cards = lazy(() => import("../components/Cards"));

function Projects() {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={projectStyleClasses.cards}>
      <Typography variant="h3">Projects</Typography>
      <Slider {...sliderSettings}>
        {projectDetails.map((projectDetail) => (
          <Cards
            key={projectDetail.id}
            image={projectDetail.image}
            projectName={projectDetail.name}
            discription={projectDetail.description}
            url={projectDetail.url}
            zIndex={projectDetail.zIndex}
            offSetY={projectDetail.offSetY}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Projects;
