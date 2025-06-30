import React from "react";

import { Container, Box, Card, CardMedia } from "@mui/material";
import Nav from "../components/navigation/Nav";
import imgMain from "../assets/images/JuliaTaro_CV.jpg";
//import imgDetail1 from "../assets/images/almarpuit/detail1.jpg"; // Replace with real file
//import imgDetail2 from "../assets/images/almarpuit/detail2.jpg"; // Replace with real file
import "./styles/index.css";
import Footer from "../components/footer/Footer";

const CVProject: React.FC = () => {
  return (
    <>
      <Nav />
      <Box className="bcg-color">
        <Container maxWidth="md">
          <Card
            sx={{
              p: 2,
              boxShadow: 3,
              transition: "0.3s",
              borderRadius: 3,
              "&:hover": {
                boxShadow: 6,
                transform: "translateY(-4px)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={imgMain}
              alt="Julia Taro CV"
              sx={{
                borderRadius: 2,
                maxHeight: 1200,
                objectFit: "cover",
                mb: 0,
              }}
            />
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default CVProject;
