import { Request, Response } from 'express';
import { createJournal, getJournals, updateJournal, deleteJournal } from '../services/journalService';

export const createJournalEntry = async (req: Request, res: Response) => {
  try {
    const { userId, title, content, category, date } = req.body;
    const journal = await createJournal(userId, title, content, category, date);
    res.status(201).json(journal);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

export const getJournalEntries = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const journals = await getJournals(userId);
    res.status(200).json(journals);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

export const updateJournalEntry = async (req: Request, res: Response) => {
  try {
    const { id, title, content, category, date } = req.body;
    const journal = await updateJournal(id, title, content, category, date);
    res.status(200).json(journal);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

export const deleteJournalEntry = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const journal = await deleteJournal(Number(id));
    res.status(200).json(journal);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};
