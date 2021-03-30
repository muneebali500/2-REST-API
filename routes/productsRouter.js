import express from "express";
import {
  getProducts,
  addProduct,
  getProductByID,
  removeProduct,
  updateProduct,
} from "../controllers/products.js";

const router = express.Router();

router.get(`/`, getProducts);
router.post(`/`, addProduct);
router.get(`/:id`, getProductByID);
router.delete(`/:id`, removeProduct);
router.patch(`/:id`, updateProduct);

export default router;
