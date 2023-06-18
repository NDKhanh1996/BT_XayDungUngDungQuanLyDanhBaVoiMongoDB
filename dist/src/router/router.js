"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const controller_1 = require("../controller/controller");
router.get('/home', controller_1.Controller.getContacts);
router.get('/add', controller_1.Controller.showAddContact);
router.post('/add', controller_1.Controller.addContact);
exports.default = router;
//# sourceMappingURL=router.js.map