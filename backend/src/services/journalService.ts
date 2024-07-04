import { JournalEntry } from '../models/JournalEntry';

export const createJournal = async (userId: number, title: string, content: string, category: string, date: Date) => {
  const journal = JournalEntry.create({ userId, title, content, category, date });
  await journal.save();
  return journal;
};

export const getJournals = async (userId: number) => {
  return JournalEntry.find({ where: { userId } });
};

export const updateJournal = async (id: number, title: string, content: string, category: string, date: Date) => {
  const journal = await JournalEntry.findOne({ where: { id } });
  if (!journal) throw new Error('Journal not found');

  journal.title = title;
  journal.content = content;
  journal.category = category;
  journal.date = date;
  await journal.save();
  return journal;
};

export const deleteJournal = async (id: number) => {
  const journal = await JournalEntry.findOne({ where: { id } });
  if (!journal) throw new Error('Journal not found');

  await journal.remove();
  return journal;
};
