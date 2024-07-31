import express from "express"
import { deleteProduct, getProduct, getProducts, postProduct, updateProduct } from "../controller/product.controller.js";

const router = express.Router();
export default router;

router.post("/", postProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);