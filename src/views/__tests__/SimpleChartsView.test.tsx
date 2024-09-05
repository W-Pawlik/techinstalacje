import { render, screen } from "@testing-library/react";
import { TestingProvider } from "../../__fixtures__/TestingProvider";
import { HomeView } from "../HomeView";

describe("SimpleChartsView tests", () => {
  test("View is rendered", () => {
    // Arrange

    // Act
    render(
      <TestingProvider>
        <HomeView />
      </TestingProvider>,
    );

    // Assert
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });
});
