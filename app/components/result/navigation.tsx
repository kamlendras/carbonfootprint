import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Link from "next/link";

export default function Buttons() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
    <Link href="/expenditure">
      <Button ><NavigateBeforeIcon/>Back</Button>
    </Link>{" "}

    </Box>
  );
}