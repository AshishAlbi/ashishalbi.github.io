import { Box, Icon, Paper, Stack, Typography } from "@mui/material";
import { width } from "@mui/system";
import React from "react";

function Experience() {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} gap="5vw">
      <Box
        sx={{
          border: "1px solid grey",
          borderRadius: "30px",
          width: { xs: "80vw", sm: "30vw" },
          height: "25vh",
          padding: "1em",
          boxShadow: "1px 0px 22px -1px rgba(130,130,130,1)",
        }}>
        <Typography variant="h4">Work</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "2vh",
            alignItems: "flex-end",
            justifyContent: "space-evenly",
            pt: "1em",
          }}>
          <img
            src="/assets/images/innovature_labs_logo.jpg"
            style={{ width: "7vh", height: "7vh", borderRadius: "50%" }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>Innovature labs</Typography>
            <Typography color={"GrayText"}>Software engineer</Typography>
          </Box>
          <Typography>2022-present</Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h4">Education</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1vh",
            pt: "1em",
          }}>
          <Typography
            color={"GrayText"}
            sx={{
              position: "relative",
              paddingLeft: "10px", // Adjust the padding to make space for the vertical line
              "&::before": {
                content: '""',
                position: "absolute",
                backgroundColor: "GrayText",
                left: 0,
                top: 0,
                bottom: 0,
                width: "2px", // Width of the vertical line
              },
            }}>
            2019-2022
          </Typography>
          <Typography>Bachelor of Computer Application</Typography>
          <Typography variant="subtitle2" color={"GrayText"}>
            I have completed my Bachelor's degree in Computer Applications from
            De Paul Institute of Science & Technology, affiliated with Mahatma
            Gandhi University.
            <br />
            <a href="https://depaul.edu.in/" target={'_blank'} style={{textDecoration:'none'}}>www.depaul.edu.in</a>
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}

export default Experience;
