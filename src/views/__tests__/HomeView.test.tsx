import React from "react";
import { render, screen } from "@testing-library/react";
import test, { describe } from "node:test";
import { TestingProvider } from "../../__fixtures__/TestingProvider";
import { HomeView } from "../HomeView";

describe("HomeView tests", () => {
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
