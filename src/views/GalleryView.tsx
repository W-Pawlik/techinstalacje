import { useNavigate } from "react-router-dom";
import { RealizationsTilesContainer } from "../../src/components/containers/RealizationsTilesContainer ";
import TitleSubTitleContainer from "../../src/components/containers/TitleSubTitleContainer";
import RealizationsBanner from "../assets/images/RealizationsBanner.png";
import CTABottom from "../components/presentational/CTABottom";
import { Page } from "../components/presentational/Page";
import { GalleryTexts } from "../consts/texts/galleryView/galleryView";
import { realizationsTileData } from "../consts/texts/galleryView/tileData";

export const GalleryView = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // localStorage.setItem("scrollToForm", "true");
    localStorage.setItem("scrollToTabs", "true");
    navigate("/oferta");
  };

  const handleClickSecond = () => {
    localStorage.setItem("scrollToForm", "true");
    navigate("/kontakt");
  };

  return (
    <Page
      heroSectionSubtitle={GalleryTexts.HeroSectionTitle}
      herSectionTitle={GalleryTexts.HeroSectionSubTitle}
      banner={RealizationsBanner}
    >
      <TitleSubTitleContainer
        title={GalleryTexts.FirstSectionTitle}
        subtitle={GalleryTexts.FirstSectionContent}
      />

      <RealizationsTilesContainer items={realizationsTileData} />

      <CTABottom
        title={GalleryTexts.CtaTitle}
        buttonText="Oferta"
        onButtonClick={handleClick}
        secondButtonText="Skontaktu się z nami"
        onSecondButtonClick={handleClickSecond}
      />
    </Page>
  );
};
