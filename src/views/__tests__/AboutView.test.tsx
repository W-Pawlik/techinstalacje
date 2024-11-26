import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AboutTexts } from "../../consts/texts/aboutView/aboutView";
import { AboutView } from "../AboutView";

describe("AboutView", () => {
  it("renders the Page component with the correct title and subtitle", () => {
    render(
      <MemoryRouter>
        <AboutView />
      </MemoryRouter>,
    );

    expect(screen.getByText(AboutTexts.HeroSectionTitle)).toBeInTheDocument();
    expect(screen.getByText(AboutTexts.HeroSectionSubTitle)).toBeInTheDocument();
  });

  it("renders ContentLImgR with correct content", () => {
    render(
      <MemoryRouter>
        <AboutView />
      </MemoryRouter>,
    );

    expect(screen.getByText(AboutTexts.FirstSectionTitle)).toBeInTheDocument();
    expect(screen.getByText(AboutTexts.FirstSectionContent)).toBeInTheDocument();
  });

  it("renders the 'Nasz lider' section", () => {
    render(
      <MemoryRouter>
        <AboutView />
      </MemoryRouter>,
    );

    expect(screen.getByText("Nasz lider")).toBeInTheDocument();

    const aboutCardName = screen.getByText(AboutTexts.AboutCardName);
    expect(aboutCardName).toBeInTheDocument();
    const aboutCardContent = screen.getByText(AboutTexts.AboutCardContent);
    expect(aboutCardContent).toBeInTheDocument();
  });

  it("renders the CTABottom component with correct button text", () => {
    render(
      <MemoryRouter>
        <AboutView />
      </MemoryRouter>,
    );

    expect(
      screen.getByText(
        "Checesz dowiedzieć się więcej na temat naszej firmy ? Skontaktuj się z nami!",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Skontaktuj się z nami")).toBeInTheDocument();
  });
});
