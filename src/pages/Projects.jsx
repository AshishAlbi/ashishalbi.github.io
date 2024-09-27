import { Typography } from "@mui/material";
import React, { lazy } from "react";
import projectStyleClasses from "./Projects.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  const projectDetails = [
    {
      id: 1,
      name: "NFT Marketplace",
      image:
        "/assets/images/rise-humanoids-with-advanced-headgear-generative-ai.jpg",
      description:
        "Build a platform where creators, collectors, and investors can buy, sell, and trade unique digital assets that are represented as NFTs. NFTs are a type of digital asset that use blockchain technology to verify ownership and authenticity, making them scarce and valuable.Technologies used : React , Node.js , MongoDB , MetaMask , Solidity",
      zIndex: "5",
      offSetY: "0",
      url: undefined,
    },
    {
      id: 2,
      name: "TaskWiz",
      image: "/assets/images/3965795.jpg",
      description:
        "The Task Whiz is an internal application platform that facilitates task collaboration and incentivizes employees to contribute their skills and expertise to different projects within the organization. Technologies used : React , Node.js , MUI , MySQL ",
      zIndex: "4",
      offSetY: "5",
      url: undefined,
    },
    {
      id: 3,
      name: "Machirepo",
      image: "/assets/images/9019863.jpg",
      description:
        "Machirepo is a service that helps companies better understand their local market so they can decide where to locate their firm. Technologies used : React, MUI , node.js,MySQL,MUI",
      zIndex: "3",
      offSetY: "10",
      url: undefined,
    },
    {
      id: 4,
      name: "Stunt Car Simulation",
      image: "/assets/images/view-car-running-high-speed.jpg",
      description:
        "Developed an interactive car jump simulation using HTML, JavaScript, Three.js, and Cannon.js.This project showcases advanced web development techniques, including 3D rendering and physics simulation, to create an engaging user experience.Technologies used : Three.js , HTML , JavaScript , CSS , Cannon.js",
      zIndex: "2",
      offSetY: "15",
      url: "https://ashishalbi.github.io/CarStunt/",
    },
    {
      id: 5,
      name: "Rain Simulation",
      image: "/assets/images/view-apocalyptic-dark-clouds.jpg",
      description:
        "Developed an immersive web-based Realistic Rain simulation using HTML, CSS, JavaScript, and Three.js, focusing on creating dynamic 3D rain effects with optimized performance and responsive design",
      zIndex: "1",
      offSetY: "20",
      url: "https://ashishalbi.github.io/Realistic_rain/",
    },
  ];
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
