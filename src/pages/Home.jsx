import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Connectors from "../components/Connectors";
import HomePageCss from "./Home.module.css";
import { Box, Container, Typography } from "@mui/material";

function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const scrollToComponent = (componentRef) => {
    if (componentRef.current) {
      componentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div style={{ backgroundColor: "black" }} ref={homeRef}>
      <Navbar
        scrollToHome={()=>scrollToComponent(homeRef)}
        scrollToAbout={()=>scrollToComponent(aboutRef)}
      />
      <Box
        sx={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: "2px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            color={"#4060ff"}
            variant="h5"
            className={HomePageCss.typed_text}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Typography>
          <Typography color={"white"} variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            repudiandae ipsam, expedita ad veritatis illo non dicta inventore
            culpa mollitia! Provident modi laborum nulla nisi saepe architecto
            eum distinctio quia!
          </Typography>
        </Container>
        <Connectors />
      </Box>
      <div
        ref={aboutRef}
        style={{ backgroundColor: "black", width: "100vw", height: "80vh" ,color:"white"}}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        esse cumque expedita cum perferendis maiores voluptatum consectetur
        exercitationem, sit ut repellendus temporibus, tenetur nam explicabo
        eius et, illo itaque voluptatem!
      </div>
    </div>
  );
}

export default Home;
