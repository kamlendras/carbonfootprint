import Sheet from "@mui/joy/Sheet";
import Stepper from "../components/private_transport/stepper";
import Button from "@mui/joy/Button";
import Link from "next/link";
import Grid from "@mui/joy/Grid";
import * as React from "react";
import Typography from "@mui/joy/Typography";
import Textarea from "@mui/joy/Textarea";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import Navigation from "../components/private_transport/navigation"
export default function Home() {
  return (
    <>
      <Sheet variant="soft" sx={{ p: 2, borderRadius: "16px" }}>
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
                <span className="nowrap">
                  {" "}
                  <DirectionsCarIcon /> Car 1
                </span>
              </Typography>
            </Grid>

            <Grid xs={12} sm={4}>
              <Textarea
                placeholder="Distance (miles)"
                name="Outlined"
                defaultValue=""
                variant="outlined"
              />
            </Grid>
            <Grid xs={6} sm={4}>
              <Select defaultValue="1" variant="outlined">
                <Option value="1">Small car</Option>
                <Option value="2">Medium car</Option>
                <Option value="3">Large car</Option>
              </Select>
            </Grid>
            <Grid xs={6} sm={4}>
              <Select defaultValue="1" variant="outlined">
                <Option value="1">Petrol</Option>
                <Option value="2">Diesel</Option>
                <Option value="3">Electric</Option>
                <Option value="4">Hybrid</Option>
              </Select>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={12}>
              <Typography level="body-lg">
                <span className="nowrap">
                  {" "}
                  <DirectionsCarIcon /> Car 2
                </span>
              </Typography>
            </Grid>

            <Grid xs={12} sm={4}>
              <Textarea
                placeholder="Distance (miles)"
                name="Outlined"
                defaultValue=""
                variant="outlined"
              />
            </Grid>
            <Grid xs={6} sm={4}>
              <Select defaultValue="1" variant="outlined">
                <Option value="1">Small car</Option>
                <Option value="2">Medium car</Option>
                <Option value="3">Large car</Option>
              </Select>
            </Grid>
            <Grid xs={6} sm={4}>
              <Select defaultValue="1" variant="outlined">
                <Option value="1">Petrol</Option>
                <Option value="2">Diesel</Option>
                <Option value="3">Electric</Option>
                <Option value="4">Hybrid</Option>
              </Select>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={12}>
              <Typography level="body-lg">
                <span className="nowrap">
                  {" "}
                  <DirectionsBikeIcon /> Motorcycle
                </span>
              </Typography>
            </Grid>

            <Grid xs={12} sm={4}>
              <Textarea
                placeholder="Distance (miles)"
                name="Outlined"
                defaultValue=""
                variant="outlined"
              />
            </Grid>
            <Grid xs={6} sm={4}>
              <Select defaultValue="1" variant="outlined">
                <Option value="1">Averange motorcycle</Option>
                <Option value="2">Small motorcycle</Option>
                <Option value="3">Medium motorcycle</Option>
                <Option value="4">Large motorcycle</Option>
              </Select>
            </Grid>
            <Grid xs={6} sm={4}>
              <Select defaultValue="3" variant="outlined">
                <Option value="1">Petrol</Option>
                <Option value="2">Diesel</Option>
                <Option value="3">Electric</Option>
                <Option value="4">Hybrid</Option>
              </Select>
            </Grid>
          </Grid>
        </Sheet>
  <Navigation/>
      </Sheet>
    </>
  );
}
