import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Connectors from "../components/Connectors";
import { Box, Container, Paper, Typography } from "@mui/material";
import Typed from "typed.js";
import Projects from "./Projects";
import Experience from "./Experience";

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
    <Paper sx={{ backgroundColor: "black" }}>
      <Navbar
        scrollToHome={() => scrollToComponent(homeRef)}
        scrollToAbout={() => scrollToComponent(aboutRef)}
        scrollToProject={() => scrollToComponent(projectRef)}
        scrollToExperience={() => scrollToComponent(experienceRef)}
      />
      <Paper
        ref={homeRef}
        sx={{
          backgroundColor: "black",
          padding: "2% 0 0",
        }}
      >
        <Container maxWidth='xl'>
          <Paper sx={{ height: "90vh", backgroundColor: "black" }}>
            <Paper
              sx={{
                padding: "24px",
                position: "absolute",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                zIndex: 1,
                height: "85vh",
                pointerEvents: "none",
                borderRadius: "30px",
              }}
            >
              <Box paddingTop={20} sx>
                <span
                  ref={typeRef}
                  style={{
                    color: "white",
                    fontWeight: "bolder",
                    fontFamily: "monospace",
                    fontSize: 20,
                  }}
                />
                <Typography color={"snow"} variant="h6" fontWeight={"lighter"}>
                  Hi, I'm [Your Name], Experienced software developer with over
                  1.8 years of expertise in designing, developing, and
                  maintaining software systems, with a particular emphasis on
                  web design. Proficient in various platforms, languages, and
                  frameworks, including React, Django and Express JS.
                  Demonstrates effective self-management in independent projects
                  and excels as a collaborative team member. Proven track record
                  in delivering high-quality solutions within dynamic work
                  environments.
                </Typography>
              </Box>
            </Paper>
            <Connectors />
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
          </Paper>
        </Container>
      </Paper>
    </Paper>
  );
}

export default Home;
