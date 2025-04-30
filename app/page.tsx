import Sheet from "@mui/joy/Sheet";
import Stepper from "./components/home/stepper";
import Button from "@mui/joy/Button";
import Link from "next/link";
import Grid from "@mui/joy/Grid";
import * as React from "react";
import Typography from "@mui/joy/Typography";
import Textarea from "@mui/joy/Textarea";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
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
            <Grid xs={4}>
              <Typography level="body-lg">Electricity</Typography>
            </Grid>

            <Grid xs={4}>
              <Textarea
                placeholder="Amount"
                name="Outlined"
                defaultValue=""
                variant="outlined"
              />
            </Grid>
            <Grid xs={4}>
              <Select defaultValue="1" variant="outlined">
                <Option value="1">kWh</Option>
              </Select>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={4}>
              <Typography level="body-lg"><span className="nowrap">Natural Gas</span></Typography>
            </Grid>

            <Grid xs={4}>
              <Textarea
                placeholder="Amount"
                name="Outlined"
                defaultValue=""
                variant="outlined"
              />
            </Grid>
            <Grid xs={4}>
              <Select defaultValue="1" variant="outlined">
                <Option value="1">kWh</Option>
                <Option value="2">kg</Option>
                <Option value="3">
                  <p>
                    m<sup>3</sup>
                  </p>
                </Option>
              </Select>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={4}>
              <Typography level="body-lg">Biomass</Typography>
            </Grid>

            <Grid xs={4}>
              <Textarea
                placeholder="Amount"
                name="Outlined"
                defaultValue=""
                variant="outlined"
              />
            </Grid>
            <Grid xs={4}>
              <Select defaultValue="2" variant="outlined">
                <Option value="1">kWh</Option>
                <Option value="2">kg</Option>
              </Select>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={4}>
              <Typography level="body-lg">Coal</Typography>
            </Grid>

            <Grid xs={4}>
              <Textarea
                placeholder="Amount"
                name="Outlined"
                defaultValue=""
                variant="outlined"
              />
            </Grid>
            <Grid xs={4}>
              <Select defaultValue="2" variant="outlined">
                <Option value="1">kWh</Option>
                <Option value="2">kg</Option>
              </Select>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={4}>
              <Typography level="body-lg"><span className="nowrap">Heating Oil</span></Typography>
            </Grid>

            <Grid xs={4}>
              <Textarea
                placeholder="Amount"
                name="Outlined"
                defaultValue=""
                variant="outlined"
              />
            </Grid>
            <Grid xs={4}>
              <Select defaultValue="3" variant="outlined">
                <Option value="1">kWh</Option>
                <Option value="2">kg</Option>
                <Option value="3">litres</Option>
              </Select>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={4}>
              <Typography level="body-lg">LPG</Typography>
            </Grid>

            <Grid xs={4}>
              <Textarea
                placeholder="Amount"
                name="Outlined"
                defaultValue=""
                variant="outlined"
              />
            </Grid>
            <Grid xs={4}>
              <Select defaultValue="2" variant="outlined">
                <Option value="1">kWh</Option>
                <Option value="2">kg</Option>
                <Option value="3">litres</Option>
              </Select>
            </Grid>
          </Grid>
        </Sheet>
        <Sheet>
          {" "}
          <Link href="/private_transport">
            <Button size="lg">Next</Button>
          </Link>{" "}
        </Sheet>
      </Sheet>
    </>
  );
}
