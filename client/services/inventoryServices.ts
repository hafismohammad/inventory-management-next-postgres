import { InventoryPayload } from "@/interface/inventoryInterface";
import api from "@/lib/api";

export const postInventory = async (data: InventoryPayload) => {
    const response = await api.post('api/inventories', data)
    return response
}

export const getAllInventory = async () => {
    const response = await api.get('api/inventories')
    // console.log('all inveotory', response);
    
    return response
}

export const deleteInventory = async (product_id: string) => {
    const response = await api.delete(`api/delete-inventories/${product_id}`)
    return response
}

export const updateInventory = async (product_id: string, updatedProduct: InventoryPayload) => {
    const response = await api.put(`api/update-inventories`, {product_id, updatedProduct})
    return response
}