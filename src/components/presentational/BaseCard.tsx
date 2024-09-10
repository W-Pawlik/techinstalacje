import { css, Theme, useTheme } from "@emotion/react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export interface BaseCardInterface {
  title?: string;
  textContent?: string;
  size?: "xs" | "small" | "medium" | "large";
  imgUrl?: string;
}

// Mapa rozmiarów
const cardSizes = {
  xs: { width: "10rem", height: "10rem" },
  small: { width: "15rem", height: "15rem" },
  medium: { width: "18rem", height: "18rem" },
  large: { width: "20rem", height: "20rem" },
};

const BaseCardCss = {
  card: (theme: Theme, size: "xs" | "small" | "medium" | "large") =>
    css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "start",
      textAlign: "center",
      width: cardSizes[size].width,
      height: cardSizes[size].height,
      backgroundColor: theme.palette.common.brandBlue,
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
      },
    }),
  cardContent: (theme: Theme) =>
    css({
      color: theme.palette.common.white,
      maxWidth: "60%",
    }),
};

export const BaseCard = ({ title, textContent, size = "medium", imgUrl }: BaseCardInterface) => {
  const theme: Theme = useTheme();
  return (
    <Card css={BaseCardCss.card(theme, size)}>
      {imgUrl && <CardMedia component="img" alt={title} image={imgUrl} />}
      <CardContent css={BaseCardCss.cardContent(theme)}>
        <Typography variant="h3" fontSize="1.5rem" paddingBottom="1rem">
          {title}
        </Typography>
        <Typography variant="body2">{textContent}</Typography>
      </CardContent>
    </Card>
  );
};
