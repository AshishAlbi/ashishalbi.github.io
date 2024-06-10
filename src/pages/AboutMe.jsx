import { Box, Typography } from "@mui/material";
import React from "react";
import PcComponents from "../components/PcComponents";
import SocialMediaCard from "../components/SocialMediaCard/SocialMediaCard";

function AboutMe() {
  return (
    <>
      <Typography variant="h3" align="center">
        About Me
      </Typography>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
        <Box
          sx={{
            width: { xs: "90vw", sm: "70vw" },
            height: { xs: "40vh", sm: "60vh" },
          }}>
          <PcComponents />
        </Box>
        <Box>
          <Typography
            padding={"1em"}
            component="p"
            width={{ xs: "80vw", sm: "40vw" }}>
            I'm a passionate Software Engineer with extensive experience in
            developing dynamic and responsive web applications. My expertise
            lies in React, Node.js, HTML, CSS, JavaScript, and Three.js. I excel
            in both front-end and back-end development, crafting seamless user
            experiences and robust server-side solutions.
            <br />
            <br />
            My journey in tech hasequipped me with a strong foundation in coding
            and a keen eye for detail. I thrive on solving complex problems and
            continuously learning new technologies to stay at the forefront of
            the industry. Whether it's designing intuitive interfaces or
            optimizing application performance, I approach each project with
            dedication and creativity.
            <br />
            <br />
            Outside of coding, I enjoy playing video games and going on bike
            rides. These hobbies keep me refreshed and inspired, fueling my
            creativity and problem-solving skills. I'm always open to new
            opportunities and collaborations. Let's connect and create something
            amazing together!
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default AboutMe;
