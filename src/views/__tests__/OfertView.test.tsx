import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { OffertView } from "../OffertView";

describe("OffertView", () => {
  it("renders the OffertView component correctly", () => {
    render(
      <MemoryRouter>
        <OffertView />
      </MemoryRouter>,
    );

    expect(screen.getByText("Oferta")).toBeInTheDocument();
    expect(screen.getByText("Wybierz idealną dla siebie")).toBeInTheDocument();

    expect(
      screen.getByText(
        "W TechInstalacje oferujemy kompleksowe usługi instalacyjne dla domów i firm. Nasze specjalizacje to:",
      ),
    ).toBeInTheDocument();

    const tabsElement = screen.getByRole("tablist");
    expect(tabsElement).toBeInTheDocument();

    expect(
      screen.getByText(
        "Tworzymy spersonalizowane oferty specjalne dla Twojej firmy! Skontaktuj się z nami w celu ustalenia warunków itp. itd.",
      ),
    ).toBeInTheDocument();

    const button = screen.getByText("Skontaktuj się z nami");
    expect(button).toBeInTheDocument();
  });
});
