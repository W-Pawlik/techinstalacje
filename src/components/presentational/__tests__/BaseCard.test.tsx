import { render, screen } from "@testing-library/react";
import { TestingProvider } from "../../../__fixtures__/TestingProvider";
import img from "../../../assets/images/offert1.jpg";
import { BaseCard } from "../BaseCard";

describe("BaseCard", () => {
  const title = "title";
  const content = "content";

  it("renders the correct card with title and content", () => {
    render(
      <TestingProvider>
        <BaseCard title={title} textContent={content} />
      </TestingProvider>,
    );

    const baseCards = screen.getByTestId("card");
    expect(baseCards).toBeInTheDocument();

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it("renders with image", () => {
    render(
      <TestingProvider>
        <BaseCard title={title} textContent={content} imgUrl={img} />
      </TestingProvider>,
    );

    const image = screen.getByAltText(title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", img);
  });
});
