import { Router } from 'express';
import { createJournalEntry, getJournalEntries, updateJournalEntry, deleteJournalEntry } from '../controllers/journalController';
import { authMiddleware } from '../middlewares/authMiddlewares';

const router = Router();

router.post('/', authMiddleware, createJournalEntry);
router.get('/:userId', authMiddleware, getJournalEntries);
router.put('/:id', authMiddleware, updateJournalEntry);
router.delete('/:id', authMiddleware, deleteJournalEntry);

export default router;
