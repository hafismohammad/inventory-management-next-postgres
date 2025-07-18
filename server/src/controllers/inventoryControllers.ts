import { Request, Response, NextFunction } from 'express'
import InventoryService from '../services/inventoryServices'
import { CreateInventorySchema } from '../validations/inventorySchema'

export default class InventoryController {
  constructor(private inventoryService: InventoryService) {}

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log('hit')

    try {
      const result = CreateInventorySchema.safeParse(req.body)

      if (!result.success) {
         res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: result.error.format(),
        })
      }

      // Destructure validated data
      // const { name, quantity, price, description } = result.data

      // const newItem = await this.inventoryService.createInventory({
      //   name,
      //   quantity,
      //   price,
      //   description,
      // })

      res.status(201).json({
        success: true,
        message: 'Inventory item created',
        // data: newItem,
      })
    } catch (error) {
      next(error)
    }
  }
}
