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
    justifyContent: "center",
    gap: "3rem",
  }),
};

const ContentWithHeadingContainer = ({
  title,
  subtitle,
  content,
  titlePosition = "left",
  marginBottom = "2rem",
}: ContentWithHeadingContainerProps) => {
  const isTitleLeft = titlePosition === "left";

  return (
    <Box
      flexDirection={isTitleLeft ? "row" : "row-reverse"}
      marginBottom={marginBottom}
      // height={height}
      css={contentWithHeadingContainerCss.mainBox}
      sx={{
        flexDirection: { xs: "column", sm: "column", md: `${isTitleLeft ? "row" : "row-reverse"}` },
        alignItems: { xs: "center", sm: "center", md: "start" },
      }}
    >
      <Box>
        <Typography variant="h2">{subtitle}</Typography>
        <Typography variant="h1">{title}</Typography>
      </Box>

      <Typography variant="body1" sx={{ maxWidth: { xs: "70%", sm: "70%", md: "40%" } }}>
        {content}
      </Typography>
    </Box>
  );
};

export default ContentWithHeadingContainer;
