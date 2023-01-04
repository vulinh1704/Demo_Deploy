import {Request, Response} from "express";
import {Product} from "../model/product";

class ProductController {
    getAll = async (req: Request, res: Response) => {
        let products = await Product.find().populate('category' , 'name');
        res.status(200).json(products)
    }

    save = async (req, res) => {
        let product = req.body;
        product = await Product.create(product);
        res.status(201).json(product);
    }
}
export default new ProductController();