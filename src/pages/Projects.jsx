import { Stack, Typography } from "@mui/material";
import React from "react";
import Cards from "../components/Cards";

function Projects() {
  return (
    <div>
      <Typography variant="h3" color={"white"}>
        Projects
      </Typography>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction={{ xs: "column", sm: "row" }}
        padding={1}
        useFlexGap
        flexWrap={'wrap'}>
        <Cards projectName={"NFT Marketplace"} />
        <Cards projectName={"TaskWiz"} />
        <Cards projectName={"Machirepo"} />
        <Cards projectName={"Stunt car simulation"} />
        <Cards projectName={"Rain simulation"} />
      </Stack>
    </div>
  );
}

export default Projects;
