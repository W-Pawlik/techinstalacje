import React from "react";
import { Box, Typography } from "@mui/material";

interface TitleSubTitleContainerProps {
  title: string;
  subtitle: string;
}

const TitleSubTitleContainer: React.FC<TitleSubTitleContainerProps> = ({ title, subtitle }) => (
  <Box>
    <Typography
      variant="h1"
      textAlign="center"
      fontWeight="700"
      marginBottom="1rem"
      lineHeight="5.87rem"
    >
      {title}
    </Typography>
    <Typography
      variant="h2"
      textAlign="center"
      fontWeight="400"
      marginBottom="5rem"
      lineHeight="3.56rem"
    >
      {subtitle}
    </Typography>
  </Box>
);

export default TitleSubTitleContainer;
