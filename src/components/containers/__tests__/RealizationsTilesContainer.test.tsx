import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GalleryTileInterface } from "../../presentational/GalleryTile";
import { RealizationsTilesContainer } from "../RealizationsTilesContainer ";

vi.mock("../presentational/GalleryTile", () => ({
  GalleryTile: ({ title }: { title: string }) => <div>{title}</div>,
}));

describe("RealizationsTilesContainer component tests", () => {
  const mockItems: GalleryTileInterface[] = [
    { title: "Tile 1", imageSrc: "image1.jpg" },
    { title: "Tile 2", imageSrc: "image2.jpg" },
    { title: "Tile 3", imageSrc: "image3.jpg" },
  ];

  it("renders the correct number of tiles", () => {
    // Act
    render(<RealizationsTilesContainer items={mockItems} />);

    // Assert
    const tiles = screen.getAllByText(/Tile \d/);
    expect(tiles).toHaveLength(mockItems.length);
  });

  it("renders tiles with correct titles", () => {
    // Act
    render(<RealizationsTilesContainer items={mockItems} />);

    // Assert
    mockItems.forEach((item) => {
      if (item.title) {
        expect(screen.getByText(item.title)).toBeInTheDocument();
      }
    });
  });

  it("renders no tiles when items array is empty", () => {
    // Act
    render(<RealizationsTilesContainer items={[]} />);

    // Assert
    const tiles = screen.queryByText(/Tile \d/);
    expect(tiles).toBeNull();
  });
});
