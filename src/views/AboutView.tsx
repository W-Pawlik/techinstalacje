import banner from "../assets/images/aboutViewBanner.png";
import TitleSubTitleContainer from "../components/containers/TitleSubTitleContainer";
import { Page } from "../components/presentational/Page";

export const AboutView = () => (
  <Page herSectionTitle={"O nas"} heroSectionSubtitle={"Poznaj nas bliżej"} banner={banner}>
    <TitleSubTitleContainer
      title="Nasze realizacje tworzone są w zarówno w dużych jak i małych placówkach"
      subtitle="Ispot, piekarnia jakaś tam, sklep Lorem impsum, nie żałują z naszych usług"
    />
  </Page>
);
