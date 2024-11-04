import { useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { BaseTabs } from "../../src/components/presentational/BaseTabs";
import { CommonButton } from "../../src/components/presentational/Button";
import banner from "../assets/images/offertBanner.webp";
import { Page } from "../components/presentational/Page";
import { tabData } from "../consts/texts/offertView/tabData";

export const OffertView = () => {
  const navigate = useNavigate();
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollToTabs = () => {
    if (tabsRef.current) {
      window.scrollTo({ top: 0, behavior: "instant" });

      tabsRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleClick = () => {
    localStorage.setItem("scrollToForm", "true");
    navigate("/kontakt");
  };

  useEffect(() => {
    const shouldScrollToTabs = localStorage.getItem("scrollToTabs");

    if (shouldScrollToTabs === "true") {
      scrollToTabs();
    }
    localStorage.removeItem("scrollToTabs");
  }, []);

  return (
    <Page
      herSectionTitle={"Oferta"}
      heroSectionSubtitle={"Wybierz idealną dla siebie"}
      banner={banner}
    >
      <Typography
        sx={{
          textAlign: "center",
          marginBottom: "4rem",
          borderBottom: "1px solid #D9D9D9",
          paddingBottom: "2rem",
        }}
        variant="h1"
      >
        W TechInstalacje oferujemy kompleksowe usługi instalacyjne dla domów i firm. Nasze
        specjalizacje to:
      </Typography>

      <Box component="div" ref={tabsRef}>
        <BaseTabs tabData={tabData} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
        <Typography
          variant="h2"
          sx={{ marginTop: "4rem", textAlign: "center", fontWeight: "bold" }}
        >
          Tworzymy spersonalizowane oferty specjalne dla Twojej firmy! Skontaktuj się z nami w celu
          ustalenia warunków itp. itd.
        </Typography>
        <CommonButton text="Skontaktuj się z nami" onClick={handleClick} />
      </Box>
    </Page>
  );
};
