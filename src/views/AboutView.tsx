import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import banner from "../assets/images/aboutViewBanner.png";
import smth from "../assets/images/smth (2).png";
import image from "../assets/images/szefImg.png";
import ContentLImgR from "../components/containers/ContentLImgR";
import AboutCard from "../components/presentational/AboutCard";
import CTABottom from "../components/presentational/CTABottom";
import { Page } from "../components/presentational/Page";
import { AboutTexts } from "../consts/texts/aboutView/aboutView";

export const AboutView = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("scrollToForm", "true");
    navigate("/kontakt");
  };
  return (
    <Page
      herSectionTitle={AboutTexts.HeroSectionTitle}
      heroSectionSubtitle={AboutTexts.HeroSectionSubTitle}
      banner={banner}
    >
      <ContentLImgR
        title={AboutTexts.FirstSectionTitle}
        content={AboutTexts.FirstSectionContent}
        image={smth}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            borderBottom: "thin solid #d8d8d8",
            width: "100%",
            textAlign: "center",
            fontWeight: "bold",
          }}
          variant="h2"
        >
          Nasz lider
        </Typography>
        <AboutCard
          name={AboutTexts.AboutCardName}
          description={AboutTexts.AboutCardContent}
          imageUrl={image}
        />
      </Box>

      <CTABottom
        title="Checesz dowiedzieć się więcej na temat naszej firmy ? Skontaktuj się z nami!"
        buttonText="Skontaktuj się z nami"
        onButtonClick={handleClick}
      />
    </Page>
  );
};
