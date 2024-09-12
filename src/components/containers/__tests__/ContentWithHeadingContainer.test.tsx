import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContentWithHeadingContainer from "../ContentWithHeadingContainer";

describe("ContentWithHeadingContainer component tests", () => {
  it("renders the title and subtitle correctly", () => {
    render(
      <ContentWithHeadingContainer
        title="Test Title"
        subtitle="Test Subtitle"
        content="Test Content"
      />,
    );

    const title = screen.getByText("Test Title");
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText("Test Subtitle");
    expect(subtitle).toBeInTheDocument();
  });

  it("renders the content correctly", () => {
    render(
      <ContentWithHeadingContainer
        title="Test Title"
        subtitle="Test Subtitle"
        content="Test Content"
      />,
    );

    const content = screen.getByText("Test Content");
    expect(content).toBeInTheDocument();
  });
});
