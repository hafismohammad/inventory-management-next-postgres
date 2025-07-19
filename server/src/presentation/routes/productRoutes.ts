import { Router } from "express";
import { getAllProducts, createProduct } from "../controllers/productController";

const router = Router();

router.get("/inventories", getAllProducts);
router.post("/inventories", createProduct);

export default router;
