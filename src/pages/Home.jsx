import React, { lazy, useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Connectors from "../components/Connectors";
import { Box, Container, Paper, Typography } from "@mui/material";
import Typed from "typed.js";
import Projects from "./Projects";
import Loader from "../components/Loader/Loader";
// import Experience from "./Experience";
const Experience = lazy(() => import("./Experience"));

function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
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
    <Container sx={{backgroundColor:'black',position:'absolute'}} maxWidth={'l'}>
      {/* {loading && <Loader />} */}
      <Navbar
        scrollToHome={() => scrollToComponent(homeRef)}
        scrollToAbout={() => scrollToComponent(aboutRef)}
        scrollToProject={() => scrollToComponent(projectRef)}
        scrollToExperience={() => scrollToComponent(experienceRef)}
      />
      <Paper
        ref={homeRef}
        sx={{
          // height: "250vh",
          backgroundColor: "black",
          padding: "2% 0 0",
        }}
      >
        <Paper sx={{backgroundColor: "black" }}>
          <Container maxWidth="xl">
            <Paper
              sx={{
                padding: "25px",
                position: "absolute",
                backgroundColor: "rgba(0, 0, 0, .4)",
                zIndex: 1,
                height: "85vh",
                // width: { xs: "85vw", sm: "75vw" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: "center",
                pointerEvents: "none",
              }}
            >
              <Box>
                <span
                  ref={typeRef}
                  style={{
                    color: "white",
                    fontWeight: "bolder",
                    fontFamily: "sans-serif",
                    fontSize: 25,
                  }}
                />
                <Typography
                  color={"snow"}
                  variant="h5"
                  sx={{ width: { sm: "80%", xs: "100%" } }}
                >
                  Hi, I'm Ashish, Experienced software developer with over 2
                  years of expertise in designing, developing, and maintaining
                  software systems, with a particular emphasis on web design.
                  Proficient in various platforms, languages, and frameworks,
                  including React, Django and Express JS. Demonstrates effective
                  self-management in independent projects and excels as a
                  collaborative team member. Proven track record in delivering
                  high-quality solutions within dynamic work environments.
                </Typography>
              </Box>
            </Paper>
            <Connectors />
          </Container>
          <Container sx={{ backgroundColor: "black" }} maxWidth="xl">
            <Paper
              ref={experienceRef}
              sx={{ backgroundColor: "black", padding: "5%" }}
            >
              <Experience />
            </Paper>
            <Paper
              ref={projectRef}
              sx={{ backgroundColor: "black", padding: "5%" }}
            >
              <Projects />
            </Paper>
            <Paper
              ref={aboutRef}
              sx={{
                backgroundColor: "black",
                color: "white",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium esse cumque expedita cum perferendis maiores
              voluptatum consectetur exercitationem, sit ut repellendus
              temporibus, tenetur nam explicabo eius et, illo itaque voluptatem!
            </Paper>
          </Container>
        </Paper>
      </Paper>
    </Container>
  );
}

export default Home;
