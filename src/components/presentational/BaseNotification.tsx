import React from "react";
import { css, useTheme } from "@emotion/react";
import { Alert, Fade, Grow, Slide, SlideProps, Snackbar, Theme } from "@mui/material";

interface Position {
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
}

export interface BaseNotificationProps {
  open: boolean;
  message?: string;
  position?: Position;
  severity?: "error" | "warning" | "info" | "success";
  variant?: "standard" | "filled" | "outlined";
  autoHideDuration?: number;
  onClose: () => void;
  textOrientation?: "start" | "center" | "end";
  transitionEffect?: "slide" | "fade" | "grow";
  slideDirection?: "down" | "up" | "left" | "right";
}

const TransitionSlide = (props: SlideProps, direction: "up" | "down" | "left" | "right") => (
  <Slide {...props} direction={direction} />
);

const BaseNotificationCss = {
  snackBarContent: (theme: Theme, variant: string, textOrientation: string) =>
    css({
      "& .MuiSnackbarContent-root": {
        backgroundColor:
          variant === "standard" ? theme.palette.common.brandBlue : theme.palette.common.white,
        color: variant === "standard" ? theme.palette.common.white : theme.palette.common.brandBlue,
        border: variant === "outlined" ? `2px solid ${theme.palette.common.brandBlue}` : "none",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: textOrientation,
      },
    }),
};

export const BaseNotification = ({
  open = true,
  message = "This is your notification",
  position = { vertical: "top", horizontal: "right" },
  severity,
  variant = "standard",
  autoHideDuration,
  onClose,
  textOrientation = "start",
  transitionEffect = "slide",
  slideDirection = "left",
}: BaseNotificationProps) => {
  const theme: Theme = useTheme();

  const getTransitionComponent = () => {
    switch (transitionEffect) {
      case "fade": {
        return Fade;
      }
      case "grow": {
        return Grow;
      }
      // eslint-disable-next-line unicorn/no-useless-switch-case
      case "slide":
      default: {
        return (props: SlideProps) => TransitionSlide(props, slideDirection);
      }
    }
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={position}
      message={severity ? null : message}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      css={BaseNotificationCss.snackBarContent(theme, variant, textOrientation)}
      TransitionComponent={getTransitionComponent()}
    >
      {severity && (
        <Alert onClose={onClose} severity={severity} variant={variant}>
          {message}
        </Alert>
      )}
    </Snackbar>
  );
};
