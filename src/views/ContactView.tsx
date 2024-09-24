import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { CardsContainer } from "../../src/components/containers/CardsContainer";
import TitleSubTitleContainer from "../../src/components/containers/TitleSubTitleContainer";
import { ContactForm } from "../../src/components/forms/ContactForm";
import banner from "../assets/images/contactBanner.png";
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
    }),
};

export const ContactView = () => (
  <Page herSectionTitle={"Kontakt"} heroSectionSubtitle={"Napisz do nas"} banner={banner}>
    <TitleSubTitleContainer
      title="Skontaktuj się z nami w celu ustalenia warunków współpracy!"
      subtitle="Nie ważne czy przez maila, smsa czy rozmowę telefoniczną, ważne że jesteśmy otwarci na każdą propozycję i zwykle odpowiadamy jeszcze tego samego dnia."
    />

    <Box css={ContactViewCss.formBox}>
      <ContactForm />
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
            textContent: "+48 690 001 858 Godziny kontaktu: Pon-Pt: 8:00 - 18:00 Sob: 9:00 - 14:00",
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
