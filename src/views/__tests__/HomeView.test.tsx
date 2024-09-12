import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HomeView } from "../HomeView";

describe("HomeView tests", () => {
  it("should render the cards", () => {
    render(<HomeView />);

    const cardTitles = ["Jakość", "Wykonanie", "Zaufanie", "Remonty od A do Z"];
    cardTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("should render the images in the realizations section", () => {
    render(<HomeView />);

    const imageAltTexts = ["Ispot", "Santander", "Rcos"];
    imageAltTexts.forEach((altText) => {
      const img = screen.getByAltText(altText);
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src");
    });
  });

  it("should render the stepper and offert tiles components", () => {
    render(<HomeView />);

    expect(screen.getByText("Prześledź wszystkie kroki")).toBeInTheDocument();
    expect(screen.getByText("Jak przebiega nasza współpraca?")).toBeInTheDocument();

    expect(screen.getByText("Poznaj naszą ofertę")).toBeInTheDocument();
    expect(screen.getByText("Dlaczego TechInstalacje?")).toBeInTheDocument();
  });
});
