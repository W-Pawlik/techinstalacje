import { css } from "@emotion/react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { AppBar, Box, Theme, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/LogoTechInstalacje.svg";
import { SocialMediaContainer } from "../containers/SocialMediaContainer";

const bottomBarCss = {
  footer: () =>
    css({
      display: "flex",
      flexDirection: "column",
      padding: "0 5rem",
    }),
  footerTopContent: (theme: Theme) =>
    css({
      color: theme.palette.common.black,
      width: "100%",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      padding: "2rem 0",
    }),
  footerBottomContent: (theme: Theme) =>
    css({
      color: theme.palette.common.black,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      textAlign: "center",
      padding: "0.8rem 0",
      borderTop: "thin solid #d8d8d8",
      fontWeight: "600",
    }),
  logoImg: () =>
    css({
      width: "10rem",
    }),
  contactCont: () =>
    css({
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      gap: "0.5rem",
    }),
  footerTopLeft: () =>
    css({
      display: "flex",
      gap: "2rem",
      flexDirection: "column",
      alignItems: "start",
    }),
  nav: () =>
    css({
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      marginLeft: "4rem",
      gap: "0.5rem",
    }),
  navLink: () =>
    css({
      textDecoration: "none",
      color: "#000000",
      fontWeight: "600",
    }),
};

const socialMediaIcons = [
  { icon: FacebookIcon, url: "https://www.facebook.com" },
  { icon: AlternateEmailIcon, url: "https://mail.google.com" },
];

export const BottomBar = () => {
  const navItems = ["home", "oferta", "o nas", "kontakt", "realizacje"];
  const navigate = useNavigate();

  const hanldeNavClick = (item: string) => {
    navigate(`/${item}`);
  };

  return (
    <AppBar component="footer" css={bottomBarCss.footer}>
      <Box css={bottomBarCss.footerTopContent}>
        <Box css={bottomBarCss.footerTopLeft}>
          <Box component="img" src={logo} alt="logo" css={bottomBarCss.logoImg} />
          <Box css={bottomBarCss.contactCont}>
            <Typography variant="body1" sx={{ fontWeight: "600", fontSize: "1.1rem" }}>
              Kontakt
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "600" }}>
              telefon: +48 690 00 1858
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "600" }}>
              mail: biuro@techinstalacje.pl
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "600" }}>
              adres: 50 -020 Wrocław ul.Piłsudskiego 74/320
            </Typography>
          </Box>
        </Box>
        <Box component="nav" css={bottomBarCss.nav}>
          {navItems.map((item, index) => (
            <NavLink
              css={bottomBarCss.navLink}
              onClick={() => hanldeNavClick(item)}
              key={index}
              to={`/${item}`}
            >
              {item}
            </NavLink>
          ))}
        </Box>
      </Box>
      <Box
        css={bottomBarCss.footerBottomContent}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          Copyright &copy; TechInstalacje. All rights reserved.
        </Typography>
        <SocialMediaContainer icons={socialMediaIcons} />
      </Box>
    </AppBar>
  );
};
