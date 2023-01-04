import {Request, Response} from "express";
import bcrypt from "bcrypt";
import {User} from "../model/user";
import jwt from 'jsonwebtoken';
import {SECRET} from "../middleware/auth";

class UserController {
    register = async (req: Request, res: Response) => {
        let user = req.body;
        user.password = await bcrypt.hash(user.password, 10);
        user = await User.create(user);
        res.status(201).json(user);
    }

    login = async (req: Request, res: Response) => {
        let user = req.body;
        let userFind = await User.findOne({
            username: user.username
        });
        if (!user) {
            return res.status(202).json({
                message: 'Username is not exits'
            })
        } else {
            let comparePassword = await bcrypt.compare(user.password, userFind.password)
            if (!comparePassword) {
                return res.status(202).json({
                    message: 'Password is wrong'
                })
            } else {
                let payload = {
                    username: userFind.username
                }

                let token = await jwt.sign(payload, SECRET, {
                    expiresIn: 36000
                });
                res.status(200).json({
                    token: token
                })
            }
        }
    }

}

export default new UserController();