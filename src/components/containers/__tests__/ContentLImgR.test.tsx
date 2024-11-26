import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContentLImgR from "../ContentLImgR";

describe("ContentLImgR component tests", () => {
  it("renders the title correctly", () => {
    // Arrange
    const title = "Test Title";
    const content = "Test Content";
    const image = "test-image.jpg";

    // Act
    render(<ContentLImgR title={title} content={content} image={image} />);

    // Assert
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H2");
  });

  it("renders the content correctly", () => {
    // Arrange
    const title = "Test Title";
    const content = "Test Content";
    const image = "test-image.jpg";

    // Act
    render(<ContentLImgR title={title} content={content} image={image} />);

    // Assert
    const contentElement = screen.getByText(content);
    expect(contentElement).toBeInTheDocument();
    expect(contentElement.tagName).toBe("P");
  });

  it("renders the image with correct src and alt attributes", () => {
    // Arrange
    const title = "Test Title";
    const content = "Test Content";
    const image = "test-image.jpg";

    // Act
    render(<ContentLImgR title={title} content={content} image={image} />);

    // Assert
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", image);
    expect(imageElement).toHaveAttribute("alt", "hey");
  });

  it("handles ReactNode as content", () => {
    // Arrange
    const title = "Test Title";
    const content = <span>Custom React Node Content</span>;
    const image = "test-image.jpg";

    // Act
    render(<ContentLImgR title={title} content={content} image={image} />);

    // Assert
    const contentElement = screen.getByText("Custom React Node Content");
    expect(contentElement).toBeInTheDocument();
    expect(contentElement.tagName).toBe("SPAN");
  });
});
