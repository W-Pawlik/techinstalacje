import { useNavigate } from "react-router-dom";
import { RealizationsTilesContainer } from "../../src/components/containers/RealizationsTilesContainer ";
import TitleSubTitleContainer from "../../src/components/containers/TitleSubTitleContainer";
import RealizationsBanner from "../assets/images/RealizationsBanner.png";
import CTABottom from "../components/presentational/CTABottom";
import { Page } from "../components/presentational/Page";

const items = [
  {
    title: "Kafelek 1",
    description: "Opis kafelka 1",
    imageSrc: RealizationsBanner,
  },
  {
    title: "Kafelek 2",
    description: "Opis kafelka 2",
    imageSrc: RealizationsBanner,
  },
  {
    title: "Kafelek 3",
    description: "Opis kafelka 3",
    imageSrc: RealizationsBanner,
  },
  {
    title: "Kafelek 4",
    description: "Opis kafelka 4",
    imageSrc: RealizationsBanner,
  },
];

export const GalleryView = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("scrollToForm", "true");
    navigate("/kontakt");
  };
  return (
    <Page
      heroSectionSubtitle={"Dołącz do naszej galerii"}
      herSectionTitle={"Nasze realizacje"}
      banner={RealizationsBanner}
    >
      <TitleSubTitleContainer
        title="Nasze realizacje tworzone są w zarówno w dużych jak i małych placówkach"
        subtitle="Ispot, piekarnia jakaś tam, sklep Lorem impsum, nie żałują z naszych usług"
      />

      <RealizationsTilesContainer items={items} />

      <CTABottom
        title="Skontaktuj się z nami w celu ustalenia warunków itp. itd. (miesjce na zachęcenie do
          kontaktu) lorem ipsum"
        buttonText="Skontaktu się z nami"
        onButtonClick={handleClick}
      />
    </Page>
  );
};
