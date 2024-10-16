import { css } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import offert1 from "../../assets/images/offert1.jpg";
import offert2 from "../../assets/images/offert2.jpg";
import offert3 from "../../assets/images/offert3.jpg";
import offert4 from "../../assets/images/offert4.jpg";
import { width } from "@mui/system";

const tileData = [
  {
    title: "Instalacje",
    imageUrl: offert1,
    description: "Profesjonalne instalacje gazowe dla dużych obiektów",
  },
  {
    title: "Hydraulika",
    imageUrl: offert2,
    description: "Profesjonalne instalacje gazowe dla dużych obiektów",
  },
  {
    title: "Fotowoltaika",
    imageUrl: offert3,
    description: "Profesjonalne instalacje gazowe dla dużych obiektów",
  },
  {
    title: "Wentylacje",
    imageUrl: offert4,
    description: "Profesjonalne instalacje gazowe dla dużych obiektów",
  },
];

const tileStyles = {
  tileContainer: css({
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  }),
  tile: css({
    position: "relative",
    overflow: "hidden",
    transition: "transform 0.3s ease",
    "&:hover": {
      "& .overlay": {
        opacity: 0.8,
      },
      "& .title": {
        transform: "translateY(-190px)",
        "@media (max-width: 500px) and (min-width: 0px)": {
          transform: "translateY(-120px)",
        },
      },
      "& .description": {
        transform: "translateY(-150px)",
        opacity: 1,
        "@media (max-width: 500px) and (min-width: 0px)": {
          transform: "translateY(-90px)",
        },
      },
    },
    "@media (max-width: 1215px) and (min-width: 940px)": {
      flex: "1 1 calc(50% - 1rem)", // Dla szerokości okna od 940px do 1215px
      maxWidth: "calc(50% - 1rem)", // Ustaw dwie kafelki w rzędzie
    },
  }),
  image: css({
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }),
  overlay: css({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(180deg,  rgba(76,128,206,1) 26%, rgba(76,128,206,1) 50%)",
    opacity: 0,
    transition: "opacity 0.3s ease",
  }),
  title: css({
    position: "absolute",
    bottom: "10px",
    left: "10px",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "bold",
    transition: "transform 0.5s ease",
  }),
  description: css({
    position: "absolute",
    bottom: "-100px",
    left: "10px",
    color: "white",
    fontSize: "1rem",
    transition: "transform 0.5s ease, opacity 1s ease",
    opacity: 0,
  }),
  arrow: css({
    position: "relative",
    left: "0.5rem",
    bottom: "0.3rem",
    fontSize: "2.5rem",
    transition: "all 0.5s ease",
  }),
  btn: css({
    color: "#fff",
    padding: 0,
    transition: "all 0.5s ease",
    "&:hover": {
      "& .arrow": {
        transform: "translateX(6px)",
      },
    },
  }),
};

export const OffertTiles = () => {
  const navigate = useNavigate();

  const handleClick = (tileTitle: string) => {
    localStorage.setItem("scrollToTabs", "true");
    navigate(`/oferta/${tileTitle}`);
  };

  return (
    <Box css={tileStyles.tileContainer}>
      {tileData.map((tile, index) => (
        <Box
          css={tileStyles.tile}
          key={index}
          sx={{ width: { xs: "20rem", sm: "17rem" }, height: { xs: "11rem", sm: "22rem" } }}
        >
          <img src={tile.imageUrl} alt={tile.title} css={tileStyles.image} />
          <Box className="overlay" css={tileStyles.overlay} />
          <Typography className="title" css={tileStyles.title}>
            {tile.title}
          </Typography>
          <Typography
            className="description"
            css={tileStyles.description}
            display="flex"
            flexDirection="column"
            alignItems="start"
            gap="1rem"
          >
            {tile.description}
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button
                variant="text"
                css={tileStyles.btn}
                className="btn"
                onClick={() => handleClick(tile.title)}
              >
                Sprawdź ofertę
                <span css={tileStyles.arrow} className="arrow">
                  &#x203A;
                </span>
              </Button>
            </Box>
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
