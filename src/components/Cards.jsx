import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

function Cards({ projectName }) {
  const cardRef = useRef();

  return (
    <Card
      sx={{
        display: "flex",
        width: { xs: "77vw", sm: "90vw" },
        backgroundColor: "lightgrey",
        flexDirection: { xs: "column", sm: "row" },
        height: "70vh",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100vw", sm: "30vw" },
          height: { xs: "30vh", sm: "70vh" },
        }}
        image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg"
        alt="Live from space album cover"
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
            width={{xs:'70vw',sm:'35vw'}}
            height={200}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, totam
            officiis! Pariatur eius ipsa dicta veniam repudiandae. Accusamus,
            qui nesciunt dolores inventore cum excepturi omnis quos, eius
            explicabo animi delectus.
          </Typography>
          <Button variant="contained">check</Button>
        </CardContent>
        {/* <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box> */}
      </Box>
    </Card>
  );
}

export default Cards;
