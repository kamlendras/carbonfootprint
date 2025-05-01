import Sheet from "@mui/joy/Sheet";
import Stepper from "../components/result/stepper";
import Button from "@mui/joy/Button";
import Link from "next/link";
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import Navigation from "../components/result/navigation"
export default function Home() {
  return (
    <Sheet variant="soft" sx={{ p: 2, borderRadius: "16px" }}>
      <Stepper />
      
      <Stack
  direction="column"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
>
      <Typography level="h3">Your Total Carbon Footprint:</Typography> <Typography level="h1" color="danger">1.564 metric tons of CO2e</Typography> 
      <Typography level="h4">Private Transport: <Typography level="h2" color="warning">0.97 metric tons of CO2e</Typography> </Typography>
      <Typography level="h4">Public Transport: <Typography level="h2" color="warning">0.47 metric tons of CO2e</Typography> </Typography>
      <Typography level="h4">Flights: <Typography level="h2" color="success">0.067 metric tons of CO2e</Typography> </Typography>
      <Typography level="h4">Food: <Typography level="h2" color="success">0.09 metric tons of CO2e</Typography> </Typography>
      <Typography level="h4">Expenditure: <Typography level="h2" color="success">0.014 metric tons of CO2e</Typography> </Typography></Stack>
        <Navigation/>
    </Sheet>
  );
}
