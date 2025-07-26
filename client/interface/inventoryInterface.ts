export interface InventoryFormValues {
  itemName: string
  quantity: number
  price: number
  description: string
}

export interface InventoryPayload { 
  name: string;
  quantity: number;
  price: number;
  description: string;
}

export interface InventoryTableData {
   id: string; 
  name: string;
  quantity: number;
  price: number;
  description: string;
}


export interface AlertDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export interface InventoryEditData {
   id: number; 
  name: string;
  quantity: number;
  price: number;
  description: string;
}
