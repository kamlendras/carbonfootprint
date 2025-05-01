import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Link from "next/link";

export default function Buttons() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
    <Link href="/public_transport">
      <Button ><NavigateBeforeIcon/>Back</Button>
    </Link>{" "}
    <Link href="/food">
      <Button >Next<NavigateNextIcon/></Button>
    </Link>
    </Box>
  );
}