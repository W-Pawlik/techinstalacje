import React from "react";
import { Box } from "@mui/system";
import { BaseCard } from "../presentational/BaseCard";

interface CardData {
  title: string;
  textContent: string;
}

interface CardsContainerProps {
  cardSize: "xs" | "small" | "medium" | "large";
  cardsData: CardData[];
}

export const CardsContainer = ({ cardSize, cardsData }: CardsContainerProps) => (
  <Box
    display="flex"
    justifyContent="center"
    gap="2rem"
    sx={{
      flexDirection: { xs: "column", sm: "column", md: "row" },
      alignItems: { xs: "center", sm: "center", md: "stretch" },
      marginBottom: "10rem",
    }}
  >
    {cardsData.map((card, index) => (
      <BaseCard key={index} title={card.title} textContent={card.textContent} size={cardSize} />
    ))}
  </Box>
);
