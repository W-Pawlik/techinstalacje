import { css } from "@emotion/react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { AppBar, Box, Divider, Theme, Typography } from "@mui/material";
import { SocialMediaContainer } from "../containers/SocialMediaContainer";

const bottomBarCss = {
  footer: () =>
    css({
      position: "absolute",
      top: "auto",
      bottom: 0,
      padding: "0 5rem",
    }),
  footerContent: (theme: Theme) =>
    css({
      color: theme.palette.common.black,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.8rem 0",
      borderTop: "thin solid #d8d8d8",
      fontWeight: "600",
    }),
};

const socialMediaIcons = [
  { icon: FacebookIcon, url: "https://www.facebook.com" },
  { icon: LinkedInIcon, url: "https://www.linkedin.com/" },
  { icon: AlternateEmailIcon, url: "https://mail.google.com" },
];

export const BottomBar = () => (
  <AppBar
    component="footer"
    css={bottomBarCss.footer}
    sx={{ position: "absolute", top: "auto", bottom: 0 }}
  >
    <Box css={bottomBarCss.footerContent}>
      <Typography variant="body1" sx={{ fontWeight: "600" }}>
        Copyright &copy; TechInstalacje. All rights reserved.
      </Typography>
      <SocialMediaContainer icons={socialMediaIcons} />
    </Box>
  </AppBar>
);
