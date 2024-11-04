/* eslint-disable max-len */
import { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { Box } from "@mui/material";
import { CardsContainer } from "../../src/components/containers/CardsContainer";
import { ContactForm } from "../../src/components/forms/ContactForm";
import banner from "../assets/images/ContactBanner.webp";
import TitleSubTitleContainer from "../components/containers/TitleSubTitleContainer";
import { Page } from "../components/presentational/Page";
import { cardsData } from "../consts/texts/contactView/cardsData";
import { ContactTexts } from "../consts/texts/contactView/contactView";

const ContactViewCss = {
  formBox: () =>
    css({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "6rem",
    }),
};

export const ContactView = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToTabs = () => {
    if (formRef.current) {
      window.scrollTo({ top: 0, behavior: "instant" });
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  useEffect(() => {
    const shouldScrollToForm = localStorage.getItem("scrollToForm");

    if (shouldScrollToForm === "true") {
      scrollToTabs();
    }
    localStorage.removeItem("scrollToForm");
  }, []);

  return (
    <Page
      herSectionTitle={ContactTexts.HeroSectionTitle}
      heroSectionSubtitle={ContactTexts.HeroSectionSubTitle}
      banner={banner}
    >
      <Box css={ContactViewCss.formBox} ref={formRef}>
        <ContactForm />
      </Box>

      <TitleSubTitleContainer
        title={ContactTexts.TitleSubTitleContainerTitle}
        subtitle={ContactTexts.TitleSubTitleContainerSubTitle}
      />

      <Box marginTop="5rem">
        <CardsContainer cardsData={cardsData} xsWidth="13rem" smWidth="10rem" smHeight="10rem" />
      </Box>
    </Page>
  );
};
