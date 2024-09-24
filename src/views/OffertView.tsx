import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TitleSubTitleContainer from "../../src/components/containers/TitleSubTitleContainer";
import { BaseTabs } from "../../src/components/presentational/BaseTabs";
import { CommonButton } from "../../src/components/presentational/Button";
import banner from "../assets/images/offertBanner.png";
import tab5Img from "../assets/images/offertElektryka.png";
import tab1Img from "../assets/images/offertFotowoltaika.png";
import tab3Img from "../assets/images/offertHydraulika.png";
import tab2Img from "../assets/images/offertInstalacje.png";
import tab4Img from "../assets/images/offertWentylacja.png";
import { Page } from "../components/presentational/Page";

const tabData = [
  {
    tabTitle: "Fotowoltaika",
    tabContent:
      "Sposób na realne obniżenie rachunków za prąd oraz niezależność od podwyżek cen energii.Tylko kilka kroków dzieli Państwa od własnej instalacji Fotowoltaicznej. Opieramynasze instalacje tylko na urządzeniach renomowanych marek, jak Fronius, SolarEdge, Sharp,JaSolar.Nie oszczędzamy na materiałach, komponentach. Priorytetem jest optymalnainstalacja, dopasowana do Państwa potrzeb.",
    tabPicture: tab1Img,
  },
  {
    tabTitle: "Instalacje",
    tabContent:
      "Sposób na realne obniżenie rachunków za prąd oraz niezależność od podwyżek cen energii.Tylko kilka kroków dzieli Państwa od własnej instalacji Fotowoltaicznej. Opieramynasze instalacje tylko na urządzeniach renomowanych marek, jak Fronius, SolarEdge, Sharp,JaSolar.Nie oszczędzamy na materiałach, komponentach. Priorytetem jest optymalnainstalacja, dopasowana do Państwa potrzeb.",
    tabPicture: tab2Img,
  },
  {
    tabTitle: "Hydraulika",
    tabContent:
      "Sposób na realne obniżenie rachunków za prąd oraz niezależność od podwyżek cen energii.Tylko kilka kroków dzieli Państwa od własnej instalacji Fotowoltaicznej. Opieramynasze instalacje tylko na urządzeniach renomowanych marek, jak Fronius, SolarEdge, Sharp,JaSolar.Nie oszczędzamy na materiałach, komponentach. Priorytetem jest optymalnainstalacja, dopasowana do Państwa potrzeb.",
    tabPicture: tab3Img,
  },
  {
    tabTitle: "Wentylacja",
    tabContent:
      "Sposób na realne obniżenie rachunków za prąd oraz niezależność od podwyżek cen energii.Tylko kilka kroków dzieli Państwa od własnej instalacji Fotowoltaicznej. Opieramynasze instalacje tylko na urządzeniach renomowanych marek, jak Fronius, SolarEdge, Sharp,JaSolar.Nie oszczędzamy na materiałach, komponentach. Priorytetem jest optymalnainstalacja, dopasowana do Państwa potrzeb.",
    tabPicture: tab4Img,
  },
  {
    tabTitle: "Elektryka",
    tabContent:
      "Sposób na realne obniżenie rachunków za prąd oraz niezależność od podwyżek cen energii.Tylko kilka kroków dzieli Państwa od własnej instalacji Fotowoltaicznej. Opieramynasze instalacje tylko na urządzeniach renomowanych marek, jak Fronius, SolarEdge, Sharp,JaSolar.Nie oszczędzamy na materiałach, komponentach. Priorytetem jest optymalnainstalacja, dopasowana do Państwa potrzeb.",
    tabPicture: tab5Img,
  },
];

export const OffertView = () => (
  <Page
    herSectionTitle={"Oferta"}
    heroSectionSubtitle={"Wybierz idealną dla siebie"}
    banner={banner}
  >
    <TitleSubTitleContainer
      title="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
      subtitle="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    />

    <BaseTabs tabData={tabData} />

    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
      <Typography variant="h2" sx={{ marginTop: "4rem", textAlign: "center", fontWeight: "bold" }}>
        Tworzymy spersonalizowane oferty specjalne dla Twojej firmy! Skontaktuj się z nami w celu
        ustalenia warunków itp. itd.
      </Typography>
      <CommonButton text="Skontaktuj się z nami" />
    </Box>
  </Page>
);
