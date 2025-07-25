export interface InventoryFormValues {
  itemName: string
  quantity: number
  price: number
  description: string
}

export interface InventoryPayload {
  id: string; 
  name: string;
  quantity: number;
  price: number;
  description: string;
}