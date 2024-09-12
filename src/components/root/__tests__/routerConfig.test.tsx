import { render, screen } from "@testing-library/react";
import { RouterProps, TestingProvider } from "../../../__fixtures__/TestingProvider";
import { navigationRoutes } from "../../../consts/navigationRoutes";
import { AboutView } from "../../../views/AboutView";
import { ContactView } from "../../../views/ContactView";
import { GalleryView } from "../../../views/GalleryView";
import { HomeView } from "../../../views/HomeView";
import { OffertView } from "../../../views/OffertView";
import { routerConfig } from "../routerConfig";

vi.mock("../../../views/HomeView", () => ({
  HomeView: () => <div data-testid={"HomeViewTestId"} />,
}));
vi.mock("../../views/AboutView", () => ({
  AboutView: () => <div data-testid={"AboutViewTestId"} />,
}));
vi.mock("../../views/ContactView", () => ({
  ContactView: () => <div data-testid={"ContactViewTestId"} />,
}));
vi.mock("../../views/GalleryView", () => ({
  GalleryView: () => <div data-testid={"GalleryViewTestId"} />,
}));
vi.mock("../../views/OffertView", () => ({
  OffertView: () => <div data-testid={"OffertViewTestId"} />,
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
  test("render router - AboutView path - returns AboutView", async () => {
    // Arrange
    const router: RouterProps = {
      routes: routerConfig,
      initialEntries: [`/${navigationRoutes.AboutView}`],
    };
    // Act
    render(<TestingProvider overrideRouter={router} />);

    // Assert
    await screen.findByTestId("AboutViewTestId");
    expect(screen.getByTestId("AboutViewTestId")).toBeInTheDocument();
  });
  test("render router - ContactView path - returns ContactView", async () => {
    // Arrange
    const router: RouterProps = {
      routes: routerConfig,
      initialEntries: [`/${navigationRoutes.ContactView}`],
    };
    // Act
    render(<TestingProvider overrideRouter={router} />);

    // Assert
    await screen.findByTestId("ContactViewTestId");
    expect(screen.getByTestId("ContactViewTestId")).toBeInTheDocument();
  });
  test("render router - GalleryView path - returns GalleryView", async () => {
    // Arrange
    const router: RouterProps = {
      routes: routerConfig,
      initialEntries: [`/${navigationRoutes.GalleryView}`],
    };
    // Act
    render(<TestingProvider overrideRouter={router} />);

    // Assert
    expect(screen.getByTestId("GalleryViewTestId")).toBeInTheDocument();
    await screen.findByTestId("GalleryViewTestId");
  });
  test("render router - OffertView path - returns OffertView", async () => {
    // Arrange
    const router: RouterProps = {
      routes: routerConfig,
      initialEntries: [`/${navigationRoutes.OffertView}`],
    };
    // Act
    render(<TestingProvider overrideRouter={router} />);

    // Assert
    await screen.findByTestId("OffertViewTestId");
    expect(screen.getByTestId("OffertViewTestId")).toBeInTheDocument();
  });
});
