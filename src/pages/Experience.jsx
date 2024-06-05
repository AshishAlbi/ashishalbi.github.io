import { Box, Paper, Stack, Typography } from "@mui/material";
import { width } from "@mui/system";
import React from "react";

function Experience() {
  return (
    <>
    <Typography variant="h3">Work Experience</Typography>
    <Stack direction={"row"} gap='5vw'>
      <Box sx={{border:'1px solid grey',borderRadius:'30px',width:'20vw',height:'20vh',padding:'1em',boxShadow: '1px 0px 22px -1px rgba(130,130,130,1)'}}>
        <Typography variant="h4">Work</Typography>
      </Box>
      <Box>
        <Typography variant="h4">Education</Typography>

      </Box>
    </Stack>
    </>
  );
}

export default Experience;
