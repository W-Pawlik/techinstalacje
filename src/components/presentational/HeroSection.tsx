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
      paddingLeft: "4rem",
      height: "26rem",
      flexDirection: "column",
      // eslint-disable-next-line max-len
      background: `linear-gradient(90deg, rgba(74,128,210,1) 16%, rgba(76,128,206,1) 36%, rgba(115,115,115,0) 77%), url(${banner})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }),
  cardDescription: (theme: Theme) =>
    css({
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    }),
};

export const HeroSection = ({ title, subtitle, buttonText, banner }: HeroSectionProps) => (
  <Box css={heroSectionCss.box(banner)} component="div">
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "3rem", sm: "3rem", md: "4rem" },
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
        fontSize: { xs: "3rem", sm: "2.5rem" },
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
