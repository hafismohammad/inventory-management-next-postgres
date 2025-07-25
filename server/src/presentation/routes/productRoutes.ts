import { Router } from "express";
import { getAllProducts, createProduct, deleteProduct } from "../controllers/productController";

const router = Router();

router.get("/inventories", getAllProducts);
router.post("/inventories", createProduct);
router.delete("/delete-inventories/:product_id", deleteProduct)

export default router;
