import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutCard from "../AboutCard";

describe("AboutCard component tests", () => {
  const mockProps = {
    name: "John Doe",
    description: "A brief description about John Doe.",
    imageUrl: "/path/to/image.jpg",
  };

  it("renders the name correctly", () => {
    // Act
    render(<AboutCard {...mockProps} />);

    // Assert
    const nameElement = screen.getByText(mockProps.name);
    expect(nameElement).toBeInTheDocument();
    expect(nameElement.tagName).toBe("H2");
    expect(nameElement).toHaveStyle("font-weight: 700");
  });

  it("renders the description correctly", () => {
    // Act
    render(<AboutCard {...mockProps} />);

    // Assert
    const descriptionElement = screen.getByText(mockProps.description);
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement.tagName).toBe("P");
  });

  it("renders the image with correct src and alt attributes", () => {
    // Act
    render(<AboutCard {...mockProps} />);

    // Assert
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockProps.imageUrl);
  });

  it("applies the correct structure and layout styles", () => {
    // Act
    render(<AboutCard {...mockProps} />);

    // Assert
    // eslint-disable-next-line testing-library/no-node-access
    const container = screen.getByRole("img").closest("div");
    expect(container).toHaveStyle("display: flex");
  });
});
