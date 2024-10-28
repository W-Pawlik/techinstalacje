import React from "react";
import { css } from "@emotion/react";
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tab,
  Tabs,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
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
  tabContainer: () =>
    css({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      zIndex: "1",
      borderBottomLeftRadius: "10px !important",
      borderBottomRightRadius: "10px !important",
      backgroundColor: "#FAFAFA",
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

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value;
    navigate(`/oferta/${newValue}`, { replace: true });
    // setSelectedTab(newValue);
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
          display: { xs: "none", sm: "none", md: "block" },
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
                "@media (max-width: 1000px) and (min-width: 850px)": {
                  width: "12rem",
                  height: "3.25rem",
                  bottom: "-0.15rem",
                },
                "@media (max-width: 1150px) and (min-width: 1000px)": {
                  width: "14rem",
                  height: "3.5rem",
                  bottom: "-0.20rem",
                },
                "@media (max-width: 1465px) and (min-width: 1150px)": {
                  width: "18rem",
                  height: "3.5rem",
                  bottom: "-0.2rem",
                },
              },
            }}
          />
        ))}
      </Tabs>
      <Select
        value={currentTab}
        onChange={handleSelectChange}
        fullWidth
        displayEmpty
        variant="outlined"
        sx={{
          // marginBottom: "1rem",
          display: { xs: "flex", sm: "flex", md: "none" },
        }}
      >
        {tabData.map((tab) => (
          <MenuItem key={tab.tabTitle} value={tab.tabTitle}>
            {tab.tabTitle}
          </MenuItem>
        ))}
      </Select>
      <Box width="100%">
        {tabData.map((tab, index) =>
          tab.tabTitle === currentTab ? (
            <Box
              key={tab.tabTitle}
              css={BaseTabsCss.tabContainer()}
              sx={{
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: index % 2 === 0 ? "row-reverse" : "row",
                },
                borderBottomLeftRadius: { md: "10px !important" },
                borderBottomRightRadius: { md: "10px !important" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: "100%", md: "15rem", lg: "25rem", xl: "30rem" },
                  height: { xs: "20rem", sm: "20rem", md: "22rem", lg: "25rem", xl: "30rem" },
                  borderRadius: {
                    xs: "none !important",
                    sm: "none !important",
                    md: index % 2 === 0 ? "0 0 10px 0 !important" : "0 0 0 10px !important",
                  },
                }}
                component="img"
                src={tab.tabPicture}
                alt={tab.tabTitle}
              />
              <Box
                component="div"
                display="flex"
                flexDirection="column"
                gap="1.5rem"
                justifyContent="center"
                sx={{
                  padding: {
                    xs: "1rem 1rem",
                    sm: "1rem 2rem",
                    md: "1rem 3rem",
                    lg: "0 4rem",
                  },
                  gap: { sm: "0", md: "0" },
                }}
              >
                <Typography
                  variant="h2"
                  textTransform="uppercase"
                  fontWeight="bold"
                  textAlign="start"
                >
                  {tab.tabTitle}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ width: { xs: "100%", sm: "100%", md: "30rem", lg: "30rem" } }}
                >
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
