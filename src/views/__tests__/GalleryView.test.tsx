import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { GalleryTexts } from "../../consts/texts/galleryView/galleryView";
import { realizationsTileData } from "../../consts/texts/galleryView/tileData";
import { GalleryView } from "../GalleryView";

describe("GalleryView", () => {
  it("renders Page component with title and subtitle", () => {
    render(
      <MemoryRouter>
        <GalleryView />
      </MemoryRouter>,
    );

    expect(screen.getByText(GalleryTexts.HeroSectionTitle)).toBeInTheDocument();
    expect(screen.getByText(GalleryTexts.HeroSectionSubTitle)).toBeInTheDocument();
  });

  it("renders TitleSubTitleContainer component with correct title and subtitle", () => {
    render(
      <MemoryRouter>
        <GalleryView />
      </MemoryRouter>,
    );

    expect(screen.getByText(GalleryTexts.FirstSectionTitle)).toBeInTheDocument();
    expect(screen.getByText(GalleryTexts.FirstSectionContent)).toBeInTheDocument();
  });

  it("renders RealizationsTilesContainer with items", () => {
    render(
      <MemoryRouter>
        <GalleryView />
      </MemoryRouter>,
    );

    const tileItems = screen.getAllByTestId(/realization-tile-/);
    expect(tileItems.length).toBe(realizationsTileData.length);
  });

  it("renders CTABottom with correct buttons and text", () => {
    render(
      <MemoryRouter>
        <GalleryView />
      </MemoryRouter>,
    );

    expect(screen.getByText("Oferta")).toBeInTheDocument();
    expect(screen.getByText("Skontaktu się z nami")).toBeInTheDocument();
  });
});
