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
import imgMain from "../assets/images/peipsikaup/peipsikaup.jpg";
import imgDetail1 from "../assets/images/peipsikaup/peipsikaup1.jpg"; // Replace with real file
//import imgDetail2 from "../assets/images/almarpuit/detail2.jpg"; // Replace with real file
import "./styles/index.css";
import Footer from "../components/footer/Footer";

const PeipsikaupProject: React.FC = () => {
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
              alt="Almarpuit website"
              sx={{
                borderRadius: 2,
                maxHeight: 400,
                objectFit: "cover",
                mb: 2,
              }}
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Peipsikaup
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Online WordPress shop selling local handmade products from the
                Pskov Lake area in Estonia
              </Typography>

              {/* ➕ Additional Info Section */}
              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Website:
                </Typography>
                <a
                  href="https://peipsikaup.ee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  https://peipsikaup.ee/
                </a>

                <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
                  Technologies planned to be used:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  WordPress/Woocommerce Template Astra theme
                </Typography>

                <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
                  My duties in the project:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Planning, client communication, image editing, product data
                  entry, testing, project handover and training.
                </Typography>
              </Box>

              {/* ➕ Extra Images   */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  marginTop: "2rem",
                }}
              >
                <CardMedia
                  component="img"
                  image={imgDetail1}
                  alt="Peipsikaup"
                  sx={{ borderRadius: 2 }}
                />
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default PeipsikaupProject;
