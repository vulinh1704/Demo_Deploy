import { Request, Response } from "express";
declare class ProductController {
    getAll: (req: Request, res: Response) => Promise<void>;
    save: (req: any, res: any) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
