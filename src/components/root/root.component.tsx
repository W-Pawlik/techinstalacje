import React from "react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router-dom";
import { createTheme } from "../../assets/themes/createTheme";
import { RouterFallbackSpinner } from "../presentational/RouterFallbackSpinner";
import ErrorFallback from "./ErrorFallback";
import { router } from "./router";

import "../../assets/root.css";

const Root = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme()}>
        <RouterProvider router={router} fallbackElement={<RouterFallbackSpinner />} />
      </ThemeProvider>
    </StyledEngineProvider>
  </ErrorBoundary>
);

export default Root;
