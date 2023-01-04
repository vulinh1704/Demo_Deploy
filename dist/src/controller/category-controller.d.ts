import { Request, Response } from "express";
declare class CategoryController {
    getAll: (req: Request, res: Response) => Promise<void>;
    save: (req: any, res: any) => Promise<void>;
}
declare const _default: CategoryController;
export default _default;
