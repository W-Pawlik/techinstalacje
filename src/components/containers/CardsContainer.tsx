import React from "react";
import { Box } from "@mui/system";
import { BaseCard } from "../presentational/BaseCard";

interface CardData {
  title: string;
  textContent: string;
  pngIcon?: string;
}

interface CardsContainerProps {
  responsiveColumn?: string;
  cardsData: CardData[];
}

export const CardsContainer = ({ cardsData, responsiveColumn }: CardsContainerProps) => (
  <Box
    display="flex"
    justifyContent="center"
    sx={{
      flexDirection: { xs: `${responsiveColumn}`, sm: "row" },
      gap: { xs: "1.5rem", sm: "2rem", md: "3rem", lg: "4rem" },
      flexWrap: "wrap",
      alignItems: { xs: "center", sm: "center", md: "stretch" },
      marginBottom: "5rem",
      flex: {
        xs: "1 1 calc(50% - 2rem)",
        md: "1 1 calc(33.33% - 2rem)",
      },
    }}
  >
    {cardsData.map((card, index) => (
      <BaseCard
        key={index}
        title={card.title}
        textContent={card.textContent}
        pngIcon={card.pngIcon}
      />
    ))}
  </Box>
);
