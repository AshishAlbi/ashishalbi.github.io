import { Box, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import React from "react";
import SocialMediaCard from "./SocialMediaCard/SocialMediaCard";

function Footer() {
  return (
    <Box
      borderTop="1px solid silver"
      sx={{
        height: "10vh",
        display: "flex",
        flexDirection:{xs:'column',sm:'row'},
        alignItems: "center",
        justifyContent: "space-around",
      }}>
      <SocialMediaCard />
      <Typography variant="subtitle2" color={"GrayText"} height={"5vh"} display={"flex"} alignItems='center' gap={'.5em'}>
        <CopyrightIcon />
        Ashish Albi.All rights reserved
      </Typography>
    </Box>
  );
}

export default Footer;
