import Sheet from "@mui/joy/Sheet";
import Stepper from "../components/result/stepper";
import Button from "@mui/joy/Button";
import Link from "next/link";
export default function Home() {
  return (
    <Sheet variant="soft" sx={{ m: 10, p: 2, borderRadius: "16px" }}>
      <Stepper />
      <Sheet>
        {" "}
        <Link href="/flights">
          <Button size="lg">Next</Button>
        </Link>{" "}
      </Sheet>
    </Sheet>
  );
}
