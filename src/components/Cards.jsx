import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Modal } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Cards({ projectName, image, url, discription }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      sx={{
        display: "flex",
        width: { sm: "28vw", xs: "80vw" },
        backgroundColor:
          theme.palette.mode === "light" ? "lightgrey" : "#353535",
        flexDirection: "column",
        height: { sm: "80vh", xs: "65vh" },
      }}>
      <CardMedia
        component="img"
        sx={{
          width: "100%",
          height: { sm: "65vh", xs: "55vh" },
          objectFit: "fill",
        }}
        image={image}
        alt="loading..."
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CardContent
          sx={{
            flex: "1 0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1vh",
          }}>
          <Typography component="div" variant="h5" textAlign={"center"}>
            {projectName}
          </Typography>
          <Button
            sx={{ display: "block" }}
            variant="contained"
            onClick={handleOpen}>
            view
          </Button>
        </CardContent>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            transform: "translate(-50%, -50%)",
            width: { sm: "60vw", xs: "80vw" },
            backgroundColor:
              theme.palette.mode === "light" ? "lightgrey" : "#353535",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            gap:'2vh'
          }}>
          <Typography variant="h4" component="h2" textAlign={"center"} color="text.secondary">
            {projectName}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            component="div"
            width={{ xs: "70vw", sm: "50vw" }}
            >
            {discription}
          </Typography>
            {url && (
              <a href={url} target="blank" style={{ textDecoration: "none" }}>
                <Button sx={{ display: "block" }} variant="contained">
                  check
                </Button>
              </a>
            )}
        </Box>
      </Modal>
    </Card>
  );
}

export default Cards;
