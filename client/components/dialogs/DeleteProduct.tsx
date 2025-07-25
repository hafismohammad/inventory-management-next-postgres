import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Box
} from '@mui/material';
import { AlertDialogProps } from '@/interface/inventoryInterface';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const AlertDialog: React.FC<AlertDialogProps> = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <Box display="flex" alignItems="center" gap={1}>
          <DeleteOutlineIcon color="error" />
          <Typography variant="h6" fontWeight="bold">
            Delete Product?
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this product? <br />
          <strong>This action cannot be undone.</strong>
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={onConfirm} variant="contained" color="error" autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
