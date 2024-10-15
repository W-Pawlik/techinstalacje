/* eslint-disable max-len */
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Wstępne omówienie projektu",
    description: `Wrpółprace rozpoczneimy od spotkania i wstępnego omówienia wszystkich wymagań odnośnie powierzonego w nasze ręce proejktu`,
  },
  {
    label: "Prace instalacyjne",
    description: "Po ustaleniu wymagań projektu, rozpoczynam,y pracę nad zleconymi instalacjami.",
  },
  {
    label: "Wspólnie sprawdzamy poprawność wykonanej pracy",
    description: `Od rzu po zakończonej pracy, wspólnie rozważamy ewentualne poprawki.`,
  },
];

export default function VerticalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">Ostatni krok</Typography>
                ) : null
              }
            >
              <Typography variant="h4">{step.label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography variant="body2">{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                  {index === steps.length - 1 ? "Zakończ" : "Następny krok"}
                </Button>
                <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  Poprzedni krok
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography variant="body2">
            Jeżeli klient nie ma zastrzeżeń, to pomyślnie zakańczamy współprace.
          </Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Zobacz jeszcze raz
          </Button>
        </Paper>
      )}
    </Box>
  );
}
