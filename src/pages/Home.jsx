import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Connectors from "../components/Connectors";
import HomePageCss from "./Home.module.css";
import { Box, Container, Typography } from "@mui/material";
import Typed from "typed.js";
import Projects from "./Projects";

function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null)
  const typeRef = useRef(null);
  const scrollToComponent = (componentRef) => {
    if (componentRef.current) {
      componentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const typed = new Typed(typeRef.current, {
      strings: ["Software Engineer", "Fullstack Developer"],
      typeSpeed: 90,
      backSpeed: 30,
      smartBackspace: false,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div style={{ backgroundColor: "black" }} ref={homeRef}>
      <Navbar
        scrollToHome={() => scrollToComponent(homeRef)}
        scrollToAbout={() => scrollToComponent(aboutRef)}
        scrollToProject={() => scrollToComponent(projectRef)}
      />
      <Box
        sx={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: "2%",
          gap:{md:0 , xs:"10px"}
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:"center"
          }}
        >
          <Box sx={{width:{md:"50%",xs:"90%"},padding:"5%", border:"1px solid grey", boxShadow:"10px 10px 15px 0px rgba(107,103,107,1)"}}>
            <span ref={typeRef} style={{ color: "white" }}></span>
            <Typography color={"greenyellow"} variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis repudiandae ipsam, expedita ad veritatis illo non dicta
              inventore culpa mollitia! Provident modi laborum nulla nisi saepe
              architecto eum distinctio quia!
            </Typography>
          </Box>
        </Container>
        <Connectors />
      </Box>
      <div
        ref={aboutRef}
        style={{
          backgroundColor: "black",
          width: "100vw",
          height: "80vh",
          color: "white",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        esse cumque expedita cum perferendis maiores voluptatum consectetur
        exercitationem, sit ut repellendus temporibus, tenetur nam explicabo
        eius et, illo itaque voluptatem!
      </div>
      <div ref={projectRef}>
        <Projects/>
      </div>
    </div>
  );
}

export default Home;
