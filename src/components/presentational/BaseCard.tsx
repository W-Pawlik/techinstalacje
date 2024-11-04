/* eslint-disable unicorn/prefer-logical-operator-over-ternary */
import { Box, Card, CardContent, CardMedia, css, Theme, Typography, useTheme } from "@mui/material";

export interface BaseCardInterface {
  title?: string;
  textContent?: string;
  imgUrl?: string;
  pngIcon?: string;
  xsWidth?: string;
  smWidth?: string;
  smHeight?: string;
}

const BaseCardCss = {
  card: (theme: Theme) =>
    css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "start",
      borderRadius: "20px",
      textAlign: "center",
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
      display: "flex",
      height: "100%",
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "start",
      color: theme.palette.common.white,
      padding: "1rem",
    }),
};

export const BaseCard = ({
  title,
  textContent,
  imgUrl,
  pngIcon,
  xsWidth,
  smWidth,
  smHeight,
}: BaseCardInterface) => {
  const theme: Theme = useTheme();
  return (
    <Card
      data-testid="card"
      css={BaseCardCss.card(theme)}
      sx={{
        width: {
          xs: `${xsWidth ? xsWidth : "13rem"}`,
          sm: `${smWidth ? smWidth : "13rem"}`,
          md: "12rem",
          lg: "17rem",
          xl: "18rem",
        },
        height: {
          xs: "13rem",
          sm: `${smHeight ? smHeight : "11rem"}`,
          md: "14rem",
          lg: "17rem",
          xl: "18rem",
        },
        padding: { xs: "1rem", sm: "3.5rem", md: "3rem", lg: "2rem", xl: "2rem" },
      }}
    >
      {imgUrl && <CardMedia component="img" alt={title} image={imgUrl} loading="lazy" />}
      <CardContent css={BaseCardCss.cardContent(theme)}>
        <Typography
          variant="h3"
          fontWeight="600"
          textTransform="uppercase"
          fontSize="1.4rem"
          sx={{
            fontSize: { xs: "0.9rem", sm: "1.3rem", md: "1.4rem" },
            paddingBottom: { xs: "0.2rem", sm: "1rem" },
          }}
        >
          {title}
        </Typography>
        {pngIcon && (
          <Box component="img" alt={pngIcon} src={pngIcon} sx={{ marginBottom: "0.65rem" }} />
        )}
        <Typography
          variant="body2"
          textAlign="start"
          sx={{
            wordBreak: "break-all",
            fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem", lg: "1.2rem" },
            lineHeight: { xs: "1.3" },
            whiteSpace: "pre-line",
          }}
        >
          {textContent}
        </Typography>
      </CardContent>
    </Card>
  );
};
