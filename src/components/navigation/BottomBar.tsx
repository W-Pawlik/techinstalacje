import { css } from "@emotion/react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FacebookIcon from "@mui/icons-material/Facebook";
import { AppBar, Box, Theme, Typography } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
      textAlign: "start",
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
  navLink: (theme: Theme) =>
    css({
      textDecoration: "none",
      color: "#000000",
      fontWeight: "600",
      "&.active": {
        color: theme.palette.common.brandBlue,
        fontWeight: "bold",
      },
    }),
};

const socialMediaIcons = [
  { icon: FacebookIcon, url: "https://www.facebook.com" },
  { icon: AlternateEmailIcon, url: "https://mail.google.com" },
];

export const BottomBar = () => {
  const navItems = ["home", "oferta", "o nas", "kontakt", "realizacje"];
  const navigate = useNavigate();
  const location = useLocation();

  const hanldeNavClick = (item: string) => {
    const targetPath = `/${item}`;

    if (location.pathname === targetPath) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(targetPath);
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <AppBar
      component="footer"
      css={bottomBarCss.footer}
      sx={{ padding: { xs: "1rem", sm: "5rem" } }}
    >
      <Box
        css={bottomBarCss.footerTopContent}
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
        }}
      >
        <Box css={bottomBarCss.footerTopLeft} sx={{ paddingBottom: { xs: "2rem" } }}>
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
        <Box
          component="nav"
          css={bottomBarCss.nav}
          sx={{
            width: "100%",
            marginLeft: { xs: "0", sm: "4rem" },
            borderTop: { xs: "solid 1px #D9D9D9", sm: "none" },
            paddingTop: { xs: "2rem", sm: "none" },
          }}
        >
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
