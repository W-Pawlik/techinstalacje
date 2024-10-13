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
        maxWidth: 700,
      }}
    >
      <Box
        sx={{
          color: "#fff",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          padding: "1.5rem",
          alignItems: { xs: "center", sm: "end" },
        }}
      >
        <Box
          component="img"
          src={imageUrl}
          sx={{
            width: { xs: "10rem", sm: "8rem" },
            // height: { xs: "10rem", sm: "8rem" },
            transform: { xs: "translateY(3rem)", sm: "none" },
            zIndex: "0",
          }}
        />
        <Box
          sx={{
            zIndex: "1",
            backgroundColor: theme.palette.common.brandBlue,
            height: "60%",
            borderBottomRightRadius: "12.5px !important",
            borderTopRightRadius: "12.5px !important",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            paddingLeft: "1rem",
            paddingBottom: "2.5rem",
            paddingTop: { xs: "1.5rem", sm: "0" },
            borderRadius: { xs: "12.5px", sm: "0" },
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
