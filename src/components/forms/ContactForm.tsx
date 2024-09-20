import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { css, useTheme } from "@emotion/react";
import { Theme, Typography } from "@mui/material";
import { CommonButton } from "../presentational/Button";

const ContactFormCss = {
  form: (theme: Theme) =>
    css({
      display: "flex",
      flexDirection: "column",

      gap: "0.7rem",
      alignItems: "stretch",
      padding: "2rem 8rem",
      backgroundColor: theme.palette.common.brandBlue,
      borderRadius: "10px",
      width: "50%",
      textAlign: "center",
      "& button": {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.brandBlue,
        width: "15rem",
        margin: "1.5rem 0",
        alignSelf: "center",
      },
    }),
  title: (theme: Theme) =>
    css({
      color: theme.palette.common.white,
      textTransform: "uppercase",
    }),
  input: (theme: Theme) =>
    css({
      padding: "0.5rem 0.9rem",
      borderRadius: "8px",
      border: "none",
      resize: "none",
      color: theme.palette.common.brandBlue,
    }),
};

export const ContactForm = () => {
  const theme: Theme = useTheme();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wxmyr5d", "template_zfvow85", form.current, {
        publicKey: "cNtCTivX5pxxwrd7C",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} css={ContactFormCss.form(theme)}>
      <Typography variant="h2" css={ContactFormCss.title}>
        Formularz kontaktowy
      </Typography>
      <input
        type="text"
        name="from_name"
        placeholder="Imie i nazwisko"
        css={ContactFormCss.input(theme)}
      />
      <input
        type="email"
        name="from_email"
        placeholder="Adres E-mail"
        css={ContactFormCss.input(theme)}
      />
      <input
        type="tel"
        name="from_phone"
        placeholder="Telefon"
        css={ContactFormCss.input(theme)}
        pattern="[0-9]{9}"
        required
      />
      <textarea
        name="Twoja wiadomość"
        placeholder="Twoja wiadomość"
        css={ContactFormCss.input(theme)}
        style={{ height: "8rem" }}
      />
      <CommonButton type="submit" text="Wyślij zapytanie" size="small" />
    </form>
  );
};
