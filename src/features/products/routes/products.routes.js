import express from "express";
import { ProductsController } from "../controller/products.controller.js";

const productsController = new ProductsController();

const router = express.Router();

// Route for creating a product
router.route('/create').post((req, res) => {
    productsController.add(req, res)
});

// Route for fetching all products
router.route('/').get((req, res) => {
    productsController.getAll(req, res)
});

// Route for deleting a product
router.route('/:id').delete((req, res) => {
    productsController.delete(req, res)
});

// Route for updating a product
router.route('/:id/update_quantity').post((req, res) => {
    productsController.update(req, res)
});

export default router;