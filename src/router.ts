import { Router } from "express";
import multer from "multer";
import path from "node:path";
import crypto from "crypto";

import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createProduct } from "./app/useCases/products/createProduct";
import { listProducts } from "./app/useCases/products/listProducts";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${crypto.randomUUID()}.${file.mimetype.split("/")[1]}`);
    },
  }),
});

// CATEGORIES
router.get("/categories", listCategories);
router.post("/categories", createCategory);

// PRODUCTS
router.get("/products", listProducts);
router.post("/products", upload.single("image"), createProduct);
router.get("/categories/:categoryId/products", (req, res) => {});

// ORDERS
router.get("/orders", (req, res) => {});
router.post("/orders", (req, res) => {});
router.patch("/orders/:orderId", (req, res) => {});
router.delete("/orders/:orderId", (req, res) => {});
