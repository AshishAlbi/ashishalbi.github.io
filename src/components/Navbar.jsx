import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import Hamburger from "hamburger-react";
import React, { useState } from "react";

function Navbar({
  scrollToHome,
  scrollToAbout,
  scrollToProject,
  scrollToExperience,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        backdropFilter: "blur(8px)",
        display: "flex",
        position: "relative",
        top: "0",
        zIndex: "2",
        borderBottom: "1px solid white",
      }}
      padding={1}
    >
      <Typography variant="h4" fontFamily={"cursive"}>
        ashish.
      </Typography>
      <Box
        sx={{
          display: { sm: "flex", xs: "none" },
          justifyContent: "flex-end",
          flex: 1,
        }}
      >
        <MenuItem label="Home" onClick={scrollToHome}>
          Home
        </MenuItem>
        <MenuItem label="Experience" onClick={scrollToExperience}>
          Experience
        </MenuItem>
        <MenuItem label="Projects" onClick={scrollToProject}>
          Projects
        </MenuItem>
        <MenuItem label="About" onClick={scrollToAbout}>
          About
        </MenuItem>
        <MenuItem label="Contact">Contact</MenuItem>
      </Box>
      <Box
        sx={{
          display: { sm: "none", xs: "flex" },
          justifyContent: "flex-end",
          flex: 1,
        }}
      >
        <IconButton  onClick={handleClick}>
          <Hamburger toggled={open} color="#000000"/>
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={scrollToHome}>Home</MenuItem>
          <MenuItem onClick={scrollToExperience}>Experience</MenuItem>
          <MenuItem onClick={scrollToProject}>Projects</MenuItem>
          <MenuItem onClick={scrollToAbout}>About</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
}

export default Navbar;
