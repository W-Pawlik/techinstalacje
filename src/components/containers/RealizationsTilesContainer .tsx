import { Box, css } from "@mui/material";
import { GalleryTile, GalleryTileInterface } from "../presentational/GalleryTile";

interface RealizationsTilesContainerProps {
  items: GalleryTileInterface[];
}

const containerStyles = css({
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  justifyContent: "center",
});

const tileStyles = css({
  display: "flex",
  justifyContent: "center !important",
  alignItems: "center !important",
  flex: "1 1 calc(50% - 2rem)",
  paddingBottom: "2rem",
  "@media (max-width: 600px)": {
    flex: "1 1 100%",
    paddingBottom: "1rem",
  },
});

export const RealizationsTilesContainer = ({ items }: RealizationsTilesContainerProps) => (
  <Box css={containerStyles}>
    {items.map((item, index) => (
      <Box key={index} css={tileStyles}>
        <GalleryTile {...item} />
      </Box>
    ))}
  </Box>
);
