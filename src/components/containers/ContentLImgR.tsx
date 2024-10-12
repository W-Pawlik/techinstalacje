import React from "react";
import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";

interface ContentLImgRProps {
  title: string;
  content: string | React.ReactNode;
  image: string;
}

const ContentLImgRCss = {
  headingCont: () =>
    css({
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
      gap: "2rem",
      marginBottom: "5rem",
    }),
  headingText: () =>
    css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4rem",
    }),
  headingImg: () =>
    css({
      width: "100%",
      height: "100%",
    }),
};

// eslint-disable-next-line @typescript-eslint/ban-types
const ContentLImgR: React.FC<ContentLImgRProps> = ({ title, content, image }) => (
  <Box css={ContentLImgRCss.headingCont}>
    <Box css={ContentLImgRCss.headingText}>
      <Typography variant="h2" textAlign="center" width="70%" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="body1" fontSize="1rem">
        {content}
      </Typography>
    </Box>
    <Box component="img" src={image} alt="hey" css={ContentLImgRCss.headingImg} />
  </Box>
);

export default ContentLImgR;
