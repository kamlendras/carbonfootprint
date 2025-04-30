"use client";
import * as React from "react";
import Stepper from "@mui/joy/Stepper";
import Step, { stepClasses } from "@mui/joy/Step";
import StepIndicator, { stepIndicatorClasses } from "@mui/joy/StepIndicator";
import Typography from "@mui/joy/Typography";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

export default function IconStepper() {
  return (
    <>
      <Stepper
        size="lg"
        sx={{
          width: "100%",
          "--StepIndicator-size": "3rem",
          "--Step-connectorInset": "0px",
          [`& .${stepIndicatorClasses.root}`]: {
            borderWidth: 4,
          },
          [`& .${stepClasses.root}::after`]: {
            height: 4,
          },
          [`& .${stepClasses.completed}`]: {
            [`& .${stepIndicatorClasses.root}`]: {
              borderColor: "primary.300",
              color: "primary.300",
            },
            "&::after": {
              bgcolor: "primary.300",
            },
          },
          [`& .${stepClasses.active}`]: {
            [`& .${stepIndicatorClasses.root}`]: {
              borderColor: "currentColor",
            },
          },
          [`& .${stepClasses.disabled} *`]: {
            color: "neutral.outlinedDisabledColor",
          },
        }}
      >
        <Step
          completed
          orientation="vertical"
          indicator={
            <StepIndicator variant="outlined" color="primary">
              <HomeFilledIcon />
            </StepIndicator>
          }
        />
        <Step
          orientation="vertical"
          completed
          indicator={
            <StepIndicator variant="outlined" color="primary">
              <DirectionsCarIcon />
            </StepIndicator>
          }
        />
        <Step
          orientation="vertical"
          completed
          indicator={
            <StepIndicator variant="outlined" color="primary">
              <DirectionsBusIcon />
            </StepIndicator>
          }
        />
        <Step
          orientation="vertical"
          active
          indicator={
            <StepIndicator variant="solid" color="primary">
              <AirplanemodeActiveIcon />
            </StepIndicator>
          }
        >
          <Typography
            style={{ textTransform: "none" }}
            sx={{
              textTransform: "uppercase",
              fontWeight: "lg",
              fontSize: "0.75rem",
              letterSpacing: "0.5px",
            }}
          >
            In the air
          </Typography>
        </Step>
        <Step
          orientation="vertical"
          disabled
          indicator={
            <StepIndicator variant="outlined" color="neutral">
              <FastfoodIcon />
            </StepIndicator>
          }
        />
        <Step
          orientation="vertical"
          disabled
          indicator={
            <StepIndicator variant="outlined" color="neutral">
              <AccountBalanceWalletIcon />
            </StepIndicator>
          }
        ></Step>
        <Step
          orientation="vertical"
          disabled
          indicator={
            <StepIndicator variant="outlined" color="neutral">
              <FilterDramaIcon />
            </StepIndicator>
          }
        ></Step>
      </Stepper>
    </>
  );
}
