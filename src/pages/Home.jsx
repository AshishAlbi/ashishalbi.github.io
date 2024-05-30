import React, { lazy, useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Connectors from "../components/Connectors";
import { Box, Container, Paper, Typography } from "@mui/material";
import Typed from "typed.js";
import Projects from "./Projects";
import Loader from "../components/Loader/Loader";
import DownloadResumeButton from "../components/Button/DownloadResumeButton";
import AboutMe from "./AboutMe";
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
    <Container disableGutters sx={{ position: "absolute" }} maxWidth={"l"}>
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
          padding: "2% 0 0",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            gap: { xs: "10px" },
            width: "100vw",
            height: "90vh",
          }}
        >
          <Box
            sx={{
              width: { xs: "80vw", sm: "35vw" },
              height: { xs: "35vh" },
              position: "relative",
              top: { sm: "40vh" },
              left: { sm: "2vw", xs: "10vw" },
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h5">
              Hello, I'm{" "}
              <span style={{ fontWeight: "bolder", fontFamily: "monospace" }}>
                Ashish
              </span>
              ,
            </Typography>

            <div>
              <span
                ref={typeRef}
                style={{
                  fontWeight: "bolder",
                  fontFamily: "sans-serif",
                  fontSize: 25,
                  height: "5vh",
                  width: "90vw",
                }}
              />
            </div>
            <Typography variant="h5">
              with 2 years of experience dedicated to crafting innovative
              solutions and seamless digital experiences.
            </Typography>
            <DownloadResumeButton />
          </Box>
          <Box
            sx={{
              width: { xs: "90vw", sm: "60vw" },
              height: { xs: "50vh", sm: "90vh" },
              flex: 1,
            }}
          >
            <Connectors />
          </Box>
        </Container>
        <Container maxWidth="xl">
          <Paper ref={experienceRef} sx={{ padding: "5%" }}>
            <Experience />
          </Paper>
          <Paper ref={projectRef} sx={{ padding: "5%" }}>
            <Projects />
          </Paper>
          <Paper ref={aboutRef} sx={{padding:"5%"}}>
            <AboutMe/>
          </Paper>
        </Container>
      </Paper>
    </Container>
  );
}

export default Home;
