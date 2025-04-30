import Sheet from "@mui/joy/Sheet";
import Stepper from "../components/food/stepper";
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

export default function Home() {
  return (
    <>
      <Sheet variant="soft" sx={{  p: 2, borderRadius: "16px" }}>
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
            <Grid  xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> High meat-eater</FormLabel>
                <Select defaultValue="1" variant="outlined">
                  <Option value="1">0</Option>
                  <Option value="2">1</Option>
                  <Option value="3">2</Option>
                  <Option value="4">3</Option>
                  <Option value="5">4</Option>
                  <Option value="6">5</Option>
                  <Option value="7">6</Option>
                  <Option value="8">7</Option>
                </Select>
              </FormControl>
            </Grid>
            <Grid  xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Medium meat-eater</FormLabel>
                <Select defaultValue="1" variant="outlined">
                  <Option value="1">0</Option>
                  <Option value="2">1</Option>
                  <Option value="3">2</Option>
                  <Option value="4">3</Option>
                  <Option value="5">4</Option>
                  <Option value="6">5</Option>
                  <Option value="7">6</Option>
                  <Option value="8">7</Option>
                </Select>
              </FormControl>
            </Grid>
            <Grid  xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Low meat-eater</FormLabel>
                <Select defaultValue="1" variant="outlined">
                  <Option value="1">0</Option>
                  <Option value="2">1</Option>
                  <Option value="3">2</Option>
                  <Option value="4">3</Option>
                  <Option value="5">4</Option>
                  <Option value="6">5</Option>
                  <Option value="7">6</Option>
                  <Option value="8">7</Option>
                </Select>
              </FormControl>
            </Grid>
  
            <Grid  xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Fish eater</FormLabel>
                <Select defaultValue="1" variant="outlined">
                  <Option value="1">0</Option>
                  <Option value="2">1</Option>
                  <Option value="3">2</Option>
                  <Option value="4">3</Option>
                  <Option value="5">4</Option>
                  <Option value="6">5</Option>
                  <Option value="7">6</Option>
                  <Option value="8">7</Option>
                </Select>
              </FormControl>
            </Grid>
            <Grid  xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Vegetarian</FormLabel>
                <Select defaultValue="1" variant="outlined">
                  <Option value="1">0</Option>
                  <Option value="2">1</Option>
                  <Option value="3">2</Option>
                  <Option value="4">3</Option>
                  <Option value="5">4</Option>
                  <Option value="6">5</Option>
                  <Option value="7">6</Option>
                  <Option value="8">7</Option>
                </Select>
              </FormControl>
            </Grid>
            <Grid  xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel>Vegan</FormLabel>
                <Select defaultValue="1" variant="outlined">
                  <Option value="1">0</Option>
                  <Option value="2">1</Option>
                  <Option value="3">2</Option>
                  <Option value="4">3</Option>
                  <Option value="5">4</Option>
                  <Option value="6">5</Option>
                  <Option value="7">6</Option>
                  <Option value="8">7</Option>
                </Select>
              </FormControl>
            </Grid>
     
            <Grid  xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> For how many people?</FormLabel>
                <Select defaultValue="1" variant="outlined">
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                  <Option value="7">7</Option>
                  <Option value="8">8</Option>
                  <Option value="9">9</Option>
                  <Option value="10">10</Option>
                </Select>
              </FormControl>
            </Grid>
            <Grid  xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> For how long?</FormLabel>
                <Select defaultValue="14" variant="outlined">
                  <Option value="1">1 day</Option>
                  <Option value="2">1 week</Option>
                  <Option value="3">1 month</Option>
                  <Option value="4">2 months</Option>
                  <Option value="5">3 months</Option>
                  <Option value="6">4 months</Option>
                  <Option value="7">5 months</Option>
                  <Option value="8">6 months</Option>
                  <Option value="9">7 months</Option>
                  <Option value="10">8 months</Option>
                  <Option value="11">9 months</Option>
                  <Option value="12">10 months</Option>
                  <Option value="13">11 months</Option>
                  <Option value="14">1 year</Option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Sheet>
        <Sheet>
          {" "}
          <Link href="/expenditure">
            <Button size="lg">Next</Button>
          </Link>{" "}
        </Sheet>
      </Sheet>
    </>
  );
}
