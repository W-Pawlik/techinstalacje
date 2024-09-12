import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { OffertTiles } from "../OffertTiles";

describe("OffertTiles component tests", () => {
  it("renders all tiles with correct content", () => {
    render(<OffertTiles />);

    const titles = ["Instalacje gazowe", "Hydraulika", "Fotowoltaika", "Wentylacje"];

    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    const descriptions = screen.getAllByText(/Profesjonalne instalacje gazowe dla dużych obiektów/);
    expect(descriptions).toHaveLength(4);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(4);
    images.forEach((img, index) => {
      expect(img).toHaveAttribute("alt", titles[index]);
    });

    const buttons = screen.getAllByRole("button", { name: /sprawdź ofertę/i });
    expect(buttons).toHaveLength(4);
  });
});
