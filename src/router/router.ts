import { Router } from "express";
const router = Router();
import { Controller } from "../controller/controller";

router.get('/home', Controller.getContacts);
router.get('/add', Controller.showAddContact);
router.post('/add', Controller.addContact);

export default router;