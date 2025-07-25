import { getAllInventory } from '@/services/inventoryServices'
import {useEffect, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { InventoryPayload } from '@/interface/inventoryInterface';

function InventoryTable() {
  const [inventoryData, setInvetnoryData] = useState<InventoryPayload[]>([])

  useEffect(() => {
    const fetchAllInventory = async () => {
     const response = await getAllInventory()
     console.log('all inventory response', response.data);
     setInvetnoryData(response.data)
    }

    fetchAllInventory()
  },[])

  return (
    <TableContainer component={Paper}  sx={{ backgroundColor: '#e1f5fe', p: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
         <TableHead>
            <TableRow>
            <TableCell>Itme Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
         </TableHead>
          <TableBody>
          {inventoryData && inventoryData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">aaa</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
)
}

export default InventoryTable