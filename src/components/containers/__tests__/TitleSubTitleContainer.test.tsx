import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TitleSubTitleContainer from "../TitleSubTitleContainer";

describe("TitleSubTitleContainer component tests", () => {
  it("renders the title correctly", () => {
    // Arrange
    const title = "Test Title";
    const subtitle = "Test Subtitle";

    // Act
    render(<TitleSubTitleContainer title={title} subtitle={subtitle} />);

    // Assert
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H1");
  });

  it("renders the subtitle correctly", () => {
    // Arrange
    const title = "Test Title";
    const subtitle = "Test Subtitle";

    // Act
    render(<TitleSubTitleContainer title={title} subtitle={subtitle} />);

    // Assert
    const subtitleElement = screen.getByText(subtitle);
    expect(subtitleElement).toBeInTheDocument();
    expect(subtitleElement.tagName).toBe("H2");
    expect(subtitleElement).toHaveStyle({
      fontWeight: "400",
      textAlign: "center",
      lineHeight: "2rem",
    });
  });

  it("renders both title and subtitle together", () => {
    // Arrange
    const title = "Test Title";
    const subtitle = "Test Subtitle";

    // Act
    render(<TitleSubTitleContainer title={title} subtitle={subtitle} />);

    // Assert
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });
});
