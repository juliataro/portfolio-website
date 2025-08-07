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
                navigation.
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
                  WordPress WooCommerce, Elementor PB, Custom CSS, UptimeRobot
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Support:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Yes
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  My duties in the project:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Project manager and developer. This is turnkey website that is
                  made without sketch, as was ordered to be done ASAP. <br />
                  Astra theme had been chosen for need to use WooComerce in the
                  future.
                  <br />I used plugins to secure the login page, to make
                  backups, had been installed UptimeRobot for real-time
                  monitoring performance and CAPTCHA.
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
