import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { BurgerClose } from "react-burger-icons";

function Navbar({ scrollToHome, scrollToAbout }) {
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
      color={"whitesmoke"}
      sx={{
        backgroundColor: "black",
        display: "flex",
        position: "sticky",
        top: 0,
        zIndex: "1",
        borderBottom: "1px solid white",
      }}
      padding={1}
    >
      <Typography variant="h3" fontFamily={"serif"}>
        Text
      </Typography>
      <Box
        sx={{
          display: { sm: "flex", xs: "none" },
          justifyContent: "flex-end",
          flex: 1,
          color: "white",
        }}
      >
        <MenuItem label="Home" onClick={scrollToHome}>
          Home
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
        <IconButton sx={{ color: "white" }} onClick={handleClick}>
          <BurgerClose isClosed={open} />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={scrollToHome}>Home</MenuItem>
          <MenuItem onClick={scrollToAbout}>About</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
}

export default Navbar;
