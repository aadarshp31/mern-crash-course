import express from 'express';
import { getByIdProduct, updateProduct, postProduct, getAllProduct, deleteProduct } from '../controller/product.controller.js'


const router = express.Router()

router.get("/:id", getByIdProduct);

router.get("/", getAllProduct)

router.post("/", postProduct)

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export const productRouter = router;


