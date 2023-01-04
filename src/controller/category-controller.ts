import {Request, Response} from "express";
import {Category} from "../model/category";

class CategoryController {
    getAll = async (req: Request, res: Response) => {
        let categories = await Category.find();
        res.status(200).json(categories)
    }

    save = async (req, res) => {
        let category = req.body;
        console.log(category);
        category = await Category.create(category);
        res.status(201).json(category);
    }
}
export default new CategoryController();