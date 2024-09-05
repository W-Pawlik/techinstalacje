import { render, screen } from "@testing-library/react";
import { RouterProps, TestingProvider } from "../../../__fixtures__/TestingProvider";
import { navigationRoutes } from "../../../consts/navigationRoutes";
import { routerConfig } from "../routerConfig";

vi.mock("../../../views/SimpleChartsView", () => ({
  SimpleChartsView: () => <div data-testid={"SimpleChartsViewTestId"} />,
}));
vi.mock("../../../views/AdvancedChartsView", () => ({
  AdvancedChartsView: () => <div data-testid={"AdvancedChartsViewTestId"} />,
}));

describe("router config tests", () => {
  test("render router - HomeView path - returns HomeView", async () => {
    // Arrange
    const router: RouterProps = {
      routes: routerConfig,
      initialEntries: [`/${navigationRoutes.HomeView}`],
    };
    // Act
    render(<TestingProvider overrideRouter={router} />);

    // Assert
    await screen.findByTestId("HomeViewTestId");
    expect(screen.getByTestId("HomeViewTestId")).toBeInTheDocument();
  });
});
