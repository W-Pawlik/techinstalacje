import { css, Theme } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import banner from "../../assets/images/heroSectionBanner.jpg";
import { CommonButton } from "./Button";

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  // buttonOnClick:
}

const heroSectionCss = {
  box: (theme: Theme) =>
    css({
      display: "flex",
      alignItems: "start",
      justifyContent: "center",
      paddingLeft: "4rem",
      height: "26rem",
      flexDirection: "column",
      // eslint-disable-next-line max-len
      background: `linear-gradient(90deg, rgba(74,128,210,1) 26%, rgba(76,128,206,1) 46%, rgba(115,115,115,0) 77%), url(${banner})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }),
  cardDescription: (theme: Theme) =>
    css({
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    }),
};

export const HeroSection = ({ title, subtitle, buttonText }: HeroSectionProps) => (
  <Box css={heroSectionCss.box} component="div">
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "3rem", sm: "3rem", md: "5rem" },
        fontWeight: "600",
        color: "#fff",
      }}
    >
      {title}
    </Typography>
    <Typography
      variant="h2"
      sx={{
        fontSize: { xs: "3rem", sm: "3rem" },
        fontWeight: "300",
        color: "#fff",
      }}
    >
      {subtitle}
    </Typography>
    <CommonButton size="large" text={buttonText} color="secondary" padding="0.2rem 4rem" />
  </Box>
);
