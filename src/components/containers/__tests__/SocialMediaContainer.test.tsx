// SocialMediaContainer.test.tsx
import { Facebook, Twitter } from "@mui/icons-material";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SocialMediaContainer } from "../SocialMediaContainer";

describe("SocialMediaContainer component testes", () => {
  it("renders the correct number of social media icons and correct urls", () => {
    const icons = [
      { icon: Facebook, url: "https://facebook.com" },
      { icon: Twitter, url: "https://twitter.com" },
    ];

    render(<SocialMediaContainer icons={icons} />);

    const listItems = screen.getAllByRole("link");
    expect(listItems).toHaveLength(2);

    expect(listItems[0]).toHaveAttribute("href", "https://facebook.com");

    expect(listItems[1]).toHaveAttribute("href", "https://twitter.com");
  });
});
