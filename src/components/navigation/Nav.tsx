import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Nav: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const navLinks = [
    { text: "Home", path: "/" },
    {
      text: "Projects",
      submenu: [
        { text: "Almarpuit", path: "/projects/almarpuit" },
        { text: "Tobroxwood", path: "/projects/tobroxwood" },
        { text: "Spavarska", path: "/projects/spavarska" },
        { text: "BodyDetox", path: "/projects/bodydetox" },
        { text: "Peipsikaup", path: "/projects/peipsikaup" },
        { text: "Nagemisteraapia", path: "/projects/nagemisteraapia" },
      ],
    },
    { text: "GitHub", external: true, path: "https://github.com/juliataro" },
    { text: "CV", external: true, path: "/projects/cv" },
  ];

  const renderDrawerLinks = () => (
    <List>
      {navLinks.map((link, index) =>
        link.submenu ? (
          link.submenu.map((sublink, idx) => (
            <ListItemButton
              key={`${index}-${idx}`}
              component={RouterLink}
              to={sublink.path}
            >
              <ListItemText primary={sublink.text} />
            </ListItemButton>
          ))
        ) : (
          <ListItemButton
            key={index}
            component={link.external ? "a" : RouterLink}
            href={link.external ? link.path : undefined}
            to={!link.external ? link.path : ""}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
          >
            <ListItemText primary={link.text} />
          </ListItemButton>
        )
      )}
    </List>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#ffffff" }}>
        <Toolbar sx={{ maxWidth: "1070px", width: "60%", mx: "auto" }}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3, color: "#0a0f2c" }}>
              {navLinks.map((link, index) =>
                link.submenu ? (
                  <Box key={index}>
                    <Button
                      onClick={handleMenuOpen}
                      endIcon={<ArrowDropDownIcon />}
                      sx={{ color: "#0a0f2c" }}
                    >
                      {link.text}
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
                      {link.submenu.map((sublink, idx) => (
                        <MenuItem
                          key={idx}
                          component={RouterLink}
                          to={sublink.path}
                          onClick={handleMenuClose}
                        >
                          {sublink.text}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Button
                    key={index}
                    component={link.external ? "a" : RouterLink}
                    to={!link.external ? link.path : undefined}
                    href={link.external ? link.path : undefined}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    sx={{ color: "white" }}
                  >
                    {link.text}
                  </Button>
                )
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {renderDrawerLinks()}
      </Drawer>
    </>
  );
};

export default Nav;
