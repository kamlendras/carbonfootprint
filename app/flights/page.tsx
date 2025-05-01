import Sheet from "@mui/joy/Sheet";
import Stepper from "../components/flights/stepper";
import Button from "@mui/joy/Button";
import Link from "next/link";
import Grid from "@mui/joy/Grid";
import * as React from "react";
import Typography from "@mui/joy/Typography";
import Textarea from "@mui/joy/Textarea";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Navigation from "../components/flights/navigation"

export default function Home() {
  return (
    <>
      <Sheet variant="soft" sx={{  p: 2, borderRadius: "16px" }} className="sheet">
        <Stepper />
        <Sheet
          variant="soft"
          color="neutral"
          sx={{
            p: 2,
            borderRadius: "lg",
            // boxShadow: "xl",
          }}
        >
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={12}>
              <Typography level="body-lg">
                <FlightTakeoffIcon />
                Flight 1
              </Typography>
            </Grid>

            <Grid xs={12} md={6}>
              <FormControl>
                <FormLabel>From</FormLabel>

                <Textarea
                  placeholder="IATA code or an airport name"
                  name="Outlined"
                  defaultValue=""
                  variant="outlined"
                />
              </FormControl>{" "}
            </Grid>
            <Grid xs={12} md={6}>
              <FormControl>
                <FormLabel>To</FormLabel>

                <Textarea
                  placeholder="IATA code or an airport name"
                  name="Outlined"
                  defaultValue=""
                  variant="outlined"
                />
              </FormControl>{" "}
            </Grid>
            <Grid xs={12} md={4}>
              <FormControl>
                <FormLabel>Flight</FormLabel>
                <Select defaultValue="1" variant="outlined">
                  <Option value="1">Return</Option>
                  <Option value="2">Single</Option>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12 } md={4}>
              <FormControl>
                <FormLabel>Class</FormLabel>
                <Select defaultValue="1" variant="outlined">
                  <Option value="1">Economy</Option>
                  <Option value="2">Economy+</Option>
                  <Option value="3">Business</Option>
                  <Option value="4">First</Option>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} md={4}>
              <FormControl>
                <FormLabel>Passengers</FormLabel>
                <Select defaultValue="1" variant="outlined">
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                  <Option value="8">8</Option>
                  <Option value="9">9</Option>
                  <Option value="10">10</Option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
       
        </Sheet>
    <Navigation/>
      </Sheet>
    </>
  );
}
