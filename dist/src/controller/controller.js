"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const contacts_model_1 = require("../schema/contacts.model");
class Controller {
    static async getContacts(req, res) {
        try {
            const contactsList = await contacts_model_1.contacts.find();
            (contactsList.length == 0) ? res.send('there are no contacts') : res.render('contactsList', { contactsList: contactsList });
        }
        catch (error) {
            res.render(error.message);
        }
    }
    static async showAddContact(req, res) {
        try {
            res.render('addContact');
        }
        catch (error) {
            res.render(error.message);
        }
    }
    static async addContact(req, res) {
        try {
            const newContact = new contacts_model_1.contacts(req.body);
            console.log(req.body);
            await newContact.save();
            res.redirect('/home');
        }
        catch (error) {
            res.render(error.message);
        }
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map