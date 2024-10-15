import React, { PropsWithChildren } from "react";
import { css } from "@emotion/react";
import { Box } from "@mui/material";
import { HeroSection } from "./HeroSection";

export interface PageProps {
  herSectionTitle: string;
  heroSectionSubtitle: string;
  buttonText?: string;
  banner?: string;
}

export const Page = (props: PropsWithChildren<PageProps>): JSX.Element => {
  const { children, herSectionTitle, heroSectionSubtitle, buttonText, banner } = props;

  return (
    <Box
      sx={{
        width: { lg: "100%", xl: "90rem" },
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <HeroSection
        title={herSectionTitle}
        subtitle={heroSectionSubtitle}
        buttonText={buttonText}
        banner={banner}
      />
      <Box css={PageCss.box}>
        <Box css={PageCss.pageContent} sx={{ padding: { xs: "2rem", sm: "3rem", md: "4rem" } }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

const PageCss = {
  box: () =>
    css({
      backgroundColor: "#FAFAFA",
      padding: "2rem 0",
      flex: 1,
      display: "flex",
    }),
  pageContent: () =>
    css({
      borderRadius: "20px !important",
      flex: 1,
      backgroundColor: "white",
      padding: "4rem",
    }),
};
