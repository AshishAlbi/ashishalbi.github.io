import { Box, Icon, Paper, Stack, Typography } from "@mui/material";
import { width } from "@mui/system";
import React from "react";

function Experience() {
  return (
    <>
    <Typography variant="h3">Work Experience</Typography>
    <Stack direction={"row"} gap='5vw'>
      <Box sx={{border:'1px solid grey',borderRadius:'30px',width:'30vw',height:'20vh',padding:'1em',boxShadow: '1px 0px 22px -1px rgba(130,130,130,1)'}}>
        <Typography variant="h4">Work</Typography>
        <Box sx={{display:'flex',flexDirection:'row',gap:'2vh',alignItems:'flex-end',justifyContent:'space-evenly',pt:'1em',}}>
          <img src="/assets/images/innovature_labs_logo.jpg" style={{width:'7vh',height:'7vh',borderRadius:'50%'}}/>
          <Box sx={{display:'flex',flexDirection:'column'}}>
          <Typography>Innovature labs</Typography>
          <Typography color={'GrayText'}>Software engineer</Typography>
          </Box>
          <Typography >2022-present</Typography>

        </Box>
      </Box>
      <Box>
        <Typography variant="h4">Education</Typography>

      </Box>
    </Stack>
    </>
  );
}

export default Experience;
