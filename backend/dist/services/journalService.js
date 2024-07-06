"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJournal = exports.updateJournal = exports.getJournals = exports.createJournal = void 0;
const JournalEntry_1 = require("../models/JournalEntry");
const createJournal = async (userId, title, content, category, date) => {
    const journal = JournalEntry_1.JournalEntry.create({ userId, title, content, category, date });
    await journal.save();
    return journal;
};
exports.createJournal = createJournal;
const getJournals = async (userId) => {
    return JournalEntry_1.JournalEntry.find({ where: { userId } });
};
exports.getJournals = getJournals;
const updateJournal = async (id, title, content, category, date) => {
    const journal = await JournalEntry_1.JournalEntry.findOne({ where: { id } });
    if (!journal)
        throw new Error('Journal not found');
    journal.title = title;
    journal.content = content;
    journal.category = category;
    journal.date = date;
    await journal.save();
    return journal;
};
exports.updateJournal = updateJournal;
const deleteJournal = async (id) => {
    const journal = await JournalEntry_1.JournalEntry.findOne({ where: { id } });
    if (!journal)
        throw new Error('Journal not found');
    await journal.remove();
    return journal;
};
exports.deleteJournal = deleteJournal;
