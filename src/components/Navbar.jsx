import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { useColorMode } from "./ColormodeContext";
import ColormodeToggleSwitch from "./ColorModeToggleSwitch/ColormodeToggleSwitch";

function Navbar({ scrollToHome, scrollToAbout, scrollToProject }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
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
        width: "100vw",
        backgroundColor: theme.palette.mode === "light" ? "white" : "black",
        display: "flex",
        position: "sticky",
        top: "0",
        zIndex: "2",
      }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "dancingScript",
          marginLeft: "1em",
          marginTop: ".5em",
        }}>
        Ashish.
      </Typography>
      <Box
        sx={{
          display: { sm: "flex", xs: "none" },
          justifyContent: "center",
          flex: 2,
        }}>
        <MenuItem
          label="Home"
          onClick={scrollToHome}
          sx={{
            "&:hover": {
              color: "#0ad9f5",
              backgroundColor: "transparent",
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                height: "1px",
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0) 15%, rgba(10,217,245,.5) 50%, rgba(0,0,0,0) 85%);",
              },
            },
          }}>
          Home
        </MenuItem>
        <MenuItem
          label="Projects"
          onClick={scrollToProject}
          sx={{
            "&:hover": {
              color: "#0ad9f5",
              backgroundColor: "transparent",
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                height: "2px",
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0) 15%, rgba(10,217,245,.5) 50%, rgba(0,0,0,0) 85%);",
              },
            },
          }}>
          Projects
        </MenuItem>
        <MenuItem
          label="About"
          onClick={scrollToAbout}
          sx={{
            "&:hover": {
              color: "#0ad9f5",
              backgroundColor: "transparent",
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                height: "2px",
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0) 15%, rgba(10,217,245,.5) 50%, rgba(0,0,0,0) 85%);",
              },
            },
          }}>
          About
        </MenuItem>
      </Box>
      <Box
        sx={{
          display: { sm: "none", xs: "flex" },
          justifyContent: "flex-end",
          flex: 1,
        }}>
        <IconButton onClick={handleClick}>
          <Hamburger
            toggled={open}
            color={theme.palette.mode === "light" ? "black" : "white"}
          />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={scrollToHome}>Home</MenuItem>
          <MenuItem onClick={scrollToProject}>Projects</MenuItem>
          <MenuItem onClick={scrollToAbout}>About</MenuItem>
        </Menu>
      </Box>
      <Box sx={{ pt: "1vh", pr: "1vw", marginRight: "1em" }}>
        <ColormodeToggleSwitch />
      </Box>
    </Box>
  );
}

export default Navbar;
