import { css } from "@emotion/react";
import { ImageListItem, List, Typography } from "@mui/material";
import { Box, useMediaQuery } from "@mui/system";
import logo1 from "../assets/images/realization1.png";
import logo2 from "../assets/images/realization2.png";
import logo3 from "../assets/images/realization3.png";
import { CardsContainer } from "../components/containers/CardsContainer";
import ContentWithHeadingContainer from "../components/containers/ContentWithHeadingContainer";
import { HeroSection } from "../components/presentational/HeroSection";
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
    <>
      <HeroSection
        title={"Perfekcyjna Instalacja"}
        subtitle="Niezawodna Wydajność"
        buttonText="Click"
      />
      <Page
        headerProps={{
          title: "HomePage",
        }}
      >
        <Typography
          variant="h1"
          textAlign="center"
          fontSize="4rem"
          fontWeight="700"
          marginBottom="1rem"
          lineHeight="5.87rem"
        >
          Nasze Kluczowe Wartości, którymi kierujemy się każdego dnia
        </Typography>
        <Typography
          variant="h3"
          textAlign="center"
          fontSize="2.52rem"
          fontWeight="400"
          marginBottom="3rem"
          lineHeight="3.56rem"
        >
          Wyróżniamy się dzięki niezawodnej jakości, zaufaniu i doskonałemu wykonaniu
        </Typography>

        <CardsContainer
          cardSize={cardSize}
          cardsData={[
            {
              title: "Jakość ✨",
              textContent:
                "Każdy projekt realizujemy z najwyższą starannością, dbając o najdrobniejsze szczegóły, aby zapewnić trwałość i perfekcyjne wykonanie",
            },
            {
              title: "Wykonanie 🛠️",
              textContent:
                "Budujemy długotrwałe relacje oparte na zaufaniu i transparentności, dostarczając rozwiązania, które spełniają najwyższe standardy branżowe",
            },
            {
              title: "Zaufanie 🤝",
              textContent:
                "Nasze doświadczenie i precyzyjne podejście gwarantują najwyższą jakość wykonania, niezależnie od skali projektu ",
            },
          ]}
        />

        <Box css={HomeViewCss.RealizationsBox}>
          <Typography variant="h3" fontSize="4rem">
            Realziacje w placówkach
          </Typography>
          <List css={HomeViewCss.horizontalList}>
            {images.map((img, i) => (
              <ImageListItem key={i}>
                <img src={img.img} alt={img.title} loading="lazy" />
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
    </>
  );
};
