import React from "react";
import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";

interface ContentWithHeadingContainerProps {
  title: string;
  subtitle: string;
  content: string | React.ReactNode;
  titlePosition?: "left" | "right";
  marginBottom?: string;
  height?: string;
}

const contentWithHeadingContainerCss = {
  mainBox: css({
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    gap: "3rem",
    width: "100%",
  }),
};

const ContentWithHeadingContainer: React.FC<ContentWithHeadingContainerProps> = ({
  title,
  subtitle,
  content,
  titlePosition = "left",
  marginBottom = "2rem",
  height = "auto",
}) => {
  const isTitleLeft = titlePosition === "left";

  return (
    <Box
      flexDirection={isTitleLeft ? "row" : "row-reverse"}
      marginBottom={marginBottom}
      height={height}
      css={contentWithHeadingContainerCss.mainBox}
    >
      <Box width="40%">
        <Typography variant="h3">{subtitle}</Typography>
        <Typography variant="h1">{title}</Typography>
      </Box>

      <Typography variant="body1" width="25%">
        {content}
      </Typography>
    </Box>
  );
};

export default ContentWithHeadingContainer;
