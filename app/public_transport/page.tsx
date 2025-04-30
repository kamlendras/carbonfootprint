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
export default function Home() {
  return (
    <>
      <Sheet variant="soft" sx={{ m: 10, p: 2, borderRadius: "16px" }}>
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
            <Grid xs={2}>
              <Typography level="body-lg">
                <DirectionsBusIcon />
                Bus/Coach
              </Typography>
            </Grid>

            <Grid xs={2}>
              <Textarea
                placeholder="Distance (miles)"
                name="Outlined"
                defaultValue=""
                variant="outlined"
              />
            </Grid>
            <Grid xs={2}>
              <Select defaultValue="1" variant="outlined">
                <Option value="1">Averange local bus</Option>
                <Option value="2">Coach</Option>
                <Option value="3">Landon bus</Option>
              </Select>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={2}>
              <Typography level="body-lg">
                <DirectionsTransitIcon /> Train
              </Typography>
            </Grid>

            <Grid xs={2}>
              <Textarea
                placeholder="Distance (miles)"
                name="Outlined"
                defaultValue=""
                variant="outlined"
              />
            </Grid>
            <Grid xs={2}>
              <Select defaultValue="1" variant="outlined">
                <Option value="1">National rail</Option>
                <Option value="2">Light rail and tram</Option>
                <Option value="3">International rail</Option>
                <Option value="4">Landon Underground</Option>
              </Select>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={2}>
              <Typography level="body-lg">
                <DirectionsBoatIcon /> Ferry{" "}
              </Typography>
            </Grid>

            <Grid xs={2}>
              <Textarea
                placeholder="Distance (miles)"
                name="Outlined"
                defaultValue=""
                variant="outlined"
              />
            </Grid>
            <Grid xs={2}>
              <Select defaultValue="1" variant="outlined">
                <Option value="1">Foot passenger</Option>
                <Option value="2">Car passenger</Option>
              </Select>
            </Grid>
          </Grid>
        </Sheet>
        <Sheet>
          {" "}
          <Link href="/flights">
            <Button size="lg">Next</Button>
          </Link>{" "}
        </Sheet>
      </Sheet>
    </>
  );
}
