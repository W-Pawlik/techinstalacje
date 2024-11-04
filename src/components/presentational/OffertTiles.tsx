import { css } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { tileData } from "../../consts/texts/homeView/tileData";

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
        transform: "translateY(-300px)",
        "@media (max-width: 500px) and (min-width: 0px)": {
          transform: "translateY(-120px)",
        },
      },
      "& .description": {
        transform: "translateY(-150px)",
        opacity: 1,
        "@media (max-width: 500px) and (min-width: 0px)": {
          transform: "translateY(-50px)",
        },
      },
      "& .btn": {
        "@media (max-width: 500px) and (min-width: 0px)": {
          transform: "translateY(-34px)",
        },
      },
    },
    "@media (max-width: 1215px) and (min-width: 940px)": {
      flex: "1 1 calc(50% - 1rem)",
      maxWidth: "calc(50% - 1rem)",
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
    transition: "transform 0.5s ease, opacity 0.3s ease",
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
          sx={{
            width: { xs: "17.5rem", sm: "17rem", md: "15rem", xl: "15rem" },
            height: { xs: "11rem", sm: "22rem" },
          }}
        >
          <img src={tile.imageUrl} alt={tile.title} css={tileStyles.image} loading="lazy" />
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
            sx={{ fontSize: { xs: "0.8rem !important" } }}
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
