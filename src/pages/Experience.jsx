import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";

function Experience() {
  return (
    <>
    <Typography variant="h3" color={'white'}>Work Experience</Typography>
    <Stack direction={"column"}>
      <Box sx={{backgroundColor:'black',color:'white'}}>
        <Typography variant="h5">Company</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
          iusto doloribus, consectetur sunt quia consequatur cupiditate totam
          incidunt culpa velit nisi? Amet at ex perferendis quae labore,
          asperiores corrupti magni?
        </Typography>
      </Box>
    </Stack>
    </>
  );
}

export default Experience;
