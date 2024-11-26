import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { cardsData } from "../../consts/texts/homeView/cardsData";
import { HomeTexts } from "../../consts/texts/homeView/homeView";
import { HomeView } from "../HomeView";

describe("HomeView", () => {
  it("renders the Hero Section with title and subtitle", () => {
    render(
      <MemoryRouter>
        <HomeView />;
      </MemoryRouter>,
    );

    expect(screen.getByText(HomeTexts.HeroSectionTitle)).toBeInTheDocument();
    expect(screen.getByText(HomeTexts.HeroSectionSubTitle)).toBeInTheDocument();
  });

  it("renders the First Section with title and content", () => {
    render(
      <MemoryRouter>
        <HomeView />;
      </MemoryRouter>,
    );

    expect(screen.getByText(HomeTexts.FirstSectionTitle)).toBeInTheDocument();
    expect(screen.getByText(HomeTexts.FirstSectionContent)).toBeInTheDocument();
  });

  it("renders the CardsContainer with correct cards", () => {
    render(
      <MemoryRouter>
        <HomeView />;
      </MemoryRouter>,
    );

    cardsData.forEach((card) => {
      expect(screen.getByText(card.title)).toBeInTheDocument();
      expect(screen.getByText(card.textContent)).toBeInTheDocument();
    });
  });

  it("renders the Realizations section with images and titles", () => {
    render(
      <MemoryRouter>
        <HomeView />;
      </MemoryRouter>,
    );

    const realizations = ["Ispot", "Santander", "Rcos"];
    realizations.forEach((title) => {
      expect(screen.getByAltText(title)).toBeInTheDocument();
    });
  });

  it("renders the Vertical Stepper in the cooperation section", () => {
    render(
      <MemoryRouter>
        <HomeView />;
      </MemoryRouter>,
    );

    expect(screen.getByText("Prześledź wszystkie kroki")).toBeInTheDocument();
    expect(screen.getByText("Jak przebiega nasza współpraca?")).toBeInTheDocument();
  });

  it("renders the offer section with content", () => {
    render(
      <MemoryRouter>
        <HomeView />;
      </MemoryRouter>,
    );

    expect(screen.getByText("Poznaj naszą ofertę")).toBeInTheDocument();
    expect(screen.getByText("Dlaczego TechInstalacje?")).toBeInTheDocument();
  });

  it("ensures all components are rendered", () => {
    render(
      <MemoryRouter>
        <HomeView />;
      </MemoryRouter>,
    );

    expect(screen.getByText(HomeTexts.HeroSectionTitle)).toBeInTheDocument();
    expect(screen.getByText(HomeTexts.FirstSectionTitle)).toBeInTheDocument();
    expect(screen.getByText("Prześledź wszystkie kroki")).toBeInTheDocument();
    expect(screen.getByText("Poznaj naszą ofertę")).toBeInTheDocument();
  });
});
