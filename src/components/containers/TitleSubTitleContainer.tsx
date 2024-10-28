import { Box, Typography } from "@mui/material";

interface TitleSubTitleContainerProps {
  title: string;
  subtitle: string;
}

const TitleSubTitleContainer = ({ title, subtitle }: TitleSubTitleContainerProps) => (
  <Box>
    <Typography
      variant="h1"
      textAlign="center"
      fontWeight="bold"
      marginBottom="1rem"
      lineHeight="2rem"
      sx={{ borderBottom: "thin solid #d8d8d8", paddingBottom: "2rem", fontSize: "2rem" }}
    >
      {title}
    </Typography>
    <Typography
      variant="h2"
      textAlign="center"
      fontWeight="400"
      marginBottom="5rem"
      lineHeight="2rem"
      fontSize="1.4rem"
    >
      {subtitle}
    </Typography>
  </Box>
);

export default TitleSubTitleContainer;
