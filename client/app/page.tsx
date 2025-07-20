import Link from "next/link"
import { Button, Typography, Box, Container } from "@mui/material"

export default function HomePage() {
  return (
    <Container sx={{ py: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight="bold">
          Inventory
        </Typography>
        <Link href="/new" passHref>
          <Button variant="contained" color="primary">
            Add New Item
          </Button>
        </Link>
      </Box>

      {/* Table or list of items goes here */}
    </Container>
  )
}
