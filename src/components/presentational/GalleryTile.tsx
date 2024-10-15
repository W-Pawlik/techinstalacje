import { Card, CardContent, CardMedia, css, Typography } from "@mui/material";

export interface GalleryTileInterface {
  title?: string;
  description?: string;
  imageSrc: string;
}

const GalleryTileCss = {
  tileContainer: () =>
    css({
      position: "relative",
      display: "flex",
      alignItems: "flex-end",
      color: "white",
      borderRadius: "20px",
      overflow: "hidden",
      transition: "transform 0.5s ease",
      "&:hover": {
        "& .MuiCardMedia-root": {
          filter: "brightness(100%)",
        },
        "& .card-content": {
          transform: "translateY(100%)",
        },
      },
    }),
  tileImage: () =>
    css({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "brightness(50%)",
      transition: "filter 0.5s ease",
    }),
  title: () =>
    css({
      position: "relative",
      padding: "16px",
      zIndex: 1,
      transition: "transform 0.5s ease",
      transform: "translateY(0%)",
    }),
};

export const GalleryTile = ({ title, description, imageSrc }: GalleryTileInterface) => (
  <Card
    css={GalleryTileCss.tileContainer()}
    sx={{ width: { xs: "90%", sm: "100%" }, height: { xs: "14rem", sm: "15rem" } }}
  >
    <CardMedia component="img" image={imageSrc} alt={title} css={GalleryTileCss.tileImage()} />

    <CardContent className="card-content" css={GalleryTileCss.title()}>
      <Typography variant="h3" sx={{ fontWeight: "600" }}>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </CardContent>
  </Card>
);
