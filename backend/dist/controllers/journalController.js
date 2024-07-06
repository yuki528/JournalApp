"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJournalEntry = exports.updateJournalEntry = exports.getJournalEntries = exports.createJournalEntry = void 0;
const journalService_1 = require("../services/journalService");
const createJournalEntry = async (req, res) => {
    try {
        const { userId, title, content, category, date } = req.body;
        const journal = await (0, journalService_1.createJournal)(userId, title, content, category, date);
        res.status(201).json(journal);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.createJournalEntry = createJournalEntry;
const getJournalEntries = async (req, res) => {
    try {
        const userId = Number(req.params.userId);
        const journals = await (0, journalService_1.getJournals)(userId);
        res.status(200).json(journals);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.getJournalEntries = getJournalEntries;
const updateJournalEntry = async (req, res) => {
    try {
        const { id, title, content, category, date } = req.body;
        const journal = await (0, journalService_1.updateJournal)(id, title, content, category, date);
        res.status(200).json(journal);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.updateJournalEntry = updateJournalEntry;
const deleteJournalEntry = async (req, res) => {
    try {
        const { id } = req.params;
        const journal = await (0, journalService_1.deleteJournal)(Number(id));
        res.status(200).json(journal);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
};
exports.deleteJournalEntry = deleteJournalEntry;
