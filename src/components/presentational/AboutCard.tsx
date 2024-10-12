import React from "react";
import { Box, Theme, Typography, useTheme } from "@mui/material";

interface AboutCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

const AboutCard = ({ name, description, imageUrl }: AboutCardProps) => {
  const theme: Theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: "16px",
        maxWidth: 600,
      }}
    >
      <Box
        sx={{
          // backgroundColor: "#3f81f1",
          color: "#fff",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: "1.5rem",
          alignItems: "end",
          // flexGrow: 1,
        }}
      >
        <Box component="img" src={imageUrl} />
        <Box
          sx={{
            backgroundColor: theme.palette.common.brandBlue,
            height: "60%",
            borderBottomRightRadius: "12.5px",
            borderTopRightRadius: "12.5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            paddingLeft: "1rem",
            paddingBottom: "2.5rem",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
            {name}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default AboutCard;
