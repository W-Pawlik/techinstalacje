import React from "react";
import { Box } from "@mui/system";
import { BaseCard } from "../presentational/BaseCard";

interface CardData {
  title: string;
  textContent: string;
  pngIcon?: string;
}

interface CardsContainerProps {
  cardSize: "xs" | "small" | "medium" | "large";
  cardsData: CardData[];
}

export const CardsContainer = ({ cardSize, cardsData }: CardsContainerProps) => (
  <Box
    display="flex"
    justifyContent="center"
    gap="4rem"
    sx={{
      flexWrap: "wrap",
      flexDirection: { sm: "column", md: "row" },
      alignItems: { sm: "center", md: "stretch" },
      marginBottom: "5rem",
    }}
  >
    {cardsData.map((card, index) => (
      <BaseCard
        key={index}
        title={card.title}
        textContent={card.textContent}
        size={cardSize}
        pngIcon={card.pngIcon}
      />
    ))}
  </Box>
);
