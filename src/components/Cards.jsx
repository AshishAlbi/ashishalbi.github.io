import React, { useRef } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Cards({ projectName }) {
  const cardRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(cardRef.current, { scale: 0 }, { scrollTrigger:{trigger:cardRef.current,toggleActions:"play pause none pause"},scale: 1 });
  });

  return (
    <Card
      ref={cardRef}
      sx={{
        maxWidth: 345,
        background:
          "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(71,76,77,1) 75%)",
        color: "white",
      }}
    >
      <CardMedia
        sx={{ height: 140, objectFit: "contain" }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97H9EKumm61GQCKNxBAhzQrPL7k9QlOGxrw&usqp=CAU"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {projectName}
        </Typography>
        <Typography variant="body2">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Cards;
