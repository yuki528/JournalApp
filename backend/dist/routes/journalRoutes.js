"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const journalController_1 = require("../controllers/journalController");
const authMiddlewares_1 = require("../middlewares/authMiddlewares");
const router = (0, express_1.Router)();
router.post('/', authMiddlewares_1.authMiddleware, journalController_1.createJournalEntry);
router.get('/:userId', authMiddlewares_1.authMiddleware, journalController_1.getJournalEntries);
router.put('/:id', authMiddlewares_1.authMiddleware, journalController_1.updateJournalEntry);
router.delete('/:id', authMiddlewares_1.authMiddleware, journalController_1.deleteJournalEntry);
exports.default = router;
