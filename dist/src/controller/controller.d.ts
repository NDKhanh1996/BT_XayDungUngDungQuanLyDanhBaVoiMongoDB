import { Request, Response } from "express";
export declare class Controller {
    static getContacts(req: Request, res: Response): Promise<void>;
    static showAddContact(req: Request, res: Response): Promise<void>;
    static addContact(req: Request, res: Response): Promise<void>;
}
