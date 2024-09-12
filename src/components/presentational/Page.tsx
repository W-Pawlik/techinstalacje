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
    <>
      <HeroSection
        title={herSectionTitle}
        subtitle={heroSectionSubtitle}
        buttonText={buttonText}
        banner={banner}
      />
      <div css={PageCss.box}>
        <Box css={PageCss.pageContent}>{children}</Box>
      </div>
    </>
  );
};

const PageCss = {
  box: () =>
    css({
      backgroundColor: "#FAFAFA",
      padding: "4rem 6rem",
      flex: 1,
      display: "flex",
    }),
  pageContent: () =>
    css({
      flex: 1,
      backgroundColor: "white",
      padding: "4rem",
    }),
};
