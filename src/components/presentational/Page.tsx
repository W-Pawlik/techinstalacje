import React, { PropsWithChildren } from "react";
import { css } from "@emotion/react";
import { Box, Paper } from "@mui/material";
import { ButtonBar } from "./ButtonBar";
import { PageHeader, PageHeaderProps } from "./PageHeader";

export interface FenPageProps {
  topButtons?: React.ReactNode;
  headerProps?: PageHeaderProps;
}

export const Page = (props: PropsWithChildren<FenPageProps>): JSX.Element => {
  const { children, headerProps, topButtons } = props;

  return (
    <div css={PageCss.box}>
      <Box css={PageCss.pageContent}>{children}</Box>
    </div>
  );
};

const PageCss = {
  box: () =>
    css({
      backgroundColor: "#FAFAFA",
      padding: "4rem 6rem",
      flex: 1,
      display: "flex",
      // justifyContent: "center",
    }),
  pageContent: () =>
    css({
      flex: 1,
      backgroundColor: "white",
      padding: "4rem",
    }),
};
