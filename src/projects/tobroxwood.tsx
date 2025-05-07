import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Nav from "../components/navigation/Nav";
import imgMain from "../assets/images/tobrox/tobrox.jpg";
import "./styles/index.css";
import Footer from "../components/footer/Footer";

const TobroxwoodProject: React.FC = () => {
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
              alt="Tobroxwood.ee preview"
              sx={{
                borderRadius: 2,
                maxHeight: 600,
                objectFit: "cover",
                mb: 2,
              }}
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Tobroxwood.ee
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Firm website for timber product sales. Built to showcase product
                categories with clean visual presentation and ease of
                navigation. Website is done whithout sсetch, as was ordered to
                be done
              </Typography>

              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Website:
                </Typography>
                <a
                  href="https://tobroxwood.ee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  https://tobroxwood.ee
                </a>

                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Technologies used:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  WordPress, Elementor, Custom CSS, SEO tools
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  My duties in the project:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Turnkey website. Work without a sketch was more difficult than
                  I assumed - in the course of the work had to quickly solve the
                  overall composition, customise the theme Astra. We also
                  purchased hosting and domain. I handed over the project and
                  created a tutorial video.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default TobroxwoodProject;
