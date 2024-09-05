import { Typography } from "@mui/material";
import { Navigate, RouteObject } from "react-router-dom";
import { navigationRoutes } from "../../consts/navigationRoutes";
import { HomeView } from "../../views/HomeView";

export const routerConfig: RouteObject[] = [
  {
    path: "/",
    // element: <Layout />, tutaj mogę zrobić menu
    children: [
      {
        // Domyślna trasa, przekierowanie do HomeView
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
    ],
  },
];
