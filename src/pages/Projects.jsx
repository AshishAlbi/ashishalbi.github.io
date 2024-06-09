import { Typography } from "@mui/material";
import React, { useRef } from "react";
import Cards from "../components/Cards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const containerRef = useRef();
  const cardRef = useRef();
  const projectDiscription = {
    nftMarketplace:
      "Build a a platform where creators, collectors, and investors can buy, sell, and trade unique digital assets that are represented as NFTs. NFTs are a type of digital asset that use blockchain technology to verify ownership and authenticity, making them scarce and valuable.Technologies used : React , Node.js , MongoDB , MetaMask , Solidity",
    taskWiz:
      "The Task Whiz is an internal application platform that facilitates task collaboration and incentivizes employees to contribute their skills and expertise to different projects within the organization. Technologies used : React , Node.js , MUI , MySQL ",
    machirepo:
      "Machirepo is a service that helps companies better understand their local market so they can decide where to locate their firm. Technologies used : React, MUI , node.js,MySQL,MUI",
    stundCarSimulation:
      "Developed an interactive car jump simulation using HTML, JavaScript, Three.js, and Cannon.js.This project showcases advanced web development techniques, including 3D rendering and physics simulation, to create an engaging user experience.Technologies used : Three.js , HTML , JavaScript , CSS , Cannon.js",
    rainSimulation:
      "Developed an immersive web-based Realistic Rain simulation using HTML, CSS, JavaScript, and Three.js, focusing on creating dynamic 3D rain effects with optimized performance and responsive design",
  };
  useGSAP(() => {
    let sections = gsap.utils.toArray(cardRef.current.children);
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      force3D: true,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: true,
        snap: 1 / (sections.length - 1),
        end: "+=" + 3500,
      },
    });
  });

  return (
    <div
      ref={containerRef}
      style={{
        overflowX: "hidden",
        width: "100%",
        height: "90vh",
        paddingTop: "10vh",
      }}>
      <Typography variant="h3">Projects</Typography>
      <div
        ref={cardRef}
        style={{
          display: "flex",
          flexWrap: "nowrap",
          width: "600%",
          // gap: "1px",
          overflowX: "hidden",
        }}>
        <Cards
          image={
            "/assets/images/rise-humanoids-with-advanced-headgear-generative-ai.jpg"
          }
          projectName={"NFT Marketplace"}
          discription={projectDiscription.nftMarketplace}
        />
        <Cards
          image={"/assets/images/3965795.jpg"}
          projectName={"TaskWiz"}
          discription={projectDiscription.taskWiz}
        />
        <Cards
          image={"/assets/images/9019863.jpg"}
          projectName={"Machirepo"}
          discription={projectDiscription.machirepo}
        />
        <Cards
          projectName={"Stunt car simulation"}
          image={"/assets/images/view-car-running-high-speed.jpg"}
          url={"https://ashishalbi.github.io/CarStunt/"}
          discription={projectDiscription.stundCarSimulation}
        />
        <Cards
          projectName={"Rain simulation"}
          image={"/assets/images/view-apocalyptic-dark-clouds.jpg"}
          url={"https://ashishalbi.github.io/Realistic_rain/"}
          discription={projectDiscription.rainSimulation}
        />
      </div>
    </div>
  );
}

export default Projects;
