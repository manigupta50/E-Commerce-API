import { customErrorHandler } from "../../../middlewares/errorHandler.js";
import { ProductsRepository } from "../model/products.repository.js";


export class ProductsController {

    constructor() {
        this.productsRepository = new ProductsRepository();
    };

    async add(req, res) {
        try {
            const { name, quantity } = req.body;
            const newProduct = await this.productsRepository.add(name, quantity);
            if(newProduct) {
                return res.status(201).json({ product: newProduct });
            } else {
                return res.status(404).json({ msg: "Error creating product."});
            }
        } catch(err) {
            console.log(err);
            new customErrorHandler(500, "Something went wrong with controller.");
        }
    };

    async getAll(req, res) {
        try {
            const allProducts = await this.productsRepository.getAll();
            if(allProducts) {
                return res.status(201).json({ products: allProducts });
            } else {
                return res.status(404).json({ msg: "Error fetching product."});
            }
        } catch(err) {
            console.log(err);
            new customErrorHandler(500, "Something went wrong with controller.");
        }
    };

    async delete(req, res) {
        try {
            const id = req.params.id;
            const isDeleted = await this.productsRepository.delete(id);
            if(isDeleted) {
                return res.status(201).json({ message: "Product deleted" });
            } else {
                return res.status(404).json({ message: "Error deleting product."});
            }
        } catch(err) {
            console.log(err);
            new customErrorHandler(500, "Something went wrong with controller.");
        }
    };

    async update(req, res) {
        try {
            const id = req.params.id;
            const quantity = req.query.number;
            const isUpdated = await this.productsRepository.update(id, quantity);
            if(isUpdated) {
                return res.status(201).json({ product: isUpdated, message: "Product updated successfully." });
            } else {
                return res.status(404).json({ message: "Error updating product."});
            }
        } catch(err) {
            console.log(err);
            new customErrorHandler(500, "Something went wrong with controller.");
        }
    };
};