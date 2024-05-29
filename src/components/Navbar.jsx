import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useColorMode } from "./ColormodeContext";
import ColormodeToggleSwitch from "./ColorModeToggleSwitch/ColormodeToggleSwitch";

function Navbar({
  scrollToHome,
  scrollToAbout,
  scrollToProject,
  scrollToExperience,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const colorMode = useColorMode();
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.mode === 'light'?'white':'#1f1f1f',
        display: "flex",
        position: "sticky",
        top: "0",
        zIndex: "2",
        borderBottom: "1px solid",
        borderColor:theme.palette.mode === 'light'?'black':'white',
      }}
    >
      <Typography variant="h4" sx={{fontFamily:'dancingScript',marginLeft:'1em',marginTop:'.5em'}}>
        Ashish.
      </Typography>
      <Box
        sx={{
          display: { sm: "flex", xs: "none" },
          justifyContent: "flex-end",
          flex: 2,
        }}
      >
        <MenuItem
          label="Home"
          onClick={scrollToHome}
          sx={{
            "&:hover": {
              color: "lightblue",
              borderBottom: " 1px solid lightblue",
              backgroundColor: "transparent",
            },
          }}
        >
          Home
        </MenuItem>
        <MenuItem
          label="Experience"
          onClick={scrollToExperience}
          sx={{
            "&:hover": {
              color: "lightblue",
              borderBottom: " 1px solid lightblue",
              backgroundColor: "transparent",
            },
          }}
        >
          Experience
        </MenuItem>
        <MenuItem
          label="Projects"
          onClick={scrollToProject}
          sx={{
            "&:hover": {
              color: "lightblue",
              borderBottom: " 1px solid lightblue",
              backgroundColor: "transparent",
            },
          }}
        >
          Projects
        </MenuItem>
        <MenuItem
          label="About"
          onClick={scrollToAbout}
          sx={{
            "&:hover": {
              color: "lightblue",
              borderBottom: " 1px solid lightblue",
              backgroundColor: "transparent",
            },
          }}
        >
          About
        </MenuItem>
        <MenuItem
          label="Contact"
          sx={{
            "&:hover": {
              color: "lightblue",
              borderBottom: " 1px solid lightblue",
              backgroundColor: "transparent",
            },
          }}
        >
          Contact
        </MenuItem>
      </Box>
      <Box
        sx={{
          display: { sm: "none", xs: "flex" },
          justifyContent: "flex-end",
          flex: 1,
        }}
      >
        <IconButton onClick={handleClick}>
          <Hamburger toggled={open} color={theme.palette.mode ==='light'?'black':'white'} />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={scrollToHome}>Home</MenuItem>
          <MenuItem onClick={scrollToExperience}>Experience</MenuItem>
          <MenuItem onClick={scrollToProject}>Projects</MenuItem>
          <MenuItem onClick={scrollToAbout}>About</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      </Box>
      <IconButton sx={{pt:'1vh',marginRight:'1em'}}>
      <ColormodeToggleSwitch/>
      </IconButton>
    </Box>
  );
}

export default Navbar;
