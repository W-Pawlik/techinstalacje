import React, { useState } from "react";
import { css } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Divider, Drawer, IconButton, Theme, Toolbar } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
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
      gap: "0.5rem",
    }),
  navLink: (theme: Theme) =>
    css({
      color: "#000",
      textTransform: "lowercase",
      fontWeight: "600",
      fontSize: "1.1rem",
      textDecoration: "none",
      "&.active": {
        color: theme.palette.common.brandBlue,
        fontWeight: "bold",
      },
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
    window.scrollTo(0, 0);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        paddingTop: "2rem",
      }}
    >
      {navItems.map((item, index) => (
        <React.Fragment key={item}>
          <NavLink
            css={topBarCss.navLink}
            onClick={() => hanldeNavClick(item)}
            key={index}
            to={`/${item}`}
          >
            {item}
          </NavLink>
        </React.Fragment>
      ))}
    </Box>
  );

  return (
    <AppBar css={topBarCss.appBar} component="nav" sx={{ Width: { md: "100%", lg: "90rem" } }}>
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
        <Box
          sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          css={topBarCss.navContainer}
        >
          {navItems.map((item, index) => (
            <React.Fragment key={item}>
              <NavLink
                css={topBarCss.navLink}
                onClick={() => hanldeNavClick(item)}
                key={index}
                to={`/${item}`}
              >
                {item}
              </NavLink>
              {index < navItems.length - 1 && (
                <Divider orientation="vertical" flexItem variant="middle" sx={{ height: "2rem" }} />
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
