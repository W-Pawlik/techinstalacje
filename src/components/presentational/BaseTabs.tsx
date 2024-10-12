import React from "react";
import { css } from "@emotion/react";
import { Box, Tab, Tabs, Theme, Typography, useTheme } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

interface TabData {
  tabTitle: string;
  tabContent: React.ReactNode;
  tabPicture: string;
}

interface BaseTabsProps {
  tabData: TabData[];
}

const BaseTabsCss = {
  tabContainer: (theme: Theme, isImageRight: boolean) =>
    css({
      display: "flex",
      flexDirection: isImageRight ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      zIndex: "1",
      borderBottomLeftRadius: "10px !important",
      borderBottomRightRadius: "10px !important",
      backgroundColor: "#FAFAFA",
    }),
  tabImg: (isImageRight: boolean) =>
    css({
      borderRadius: isImageRight ? "0 0 10px 0 !important" : "0 0 0 10px !important",
    }),
  activeTab: (theme: Theme) =>
    css({
      textTransform: "capitalize",
      fontWeight: "bold",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      transition: "all 0.3s ease zIndex 0s",
    }),
  inactiveTab: (theme: Theme) =>
    css({
      textTransform: "capitalize",
      fontSize: "1rem",
      backgroundColor: "#FAFAFA",
      color: `${theme.palette.common.brandBlue} !important`,
      opacity: "1",
      transition: "all 0.3s ease",
      margin: "0 !important",
      padding: "0 !important",
      border: "1px solid #EBEBEB",
      zIndex: "1",
      "&:after": {
        display: "none",
      },
    }),
  tabsRoot: () =>
    css({
      overflow: "visible !important",
      width: "100%",
      "& button": {
        marginRight: "0",
        padding: "0",
      },
    }),
  tabsFlexContainer: () =>
    css({
      overflow: "visible !important",
    }),
};

export const BaseTabs = ({ tabData }: BaseTabsProps) => {
  const theme: Theme = useTheme();
  const navigate = useNavigate();
  const { offertTab } = useParams<{ offertTab?: string }>();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    navigate(`/oferta/${newValue}`, { replace: true });
  };

  const currentTab =
    tabData.find((tab) => tab.tabTitle === offertTab)?.tabTitle || tabData[0].tabTitle;

  return (
    <Box>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        aria-label="base tabs"
        css={BaseTabsCss.tabsRoot}
        TabIndicatorProps={{ style: { display: "none" } }}
        variant="fullWidth"
        textColor="inherit"
        sx={{
          "& .MuiTabs-scroller": {
            overflow: "visible !important",
          },
        }}
      >
        {tabData.map((tab) => (
          <Tab
            key={tab.tabTitle}
            label={tab.tabTitle}
            value={tab.tabTitle}
            disableRipple
            css={
              tab.tabTitle === currentTab
                ? BaseTabsCss.activeTab(theme)
                : BaseTabsCss.inactiveTab(theme)
            }
            sx={{
              overflow: "visible !important",
              "&.MuiTabs-scroller": {
                overflow: "visible !important",
              },

              "&.Mui-selected:after": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4rem",
                borderRadius: "10px",
                position: "absolute",
                bottom: "-0.5rem",
                zIndex: "10",
                backgroundColor: theme.palette.common.brandBlue,
                width: "20rem",
                height: "4rem",
                content: `"${tab.tabTitle}"`,
                color: "white",
              },
            }}
          />
        ))}
      </Tabs>
      <Box width="100%">
        {tabData.map((tab, index) =>
          tab.tabTitle === currentTab ? (
            <Box key={tab.tabTitle} css={BaseTabsCss.tabContainer(theme, index % 2 === 0)}>
              <Box
                sx={{ width: "30rem", height: "30rem" }}
                component="img"
                src={tab.tabPicture}
                alt={tab.tabTitle}
                css={BaseTabsCss.tabImg(index % 2 === 0)}
              />
              <Box
                component="div"
                display="flex"
                flexDirection="column"
                gap="1.5rem"
                padding="0 4rem"
                justifyContent="center"
              >
                <Typography
                  variant="h2"
                  textTransform="uppercase"
                  fontWeight="bold"
                  textAlign="start"
                >
                  {tab.tabTitle}
                </Typography>
                <Typography variant="body2" width="30rem">
                  {tab.tabContent}
                </Typography>
              </Box>
            </Box>
          ) : null,
        )}
      </Box>
    </Box>
  );
};
