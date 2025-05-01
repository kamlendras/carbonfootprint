import Sheet from "@mui/joy/Sheet";
import Stepper from "../components/public_transport/stepper";
import Button from "@mui/joy/Button";
import Link from "next/link";
import Grid from "@mui/joy/Grid";
import * as React from "react";
import Typography from "@mui/joy/Typography";
import Textarea from "@mui/joy/Textarea";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import Navigation from "../components/public_transport/navigation"
export default function Home() {
  return (
    <>
      <Sheet variant="soft" sx={{ p: 2, borderRadius: "16px" }} className="sheet">
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
            <Grid xs={12} md={4}>
              <Typography level="body-lg">
              <span className="nowrap"><DirectionsBusIcon />
                Bus/Coach</span>
              </Typography>
            </Grid>

            <Grid xs={12} md={4}>
              <Textarea
                placeholder="Distance (miles)"
                name="Outlined"
                defaultValue=""
                variant="outlined"
              />
            </Grid>
            <Grid xs={12} md={4}>
              <Select defaultValue="1" variant="outlined">
                <Option value="1">Averange local bus</Option>
                <Option value="2">Coach</Option>
                <Option value="3">Landon bus</Option>
              </Select>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={12} md={4}>
              <Typography level="body-lg">
              <span className="nowrap">    <DirectionsTransitIcon /> Train</span>
              </Typography>
            </Grid>

            <Grid xs={12} md={4}>
              <Textarea
                placeholder="Distance (miles)"
                name="Outlined"
                defaultValue=""
                variant="outlined"
              />
            </Grid>
            <Grid xs={12} md={4}>
              <Select defaultValue="1" variant="outlined">
                <Option value="1">National rail</Option>
                <Option value="2">Light rail and tram</Option>
                <Option value="3">International rail</Option>
                <Option value="4">Landon Underground</Option>
              </Select>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={12} md={4}>
              <Typography level="body-lg">
              <span className="nowrap">        <DirectionsBoatIcon /> Ferry{" "}</span>
              </Typography>
            </Grid>

            <Grid xs={12} md={4}>
              <Textarea
                placeholder="Distance (miles)"
                name="Outlined"
                defaultValue=""
                variant="outlined"
              />
            </Grid>
            <Grid xs={12} md={4}>
              <Select defaultValue="1" variant="outlined">
                <Option value="1">Foot passenger</Option>
                <Option value="2">Car passenger</Option>
              </Select>
            </Grid>
          </Grid>
        </Sheet>
  <Navigation/>
      </Sheet>
    </>
  );
}
