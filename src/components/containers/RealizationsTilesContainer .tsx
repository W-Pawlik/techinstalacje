import { Box, css } from "@mui/material";
import { GalleryTile, GalleryTileInterface } from "../presentational/GalleryTile";

interface RealizationsTilesContainerProps {
  items: GalleryTileInterface[];
}

const containerStyles = css({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

const tileStyles = css({
  display: "flex",
  justifyContent: "center !important",
  alignItems: "center !important",
  flex: "1 1 calc(50% - 3rem)",
  "@media (max-width: 600px)": {
    flex: "1 1 100%",
  },
});

export const RealizationsTilesContainer = ({ items }: RealizationsTilesContainerProps) => (
  <Box
    css={containerStyles}
    sx={{ padding: { xs: "0 2rem" }, gap: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" } }}
  >
    {items.map((item, index) => (
      <Box key={index} css={tileStyles}>
        <GalleryTile {...item} />
      </Box>
    ))}
  </Box>
);
