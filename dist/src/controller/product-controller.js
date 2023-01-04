"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
class ProductController {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await product_1.Product.find().populate('category', 'name');
            res.status(200).json(products);
        };
        this.save = async (req, res) => {
            let product = req.body;
            product = await product_1.Product.create(product);
            res.status(201).json(product);
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=product-controller.js.map