import { Box, Card, CardContent, CardMedia, css, Theme, Typography, useTheme } from "@mui/material";

export interface BaseCardInterface {
  title?: string;
  textContent?: string;
  size?: "xs" | "small" | "medium" | "large";
  imgUrl?: string;
  pngIcon?: string;
}

// Mapa rozmiarów
const cardSizes = {
  xs: { width: "10rem", height: "10rem" },
  small: { width: "15rem", height: "15rem" },
  medium: { width: "18rem", height: "18rem" },
  large: { width: "16.25rem", height: "16.25rem" },
};

const BaseCardCss = {
  card: (theme: Theme, size: "xs" | "small" | "medium" | "large") =>
    css({
      flexBasis: "calc(23.33% - 10px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "start",
      borderRadius: "20px",
      textAlign: "center",
      padding: "1rem",
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
      padding: "1rem",
    }),
};

export const BaseCard = ({
  title,
  textContent,
  size = "medium",
  imgUrl,
  pngIcon,
}: BaseCardInterface) => {
  const theme: Theme = useTheme();
  return (
    <Card data-testid="card" css={BaseCardCss.card(theme, size)}>
      {imgUrl && <CardMedia component="img" alt={title} image={imgUrl} />}
      <CardContent css={BaseCardCss.cardContent(theme)}>
        <Typography
          variant="h3"
          paddingBottom="1rem"
          fontWeight="600"
          textTransform="uppercase"
          fontSize="1.4rem"
        >
          {title}
        </Typography>
        {pngIcon && <Box component="img" alt={pngIcon} src={pngIcon} />}
        <Typography variant="body2">{textContent}</Typography>
      </CardContent>
    </Card>
  );
};
