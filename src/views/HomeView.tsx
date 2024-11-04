/* eslint-disable max-len */
import { css } from "@emotion/react";
import { ImageListItem, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import banner from "../assets/images/heroSectionBanner.webp";
import logo1 from "../assets/images/realization1.webp";
import logo2 from "../assets/images/realization2.webp";
import logo3 from "../assets/images/realization3.webp";
import smthImg from "../assets/images/smth (2).webp";
import { CardsContainer } from "../components/containers/CardsContainer";
import ContentLImgR from "../components/containers/ContentLImgR";
import ContentWithHeadingContainer from "../components/containers/ContentWithHeadingContainer";
import { OffertTiles } from "../components/presentational/OffertTiles";
import { Page } from "../components/presentational/Page";
import VerticalStepper from "../components/presentational/VerticalStepper";
import { cardsData } from "../consts/texts/homeView/cardsData";
import { HomeTexts } from "../consts/texts/homeView/homeView";

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
      herSectionTitle={HomeTexts.HeroSectionTitle}
      heroSectionSubtitle={HomeTexts.HeroSectionSubTitle}
      buttonText="Poznaj nas"
      banner={banner}
    >
      <ContentLImgR
        title={HomeTexts.FirstSectionTitle}
        content={HomeTexts.FirstSectionContent}
        image={smthImg}
      />

      <CardsContainer cardsData={cardsData} />

      <Box css={HomeViewCss.RealizationsBox}>
        <Typography variant="h2" fontWeight="bold">
          Realziacje w placówkach
        </Typography>
        <List css={HomeViewCss.horizontalList}>
          {images.map((img, i) => (
            <ImageListItem key={i}>
              <Box
                component="img"
                sx={{ width: { xs: "4.5rem", sm: "7rem", md: "10rem", lg: "14rem", xl: "16rem" } }}
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
        content={<Typography variant="body1">{HomeTexts.TilesCWHCContent}</Typography>}
      />

      <OffertTiles />
    </Page>
  );
};
