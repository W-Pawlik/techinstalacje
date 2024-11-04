import { css, Theme } from "@emotion/react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CommonButton } from "./Button";

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  banner?: string;
  // buttonOnClick:
}

const heroSectionCss = {
  box: (banner: any) =>
    css({
      display: "flex",
      alignItems: "start",
      justifyContent: "center",
      boxSizing: "border-box",
      width: "100%",
      height: "60vh",
      flexDirection: "column",
      background: `linear-gradient(90deg, #4c80ce8d 2%, rgba(115,115,115,0) 77%), url(${banner})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }),
  cardDescription: (theme: Theme) =>
    css({
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    }),
};

export const HeroSection = ({ title, subtitle, buttonText, banner }: HeroSectionProps) => (
  <Box
    css={heroSectionCss.box(banner)}
    component="div"
    sx={{ paddingLeft: { xs: "1.2rem", sm: "2rem", md: "4rem" } }}
  >
    <Typography
      variant="h1"
      sx={{
        fontWeight: "600",
        color: "#fff",
        textTransform: "uppercase",
      }}
    >
      {title}
    </Typography>
    <Typography
      variant="h2"
      sx={{
        fontWeight: "300",
        color: "#fff",
        textTransform: "uppercase",
        marginBottom: "1.2rem",
      }}
    >
      {subtitle}
    </Typography>
    {buttonText && (
      <CommonButton size="large" text={buttonText} color="secondary" padding="0.2rem 4rem" />
    )}
  </Box>
);
