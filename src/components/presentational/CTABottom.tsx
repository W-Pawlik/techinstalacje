import React from "react";
import { Box, Typography } from "@mui/material";
import { CommonButton } from "./Button";

interface CTABottomProps {
  title: string;
  buttonText: string;
  onButtonClick: () => void;
  secondButtonText?: string;
  onSecondButtonClick?: () => void;
}

const CTABottom = ({
  title,
  buttonText,
  onButtonClick,
  secondButtonText,
  onSecondButtonClick,
}: CTABottomProps) => (
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
    <Typography variant="h2" sx={{ marginTop: "4rem", textAlign: "center", fontWeight: "bold" }}>
      {title}
    </Typography>
    <Box display="flex" flexDirection="column" gap="1rem">
      <CommonButton text={buttonText} onClick={onButtonClick} />
      {secondButtonText && onSecondButtonClick && (
        <CommonButton text={secondButtonText} onClick={onSecondButtonClick} />
      )}
    </Box>
  </Box>
);

export default CTABottom;
