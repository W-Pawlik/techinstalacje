import { createTheme, ThemeProvider } from "@mui/material/styles";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeroSection } from "../HeroSection";

const theme = createTheme();

describe("HeroSection component tests", () => {
  it("should render the hero section with the correct content", () => {
    render(
      <ThemeProvider theme={theme}>
        <HeroSection title="Hero Title" subtitle="Hero Subtitle" buttonText="Click Me" />
      </ThemeProvider>,
    );

    const titleElement = screen.getByText("Hero Title");
    expect(titleElement).toBeInTheDocument();

    const subtitleElement = screen.getByText("Hero Subtitle");
    expect(subtitleElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
