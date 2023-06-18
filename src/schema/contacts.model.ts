import { Schema, model } from "mongoose";

class Contacts {
    name: string;
    address: string;
    mail: string;
    phone: string;

    constructor(name: string, address: string, mail: string, phone: string) {
        this.name = name;
        this.address = address;
        this.mail = mail;
        this.phone = phone;
    }
}

const contactsSchema = new Schema<Contacts>({
    name: String,
    address: String,
    mail: String,
    phone: String
});

export const contacts = model<Contacts>('Contacts', contactsSchema); // this is table