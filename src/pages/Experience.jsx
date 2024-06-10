import { Box, Icon, Paper, Stack, Typography } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import experienceCss from "./Experience.module.css";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Experience() {
  const logoRef = useRef();

  useEffect(() => {
    const content = logoRef.current;
    const duplicateContent = content.innerHTML;
    content.innerHTML += duplicateContent;

    const totalWidth = content.scrollWidth / 2;
    const duration = 35;

    const animation = gsap.to(content, {
      x: `-=${totalWidth}px`,
      duration: duration,
      ease: "linear",
      repeat: -1,
    });

    return () => {
      animation.kill();
    };
  }, []);
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap="5vw"
        alignItems={{ xs: "center" }}>
        <Box
          sx={{
            border: "1px solid grey",
            borderRadius: "30px",
            width: { xs: "80vw", sm: "30vw" },
            height: "25vh",
            padding: "1em",
            boxShadow: "1px 0px 22px -3px rgba(130,130,130,1)",
          }}>
          <Typography
            variant="h5"
            display={"flex"}
            gap="1vw"
            alignItems={"center"}>
            <BusinessCenterIcon /> Work
          </Typography>
          <Box
            sx={{
              height: "10vh",
              display: "flex",
              flexDirection: "row",
              gap: "2vh",
              alignItems: "flex-end",
              justifyContent: "center",
              pt: "1em",
            }}>
            <img
              src="/assets/images/logos/innovature_labs_logo.jpg"
              style={{ width: "7vh", height: "7vh", borderRadius: "50%" }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <Typography>Innovature labs</Typography>
              <Typography color={"GrayText"}>Software engineer</Typography>
            </Box>
            <Typography color={"GrayText"}>2022-present</Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h5"
            display={"flex"}
            gap="1vw"
            alignItems={"center"}>
            <SchoolIcon /> Education
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1vh",
              pt: "1em",
            }}>
            <Typography
              color={"GrayText"}
              sx={{
                position: "relative",
                paddingLeft: "10px",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  backgroundColor: "GrayText",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "2px",
                },
              }}>
              2019-2022
            </Typography>
            <Typography>Bachelor of Computer Application</Typography>
            <Typography variant="subtitle2" color={"GrayText"}>
              I have completed my Bachelor's degree in Computer Applications
              from De Paul Institute of Science & Technology, affiliated with
              Mahatma Gandhi University.
              <br />
              <a
                href="https://depaul.edu.in/"
                target={"_blank"}
                style={{ textDecoration: "none" }}>
                www.depaul.edu.in
              </a>
            </Typography>
          </Box>
        </Box>
      </Stack>
      <Box sx={{ pt: "2em", width: "80vw", overflowX: "hidden" }}>
        <Typography variant="h5">Toolkit</Typography>
        <div className={experienceCss.content} ref={logoRef}>
          <img
            src="/assets/images/logos/threeJsLogo.png"
            className={experienceCss.logos}
          />
          <img
            src="/assets/images/logos/jsLogo.png"
            className={experienceCss.logos}
          />
          <img
            src="/assets/images/logos/CSSLogo.png"
            className={experienceCss.logos}
          />
          <img
            src="/assets/images/logos/htmlLogo.png"
            className={experienceCss.logos}
          />
          <img
            src="/assets/images/logos/nodeJsLogo.png"
            className={experienceCss.logos}
          />
          <img
            src="/assets/images/logos/ReactLogo.png"
            className={experienceCss.logos}
          />
          <img
            src="/assets/images/logos/reduxLogo.png"
            className={experienceCss.logos}
          />
          <img
            src="/assets/images/logos/metaMaskLogo.png"
            className={experienceCss.logos}
          />
          <img
            src="/assets/images/logos/gitlabLogo.png"
            className={experienceCss.logos}
          />
          <img
            src="/assets/images/logos/mongoDbLogo.png"
            className={experienceCss.logos}
          />
          <img
            src="/assets/images/logos/mysqlLogo.png"
            className={experienceCss.logos}
          />
          <img
            src="/assets/images/logos/expressLogo.png"
            className={experienceCss.logos}
          />
        </div>
      </Box>
    </>
  );
}

export default Experience;
