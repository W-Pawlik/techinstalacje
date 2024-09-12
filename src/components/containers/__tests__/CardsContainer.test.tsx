import { render, screen } from "@testing-library/react";
import { TestingProvider } from "../../../__fixtures__/TestingProvider";
import { CardsContainer } from "../CardsContainer";

describe("CardsContainer component testes", () => {
  it("renders the correct number of BaseCard components", () => {
    const cardsData = [
      { title: "Card 1", textContent: "Content 1" },
      { title: "Card 2", textContent: "Content 2" },
      { title: "Card 3", textContent: "Content 3" },
    ];
    render(
      <TestingProvider>
        <CardsContainer cardSize="medium" cardsData={cardsData} />
      </TestingProvider>,
    );

    const baseCards = screen.getAllByTestId("card");
    expect(baseCards).toHaveLength(cardsData.length);
  });
});
