"use client";
import Sheet from "@mui/joy/Sheet";
import Stepper from "../components/expenditure/stepper";
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
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import Navigation from "../components/expenditure/navigation"

export default function Home() {
  const [currency, setCurrency] = React.useState("dollar");
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
            <Grid xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Eating Out</FormLabel>
                <Input
                  placeholder="Amount"
                  startDecorator={
                    { inr: " ₹", dollar: "$", eur: "€", yen: "¥" }[currency]
                  }
                  endDecorator={
                    <React.Fragment>
                      <Divider orientation="vertical" />
                      <Select
                        variant="plain"
                        value={currency}
                        onChange={(_, value) => setCurrency(value!)}
                        slotProps={{
                          listbox: {
                            variant: "outlined",
                          },
                        }}
                        sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                      >
                        <Option value="dollar">USD</Option>
                        <Option value="eur">EUR</Option>
                        <Option value="yen">YEN</Option>
                        <Option value="inr">INR</Option>
                      </Select>
                    </React.Fragment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Car Maintenance </FormLabel>
                <Input
                  placeholder="Amount"
                  startDecorator={
                    { inr: " ₹", dollar: "$", eur: "€", yen: "¥" }[currency]
                  }
                  endDecorator={
                    <React.Fragment>
                      <Divider orientation="vertical" />
                      <Select
                        variant="plain"
                        value={currency}
                        onChange={(_, value) => setCurrency(value!)}
                        slotProps={{
                          listbox: {
                            variant: "outlined",
                          },
                        }}
                        sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                      >
                        <Option value="dollar">USD</Option>
                        <Option value="eur">EUR</Option>
                        <Option value="yen">YEN</Option>
                        <Option value="inr">INR</Option>
                      </Select>
                    </React.Fragment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Clothing</FormLabel>
                <Input
                  placeholder="Amount"
                  startDecorator={
                    { inr: " ₹", dollar: "$", eur: "€", yen: "¥" }[currency]
                  }
                  endDecorator={
                    <React.Fragment>
                      <Divider orientation="vertical" />
                      <Select
                        variant="plain"
                        value={currency}
                        onChange={(_, value) => setCurrency(value!)}
                        slotProps={{
                          listbox: {
                            variant: "outlined",
                          },
                        }}
                        sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                      >
                        <Option value="dollar">USD</Option>
                        <Option value="eur">EUR</Option>
                        <Option value="yen">YEN</Option>
                        <Option value="inr">INR</Option>
                      </Select>
                    </React.Fragment>
                  }
                />
              </FormControl>
            </Grid>
         
            <Grid xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Furniture</FormLabel>
                <Input
                  placeholder="Amount"
                  startDecorator={
                    { inr: " ₹", dollar: "$", eur: "€", yen: "¥" }[currency]
                  }
                  endDecorator={
                    <React.Fragment>
                      <Divider orientation="vertical" />
                      <Select
                        variant="plain"
                        value={currency}
                        onChange={(_, value) => setCurrency(value!)}
                        slotProps={{
                          listbox: {
                            variant: "outlined",
                          },
                        }}
                        sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                      >
                        <Option value="dollar">USD</Option>
                        <Option value="eur">EUR</Option>
                        <Option value="yen">YEN</Option>
                        <Option value="inr">INR</Option>
                      </Select>
                    </React.Fragment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Domestic Water </FormLabel>
                <Input
                  placeholder="Amount"
                  startDecorator={
                    { inr: " ₹", dollar: "$", eur: "€", yen: "¥" }[currency]
                  }
                  endDecorator={
                    <React.Fragment>
                      <Divider orientation="vertical" />
                      <Select
                        variant="plain"
                        value={currency}
                        onChange={(_, value) => setCurrency(value!)}
                        slotProps={{
                          listbox: {
                            variant: "outlined",
                          },
                        }}
                        sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                      >
                        <Option value="dollar">USD</Option>
                        <Option value="eur">EUR</Option>
                        <Option value="yen">YEN</Option>
                        <Option value="inr">INR</Option>
                      </Select>
                    </React.Fragment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Telephone & Internet </FormLabel>
                <Input
                  placeholder="Amount"
                  startDecorator={
                    { inr: " ₹", dollar: "$", eur: "€", yen: "¥" }[currency]
                  }
                  endDecorator={
                    <React.Fragment>
                      <Divider orientation="vertical" />
                      <Select
                        variant="plain"
                        value={currency}
                        onChange={(_, value) => setCurrency(value!)}
                        slotProps={{
                          listbox: {
                            variant: "outlined",
                          },
                        }}
                        sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                      >
                        <Option value="dollar">USD</Option>
                        <Option value="eur">EUR</Option>
                        <Option value="yen">YEN</Option>
                        <Option value="inr">INR</Option>
                      </Select>
                    </React.Fragment>
                  }
                />
              </FormControl>
            </Grid>
      
            <Grid xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Computers & Electronics</FormLabel>
                <Input
                  placeholder="Amount"
                  startDecorator={
                    { inr: " ₹", dollar: "$", eur: "€", yen: "¥" }[currency]
                  }
                  endDecorator={
                    <React.Fragment>
                      <Divider orientation="vertical" />
                      <Select
                        variant="plain"
                        value={currency}
                        onChange={(_, value) => setCurrency(value!)}
                        slotProps={{
                          listbox: {
                            variant: "outlined",
                          },
                        }}
                        sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                      >
                        <Option value="dollar">USD</Option>
                        <Option value="eur">EUR</Option>
                        <Option value="yen">YEN</Option>
                        <Option value="inr">INR</Option>
                      </Select>
                    </React.Fragment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Electrical Appliances </FormLabel>
                <Input
                  placeholder="Amount"
                  startDecorator={
                    { inr: " ₹", dollar: "$", eur: "€", yen: "¥" }[currency]
                  }
                  endDecorator={
                    <React.Fragment>
                      <Divider orientation="vertical" />
                      <Select
                        variant="plain"
                        value={currency}
                        onChange={(_, value) => setCurrency(value!)}
                        slotProps={{
                          listbox: {
                            variant: "outlined",
                          },
                        }}
                        sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                      >
                        <Option value="dollar">USD</Option>
                        <Option value="eur">EUR</Option>
                        <Option value="yen">YEN</Option>
                        <Option value="inr">INR</Option>
                      </Select>
                    </React.Fragment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Postage & Couriers</FormLabel>
                <Input
                  placeholder="Amount"
                  startDecorator={
                    { inr: " ₹", dollar: "$", eur: "€", yen: "¥" }[currency]
                  }
                  endDecorator={
                    <React.Fragment>
                      <Divider orientation="vertical" />
                      <Select
                        variant="plain"
                        value={currency}
                        onChange={(_, value) => setCurrency(value!)}
                        slotProps={{
                          listbox: {
                            variant: "outlined",
                          },
                        }}
                        sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                      >
                        <Option value="dollar">USD</Option>
                        <Option value="eur">EUR</Option>
                        <Option value="yen">YEN</Option>
                        <Option value="inr">INR</Option>
                      </Select>
                    </React.Fragment>
                  }
                />
              </FormControl>
            </Grid>
       
            <Grid xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Magazines & Books</FormLabel>
                <Input
                  placeholder="Amount"
                  startDecorator={
                    { inr: " ₹", dollar: "$", eur: "€", yen: "¥" }[currency]
                  }
                  endDecorator={
                    <React.Fragment>
                      <Divider orientation="vertical" />
                      <Select
                        variant="plain"
                        value={currency}
                        onChange={(_, value) => setCurrency(value!)}
                        slotProps={{
                          listbox: {
                            variant: "outlined",
                          },
                        }}
                        sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                      >
                        <Option value="dollar">USD</Option>
                        <Option value="eur">EUR</Option>
                        <Option value="yen">YEN</Option>
                        <Option value="inr">INR</Option>
                      </Select>
                    </React.Fragment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Stationery </FormLabel>
                <Input
                  placeholder="Amount"
                  startDecorator={
                    { inr: " ₹", dollar: "$", eur: "€", yen: "¥" }[currency]
                  }
                  endDecorator={
                    <React.Fragment>
                      <Divider orientation="vertical" />
                      <Select
                        variant="plain"
                        value={currency}
                        onChange={(_, value) => setCurrency(value!)}
                        slotProps={{
                          listbox: {
                            variant: "outlined",
                          },
                        }}
                        sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                      >
                        <Option value="dollar">USD</Option>
                        <Option value="eur">EUR</Option>
                        <Option value="yen">YEN</Option>
                        <Option value="inr">INR</Option>
                      </Select>
                    </React.Fragment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Cleaning Products</FormLabel>
                <Input
                  placeholder="Amount"
                  startDecorator={
                    { inr: " ₹", dollar: "$", eur: "€", yen: "¥" }[currency]
                  }
                  endDecorator={
                    <React.Fragment>
                      <Divider orientation="vertical" />
                      <Select
                        variant="plain"
                        value={currency}
                        onChange={(_, value) => setCurrency(value!)}
                        slotProps={{
                          listbox: {
                            variant: "outlined",
                          },
                        }}
                        sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                      >
                        <Option value="dollar">USD</Option>
                        <Option value="eur">EUR</Option>
                        <Option value="yen">YEN</Option>
                        <Option value="inr">INR</Option>
                      </Select>
                    </React.Fragment>
                  }
                />
              </FormControl>
            </Grid>
   
            <Grid xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Hair & Self-care </FormLabel>
                <Input
                  placeholder="Amount"
                  startDecorator={
                    { inr: " ₹", dollar: "$", eur: "€", yen: "¥" }[currency]
                  }
                  endDecorator={
                    <React.Fragment>
                      <Divider orientation="vertical" />
                      <Select
                        variant="plain"
                        value={currency}
                        onChange={(_, value) => setCurrency(value!)}
                        slotProps={{
                          listbox: {
                            variant: "outlined",
                          },
                        }}
                        sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                      >
                        <Option value="dollar">USD</Option>
                        <Option value="eur">EUR</Option>
                        <Option value="yen">YEN</Option>
                        <Option value="inr">INR</Option>
                      </Select>
                    </React.Fragment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Pet Food</FormLabel>
                <Input
                  placeholder="Amount"
                  startDecorator={
                    { inr: " ₹", dollar: "$", eur: "€", yen: "¥" }[currency]
                  }
                  endDecorator={
                    <React.Fragment>
                      <Divider orientation="vertical" />
                      <Select
                        variant="plain"
                        value={currency}
                        onChange={(_, value) => setCurrency(value!)}
                        slotProps={{
                          listbox: {
                            variant: "outlined",
                          },
                        }}
                        sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                      >
                        <Option value="dollar">USD</Option>
                        <Option value="eur">EUR</Option>
                        <Option value="yen">YEN</Option>
                        <Option value="inr">INR</Option>
                      </Select>
                    </React.Fragment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Hotel Stays</FormLabel>
                <Input
                  placeholder="Amount"
                  startDecorator={
                    { inr: " ₹", dollar: "$", eur: "€", yen: "¥" }[currency]
                  }
                  endDecorator={
                    <React.Fragment>
                      <Divider orientation="vertical" />
                      <Select
                        variant="plain"
                        value={currency}
                        onChange={(_, value) => setCurrency(value!)}
                        slotProps={{
                          listbox: {
                            variant: "outlined",
                          },
                        }}
                        sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                      >
                        <Option value="dollar">USD</Option>
                        <Option value="eur">EUR</Option>
                        <Option value="yen">YEN</Option>
                        <Option value="inr">INR</Option>
                      </Select>
                    </React.Fragment>
                  }
                />
              </FormControl>
            </Grid>
     
            <Grid xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Insurance </FormLabel>
                <Input
                  placeholder="Amount"
                  startDecorator={
                    { inr: " ₹", dollar: "$", eur: "€", yen: "¥" }[currency]
                  }
                  endDecorator={
                    <React.Fragment>
                      <Divider orientation="vertical" />
                      <Select
                        variant="plain"
                        value={currency}
                        onChange={(_, value) => setCurrency(value!)}
                        slotProps={{
                          listbox: {
                            variant: "outlined",
                          },
                        }}
                        sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                      >
                        <Option value="dollar">USD</Option>
                        <Option value="eur">EUR</Option>
                        <Option value="yen">YEN</Option>
                        <Option value="inr">INR</Option>
                      </Select>
                    </React.Fragment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <FormControl>
                <FormLabel> Other Legal Services</FormLabel>
                <Input
                  placeholder="Amount"
                  startDecorator={
                    { inr: " ₹", dollar: "$", eur: "€", yen: "¥" }[currency]
                  }
                  endDecorator={
                    <React.Fragment>
                      <Divider orientation="vertical" />
                      <Select
                        variant="plain"
                        value={currency}
                        onChange={(_, value) => setCurrency(value!)}
                        slotProps={{
                          listbox: {
                            variant: "outlined",
                          },
                        }}
                        sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                      >
                        <Option value="dollar">USD</Option>
                        <Option value="eur">EUR</Option>
                        <Option value="yen">YEN</Option>
                        <Option value="inr">INR</Option>
                      </Select>
                    </React.Fragment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
        </Sheet>
        <Navigation/>
      </Sheet>
    </>
  );
}
