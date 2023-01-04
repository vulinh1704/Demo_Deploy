"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = require("../model/category");
class CategoryController {
    constructor() {
        this.getAll = async (req, res) => {
            let categories = await category_1.Category.find();
            res.status(200).json(categories);
        };
        this.save = async (req, res) => {
            let category = req.body;
            console.log(category);
            category = await category_1.Category.create(category);
            res.status(201).json(category);
        };
    }
}
exports.default = new CategoryController();
//# sourceMappingURL=category-controller.js.map