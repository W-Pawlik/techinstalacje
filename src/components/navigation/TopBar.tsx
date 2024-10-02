import React, { useState } from "react";
import { css } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/LogoTechInstalacje.svg";

const topBarCss = {
  appBar: () =>
    css({
      alignSelf: "center",
    }),
  toolBar: () =>
    css({
      width: "100%",
      justifyContent: "space-between",
    }),
  navContainer: () =>
    css({
      display: "flex",
      gap: "0.8rem",
    }),
  navButton: () =>
    css({
      color: "#000",
      textTransform: "lowercase",
      fontWeight: "600",
      fontSize: "1.1rem",
    }),
  logo: () =>
    css({
      width: "14rem",
    }),
};

const navItems = ["home", "oferta", "o nas", "kontakt", "realizacje"];

export const TopBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const hanldeNavClick = (item: string) => {
    navigate(`/${item}`);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "start" }} onClick={() => hanldeNavClick(item)}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar css={topBarCss.appBar} component="nav" sx={{ width: { md: "100%", lg: "90rem" } }}>
      <Toolbar css={topBarCss.toolBar}>
        <IconButton
          onClick={() => {
            navigate("/home");
          }}
          disableRipple
          disableFocusRipple
          disableTouchRipple
          aria-label="logo"
        >
          <Box
            component="img"
            src={logo}
            css={topBarCss.logo}
            sx={{ width: { xs: "10rem", md: "14rem" } }}
          />
        </IconButton>
        <Box sx={{ display: { xs: "none", md: "flex" } }} css={topBarCss.navContainer}>
          {navItems.map((item, index) => (
            <React.Fragment key={item}>
              <Button size="medium" css={topBarCss.navButton} onClick={() => hanldeNavClick(item)}>
                {item}
              </Button>
              {index < navItems.length - 1 && (
                <Divider orientation="vertical" flexItem variant="middle" />
              )}
            </React.Fragment>
          ))}
        </Box>

        <IconButton onClick={handleDrawerToggle} sx={{ display: { md: "none" } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};
