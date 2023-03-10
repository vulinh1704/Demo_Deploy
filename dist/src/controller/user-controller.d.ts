import { Request, Response } from "express";
declare class UserController {
    register: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: UserController;
export default _default;
