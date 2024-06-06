import { Box, Typography } from "@mui/material";
import React from "react";
import PcComponents from "../components/PcComponents";
import SocialMediaCard from "../components/SocialMediaCard/SocialMediaCard";

function AboutMe() {
  return (
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
        <Box
          sx={{
            width: { xs: "90vw", sm: "70vw" },
            height: { xs: "40vh", sm: "60vh" },
          }}>
          <PcComponents />
        </Box>
        <Box>
          <Typography padding={"1em"} width={{ xs: "80vw", sm: "40vw" }}>
            Experienced software developer with around 2 years of expertise in
            designing, developing, and maintaining software systems, with a
            particular emphasis on web design. Proficient in various platforms,
            languages, and frameworks, including React, Django and Express JS.
            Demonstrates effective self-management in independent projects and
            excels as a collaborative team member. Proven track record in
            delivering high-quality solutions within dynamic work environments.
          </Typography>
          <SocialMediaCard/>
        </Box>
      </Box>
  );
}

export default AboutMe;
