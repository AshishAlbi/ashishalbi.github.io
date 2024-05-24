import { Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import Cards from "../components/Cards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const containerRef = useRef();
  const cardRef = useRef();
  useGSAP(() => {
    console.log(containerRef.current.offsetWidth);
    let sections = gsap.utils.toArray(cardRef.current.children);
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
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
      style={{ overflowX: "hidden" ,width:'100%',height:'90vh',paddingTop:'10vh'}}>
      <Typography variant="h3">
        Projects
      </Typography>
      <div
        ref={cardRef}
        style={{
          display: "flex",
          flexWrap: "nowrap",
          width: "600%",
          // gap: "1px",
          overflowX: "hidden",
        }}>
        <Cards projectName={"NFT Marketplace"} />
        <Cards projectName={"TaskWiz"} />
        <Cards projectName={"Machirepo"} />
        <Cards projectName={"Stunt car simulation"} />
        <Cards projectName={"Rain simulation"} />
      </div>
    </div>
  );
}

export default Projects;
