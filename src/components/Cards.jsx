import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, useTheme } from "@mui/material";

function Cards({ projectName, image, url, discription }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        width: { xs: "85vw", sm: "90vw" },
        backgroundColor:
          theme.palette.mode === "light" ? "lightgrey" : "#353535",
        flexDirection: { xs: "column", sm: "row" },
        height: {xs:'80vh',sm:"75vh"},
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100vw", sm: "30vw" },
          height: { xs: "30vh", sm: "75vh" },
        }}
        image={image}
        alt="loading..."
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {projectName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            width={{ xs: "70vw", sm: "35vw" }}
            height={200}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, totam
            officiis! Pariatur eius ipsa dicta veniam repudiandae. Accusamus,
            qui nesciunt dolores inventore cum excepturi omnis quos, eius
            explicabo animi delectus.
          </Typography>
         {url && <a href={url} target="blank">
            <Button variant="contained">check</Button>
          </a>}
        </CardContent>
      </Box>
    </Card>
  );
}

export default Cards;
