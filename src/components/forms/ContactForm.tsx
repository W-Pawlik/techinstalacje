import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { css, useTheme } from "@emotion/react";
import { Theme, Typography } from "@mui/material";
import { BaseNotification } from "../presentational/BaseNotification";
import { CommonButton } from "../presentational/Button";

const ContactFormCss = {
  form: () =>
    css({
      display: "flex",
      flexDirection: "column",

      gap: "0.7rem",
      alignItems: "stretch",
      // padding: "2rem 2rem",
      borderRadius: "20px",
      width: "38rem",
      textAlign: "center",
      "& button": {
        width: "15rem",
        margin: "1.5rem 0",
        alignSelf: "center",
      },
      "@media (max-width: 650px)": {
        // alignItems: "center",
        width: "18rem",
      },
      // "@media (max-width: 850px)": {
      //   // alignItems: "center",
      //   width: "30rem",
      // },

      // "@media (max-width: 1465px)": {
      //   // alignItems: "center",
      //   width: "18rem",
      // },
    }),
  title: (theme: Theme) =>
    css({
      color: theme.palette.common.brandBlue,
      textTransform: "uppercase",
      fontWeight: "bold",
    }),
  input: (theme: Theme) =>
    css({
      padding: "0.5rem 0.9rem",
      borderRadius: "8px",
      resize: "none",
      color: theme.palette.common.brandBlue,
      border: `1px solid ${theme.palette.common.brandBlue}`,
      "&::placeholder": {
        color: theme.palette.common.brandBlue,
      },
    }),
};

export const ContactForm = () => {
  const theme: Theme = useTheme();
  const form = useRef(null);

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_phone: "",
    message: "",
  });

  const pubKey = import.meta.env.VITE_EMAILJS_PUB_KEY;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current !== null) {
      // eslint-disable-next-line import/no-named-as-default-member
      emailjs
        .sendForm("service_wxmyr5d", "template_zfvow85", form.current, {
          publicKey: pubKey,
        })
        .then(
          () => {
            setOpen(true);
            setError(false);
            setFormData({
              from_name: "",
              from_email: "",
              from_phone: "",
              message: "",
            });
          },
          () => {
            setOpen(true);
            setError(true);
          },
        );
    }
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} css={ContactFormCss.form()}>
        <Typography variant="h2" css={ContactFormCss.title}>
          Formularz kontaktowy
        </Typography>
        <input
          type="text"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          placeholder="Imie i nazwisko"
          css={ContactFormCss.input(theme)}
          required
        />
        <input
          type="email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          placeholder="Adres E-mail"
          css={ContactFormCss.input(theme)}
          required
        />
        <input
          type="tel"
          name="from_phone"
          value={formData.from_phone}
          onChange={handleChange}
          placeholder="Telefon"
          css={ContactFormCss.input(theme)}
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Twoja wiadomość"
          css={ContactFormCss.input(theme)}
          style={{ height: "8rem" }}
        />
        <CommonButton type="submit" text="Skontaktuj się z nami" size="small" />
      </form>
      {open && (
        <BaseNotification
          onClose={handleClose}
          severity={error ? "error" : "success"}
          variant="filled"
          open={open}
          message={error ? "Błąd! Wiadomość nie została wysłana" : "Wiadmość została wysłana"}
          autoHideDuration={1500}
        />
      )}
    </>
  );
};
