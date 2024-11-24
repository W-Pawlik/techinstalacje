import { Typography } from "@mui/material";
import { Navigate, RouteObject } from "react-router-dom";
import { navigationRoutes } from "../../consts/navigationRoutes";
import { AboutView } from "../../views/AboutView";
import { ContactView } from "../../views/ContactView";
import { GalleryView } from "../../views/GalleryView";
import { HomeView } from "../../views/HomeView";
import { OffertView } from "../../views/OffertView";
import { Layout } from "../navigation/Layout";
import { NotFoundError } from "./NotFoundError";

export const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={navigationRoutes.HomeView} replace />,
      },
      {
        path: navigationRoutes.HomeView,
        element: <HomeView />,
        handle: {
          crumb: () => <Typography color="text.primary">Home</Typography>,
        },
      },
      {
        path: navigationRoutes.OffertView,
        element: <OffertView />,
        handle: {
          crumb: () => <Typography color="text.primary">Offert</Typography>,
        },
        children: [
          { index: true, element: <Navigate to="Fotowoltaika" replace /> },
          { path: ":offertTab", element: <OffertView /> },
        ],
      },
      {
        path: navigationRoutes.AboutView,
        element: <AboutView />,
        handle: {
          crumb: () => <Typography color="text.primary">AboutView</Typography>,
        },
      },
      {
        path: navigationRoutes.ContactView,
        element: <ContactView />,
        handle: {
          crumb: () => <Typography color="text.primary">ContactView</Typography>,
        },
      },
      {
        path: navigationRoutes.GalleryView,
        element: <GalleryView />,
        handle: {
          crumb: () => <Typography color="text.primary">GalleryView</Typography>,
        },
      },
      {
        path: "*",
        element: <NotFoundError />,
      },
    ],
  },
];
