import { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { Box } from "@mui/material";
import { CardsContainer } from "../../src/components/containers/CardsContainer";
import { ContactForm } from "../../src/components/forms/ContactForm";
import banner from "../assets/images/ContactBanner.png";
import AdresIcon from "../assets/images/iconAdres.png";
import ContactIcon from "../assets/images/iconCall.png";
import EmailIcon from "../assets/images/iconEmail.png";
import { Page } from "../components/presentational/Page";

const ContactViewCss = {
  formBox: () =>
    css({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "2.8rem",
    }),
  contactImg: () =>
    css({
      width: "35rem",
      borderRadius: "20px",
    }),
};

export const ContactView = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToTabs = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "instant", block: "center" });
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
    <Page herSectionTitle={"Kontakt"} heroSectionSubtitle={"Napisz do nas"} banner={banner}>
      <Box css={ContactViewCss.formBox} ref={formRef}>
        <ContactForm />
        <Box component="img" alt="contactImg" src={banner} css={ContactViewCss.contactImg} />
      </Box>

      <Box marginTop="5rem">
        <CardsContainer
          cardSize="medium"
          cardsData={[
            {
              title: "Adres",
              textContent:
                "ul. Piłsudskiego 74/320 50-020 Wrocław NIP: 897 187 52 77 Regon 385355839 KRS 0000824325",
              pngIcon: AdresIcon,
            },
            {
              title: "Telefon",
              textContent:
                "+48 690 001 858 Godziny kontaktu: Pon-Pt: 8:00 - 18:00 Sob: 9:00 - 14:00",
              pngIcon: ContactIcon,
            },
            {
              title: "E-Mail",
              textContent: "biuro@techinstalacje.pl",
              pngIcon: EmailIcon,
            },
          ]}
        />
      </Box>
    </Page>
  );
};
