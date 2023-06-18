"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contacts = void 0;
const mongoose_1 = require("mongoose");
class Contacts {
    constructor(name, address, mail, phone) {
        this.name = name;
        this.address = address;
        this.mail = mail;
        this.phone = phone;
    }
}
const contactsSchema = new mongoose_1.Schema({
    name: String,
    address: String,
    mail: String,
    phone: String
});
exports.contacts = (0, mongoose_1.model)('Contacts', contactsSchema);
//# sourceMappingURL=contacts.model.js.map