import express from "express";
import { ProductsController } from "../controller/products.controller.js";

const productsController = new ProductsController();

const router = express.Router();

router.route('/create').post((req, res) => {
    productsController.add(req, res)
});
router.route('/').get((req, res) => {
    productsController.getAll(req, res)
});
router.route('/:id').delete((req, res) => {
    productsController.delete(req, res)
});
router.route('/:id/update_quantity').post((req, res) => {
    productsController.update(req, res)
});

export default router;