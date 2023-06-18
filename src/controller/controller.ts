import { contacts } from "../schema/contacts.model";
import { Request, Response } from "express";
export class Controller {
    static async getContacts(req: Request, res: Response){
        try {
            const contactsList = await contacts.find();
            (contactsList.length == 0) ? res.send('there are no contacts') : res.render('contactsList', { contactsList: contactsList });
        } catch (error) {
            res.render(error.message);
        }
    }
    static async showAddContact(req: Request, res: Response){
        try {
            res.render('addContact');
        } catch (error) {
            res.render(error.message);
        }
    }
    static async addContact(req: Request, res: Response) {
        try {
            const newContact = new contacts(req.body);
            console.log(req.body);
            await newContact.save();
            res.redirect('/home');
        } catch (error) {
            res.render(error.message);
        }
    }
}