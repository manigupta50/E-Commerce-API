import { ProductsModel } from "./products.schema.js";


export class ProductsRepository {

    async add(name, quantity) {
        try {
            const newProduct = new ProductsModel({ name, quantity });
            await newProduct.save();
            if(newProduct) {
                return newProduct;
            } else {
                return null;
            }
        } catch(err) {
            console.log(err);
            new customErrorHandler(500, "Something went wrong with repository.");
        }
    };

    async getAll() {
        try {
            const allProducts = await ProductsModel.find();
            return allProducts;
        } catch(err) {
            console.log(err);
            new customErrorHandler(500, "Something went wrong with repository.");
        }
    };

    async delete(id) {
        try {
            const isDeleted = await ProductsModel.deleteOne({ _id: id });
            return isDeleted;
        } catch(err) {
            console.log(err);
            new customErrorHandler(500, "Something went wrong with repository.");  
        }
    };

    async update(id, quantity) {
        try {
            const updatedProduct = await ProductsModel.findOneAndUpdate({ _id: id }, { quantity: quantity }, { new: true });
            await updatedProduct.save();
            if(updatedProduct) {
                return updatedProduct;
            } else {
                return null;
            }
        } catch(err) {
            console.log(err);
            new customErrorHandler(500, "Something went wrong with repository.");  
        }
    };

};