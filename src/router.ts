import { Router } from "express";

export const router = Router();

// LIST CATEGORIES
router.get("/categories", (req, res) => {});

// CREATE CATEGORY
router.post("/categories", (req, res) => {});

// LIST PRODUCTS
router.get("/products", (req, res) => {});

// CREATE PRODUCT
router.post("/products", (req, res) => {});

// GET PRODUCTS BY CATEGORY
router.get("/categories/:categoryId/products", (req, res) => {});

// LIST ORDERS
router.get("/orders", (req, res) => {});

// CREATE ORDER
router.post("/orders", (req, res) => {});

// CHANGE ORDER STATUS
router.patch("/orders/:orderId", (req, res) => {});

// DELETE/CANCEL ORDER
router.delete("/orders/:orderId", (req, res) => {});
