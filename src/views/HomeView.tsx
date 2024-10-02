import { css } from "@emotion/react";
import { ImageListItem, List, Typography } from "@mui/material";
import { Box, useMediaQuery } from "@mui/system";
import TitleSubTitleContainer from "../../src/components/containers/TitleSubTitleContainer";
import banner from "../assets/images/heroSectionBanner.png";
import logo1 from "../assets/images/realization1.png";
import logo2 from "../assets/images/realization2.png";
import logo3 from "../assets/images/realization3.png";
import smthImg from "../assets/images/smth (2).png";
import { CardsContainer } from "../components/containers/CardsContainer";
import ContentWithHeadingContainer from "../components/containers/ContentWithHeadingContainer";
import { OffertTiles } from "../components/presentational/OffertTiles";
import { Page } from "../components/presentational/Page";
import VerticalStepper from "../components/presentational/VerticalStepper";

const HomeViewCss = {
  title: () =>
    css({
      textAlign: "center",
    }),
  RealizationsBox: () =>
    css({
      textAlign: "center",
      marginTop: "8rem",
      marginBottom: "10rem",
    }),

  horizontalList: () =>
    css({
      marginTop: "2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "2rem",
    }),
  headingCont: () =>
    css({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "2rem",
      marginBottom: "5rem",
    }),
  headingText: () =>
    css({
      // width: "45rem",
      // height: "24rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4rem",
    }),
  headingImg: () =>
    css({
      width: "30rem",
      height: "19rem",
    }),
};

export const HomeView = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1400px)");
  const isMediumScreen = useMediaQuery("(min-width: 1300px)");
  const isSmallScreen = useMediaQuery("(min-width: 1150px)");
  const isVerticalLayout = useMediaQuery("(max-width: 900px)");

  const cardSize = isLargeScreen
    ? "large"
    : isMediumScreen || isVerticalLayout
      ? "medium"
      : isSmallScreen
        ? "small"
        : "xs";

  const images = [
    {
      title: "Ispot",
      img: logo1,
    },
    {
      title: "Santander",
      img: logo2,
    },
    {
      title: "Rcos",
      img: logo3,
    },
  ];

  return (
    <Page
      heroSectionSubtitle={"Perfekcyjna Instalacja"}
      herSectionTitle={"Perfekcyjna Instalacja"}
      buttonText="click"
      banner={banner}
    >
      <Box css={HomeViewCss.headingCont}>
        <Box css={HomeViewCss.headingText}>
          <Typography variant="h2" textAlign="center" width="70%" fontWeight="bold">
            TechInstalacje - nowoczesne rozwiązania to nasza pasja{" "}
          </Typography>
          <Typography variant="body1" fontSize="1rem">
            Profesjonalne doradztwo, sprzedaż, montaż i obsługa serwisowa urządzeń i instalacji
            wymaga nieustannego doskonalenia umiejętności. Dlatego uczestniczymy w szkoleniach
            branżowych jak i produktowych wiodących marek. Dzięki kształceniu się w Szkole
            Nowoczesnych Technik Grzewczych VIESSMANN, firma TECHINSTALACJE stała się specjalistą
            branży Odnawialnych Źródeł Energii (OZE). Jako nieliczni możemy pochwalić się
            certyfikatem Instalatora OZE. W 2020 roku zaplanowaliśmy zakończyć budowę DOMU
            TESTOWEGO, w którym zaprezentujemy część rozwiązań, na jakie także Państwo będziecie
            mogli się zdecydować. Jeśli szukacie wykwalifikowanych specjalistów w wyżej wymienionych
            dziedzinach, zadzwońcie do Nas.
          </Typography>
        </Box>
        <Box component="img" src={smthImg} alt="hey" css={HomeViewCss.headingImg} />
      </Box>

      <CardsContainer
        cardSize={cardSize}
        cardsData={[
          {
            title: "Jakość",
            textContent:
              "Każdy projekt realizujemy z najwyższą starannością, dbając o najdrobniejsze szczegóły, aby zapewnić trwałość i perfekcyjne wykonanie",
          },
          {
            title: "Wykonanie",
            textContent:
              "Budujemy długotrwałe relacje oparte na zaufaniu i transparentności, dostarczając rozwiązania, które spełniają najwyższe standardy branżowe",
          },
          {
            title: "Zaufanie",
            textContent:
              "Nasze doświadczenie i precyzyjne podejście gwarantują najwyższą jakość wykonania, niezależnie od skali projektu ",
          },
          {
            title: "Profesjonalizm",
            textContent:
              "Nasze doświadczenie i precyzyjne podejście gwarantują najwyższą jakość wykonania, niezależnie od skali projektu ",
          },
          {
            title: "Terminowość",
            textContent:
              "Nasze doświadczenie i precyzyjne podejście gwarantują najwyższą jakość wykonania, niezależnie od skali projektu ",
          },
          {
            title: "Doradztwo",
            textContent:
              "Nasze doświadczenie i precyzyjne podejście gwarantują najwyższą jakość wykonania, niezależnie od skali projektu ",
          },
        ]}
      />

      <Box css={HomeViewCss.RealizationsBox}>
        <Typography variant="h2" fontWeight="bold">
          Realziacje w placówkach
        </Typography>
        <List css={HomeViewCss.horizontalList}>
          {images.map((img, i) => (
            <ImageListItem key={i}>
              <Box
                component="img"
                style={{ width: "20rem" }}
                src={img.img}
                alt={img.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </List>
      </Box>

      <ContentWithHeadingContainer
        title="Prześledź wszystkie kroki"
        subtitle="Jak przebiega nasza współpraca?"
        content={<VerticalStepper />}
        titlePosition="right"
        marginBottom="10rem"
        height="25rem"
      />

      <ContentWithHeadingContainer
        title="Poznaj naszą ofertę"
        subtitle="Dlaczego TechInstalacje?"
        content={
          <Typography variant="body1">
            Jako firma specjalizująca się w różnych usługach staramy zapewnić Państwu usługi
            najwyższje jakości. Instalacje gazowe, gydraulika, fotowoltaika, wentylacje... Nie
            zależnie od usług, mogą być Państwo pewni najwyższej jakości ✔
          </Typography>
        }
      />

      <OffertTiles />
    </Page>
  );
};
