import { deleteInventory, getAllInventory } from '@/services/inventoryServices'
import {useEffect, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { InventoryTableData } from '@/interface/inventoryInterface';
import { AlertDialog } from './dialogs/DeleteProduct';



function InventoryTable() {
  const [inventoryData, setInvetnoryData] = useState<InventoryTableData[]>([])
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  useEffect(() => {
    const fetchAllInventory = async () => {
     const response = await getAllInventory()
    //  console.log('all inventory response', response.data);
     setInvetnoryData(response.data)
    }

    fetchAllInventory()
  },[])

  const handleDelete = async (id: string) => {

    setSelectedId(id)
    setOpenDialog(true)
    
  }

    const handleConfirmDelete = async () => {
    if (selectedId) {
     const response =  await deleteInventory(selectedId)
     console.log('jhit func1');
     
     if(response.status == 200) {
      
       const updatedInventory = await getAllInventory()
      setInvetnoryData(updatedInventory.data)
       setOpenDialog(false)
       setSelectedId(null)
     }
    }
  }

    const handleCloseDialog = () => {
    setOpenDialog(false)
    setSelectedId(null)
  }



  return (
   <>
    <TableContainer component={Paper}  sx={{ backgroundColor: '#fafafa', p: 2 }} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
         <TableHead>
            <TableRow>
            <TableCell>Item Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell >Description</TableCell>
            <TableCell >Action</TableCell>
          </TableRow>
         </TableHead>
          <TableBody>
          {inventoryData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell >{row.description}</TableCell>
              <TableCell >
                <Box display='flex' gap={1}>
                  <IconButton
                  aria-label='edit'
                  color='primary'
                  // onClick={}
                  >
                     <EditIcon />
                  </IconButton>
                  <IconButton
                  onClick={() => handleDelete(row.id)}
                  aria-label='delete'
                  color='error'
                  >
                     <DeleteIcon />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      <AlertDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmDelete}
      />
   </>

)
}

export default InventoryTable