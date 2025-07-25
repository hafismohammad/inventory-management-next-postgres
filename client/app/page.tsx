"use client"

import Link from "next/link"
import { Button, Typography, Box, Container, Paper } from "@mui/material"
import InventoryTable from "@/components/InventoryTable"
import InventoryIcon from '@mui/icons-material/Inventory';

export default function HomePage() {
  return (
     <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ pt:4, borderRadius: 3 ,backgroundColor: '#81d4fa'}} >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4} sx={{px: 2}}>
          <Box display="flex" alignItems="center" gap={1} >
            <InventoryIcon fontSize="large" color="primary" />
            <Typography variant="h5" fontWeight="bold">
              Inventory Management
            </Typography>
          </Box>

          <Link href="/new" passHref>
            <Button variant="contained" color="primary">
              Add New Item
            </Button>
          </Link>
        </Box>

        <InventoryTable />
      </Paper>
    </Container>
  )
}