import { InventoryPayload } from "@/interface/inventoryInterface";
import api from "@/lib/api";

export const postInventory = async (data: InventoryPayload) => {
    const response = await api.post('api/inventories', data)
    return response
}

