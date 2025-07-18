import express from 'express'
import InventoryController from '../controllers/inventoryControllers'
import InventoryService from '../services/inventoryServices'

const router = express.Router()

const inventoryService = new InventoryService()
const inventoryController = new InventoryController(inventoryService)

router.post('/inventories', inventoryController.create)

export default router
