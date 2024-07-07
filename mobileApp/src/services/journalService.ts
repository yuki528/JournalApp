import { REACT_APP_API_URL } from '@env';

interface JournalEntry {
  id: number;
  title: string;
  content: string;
  category: string;
  date: string;
}

const journalService = {
  getAllEntries: async (): Promise<JournalEntry[]> => {
    try {
      const response = await fetch(`${REACT_APP_API_URL}/journal`);
      if (!response.ok) {
        throw new Error('Failed to fetch journal entries');
      }
      const data = await response.json();
      return data.entries;
    } catch (error) {
      console.error('Failed to fetch journal entries:', error);
      return [];
    }
  },

  getEntryById: async (id: number): Promise<JournalEntry | null> => {
    try {
      const response = await fetch(`${REACT_APP_API_URL}/journal/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch journal entry');
      }
      const data = await response.json();
      return data.entry;
    } catch (error) {
      console.error(`Failed to fetch journal entry ${id}:`, error);
      return null;
    }
  },

  addEntry: async (entry: Omit<JournalEntry, 'id'>): Promise<boolean> => {
    try {
      const response = await fetch(`${REACT_APP_API_URL}/journal`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry),
      });

      return response.ok;
    } catch (error) {
      console.error('Failed to add journal entry:', error);
      return false;
    }
  },

  updateEntry: async (id: number, entry: Partial<JournalEntry>): Promise<boolean> => {
    try {
      const response = await fetch(`${REACT_APP_API_URL}/journal/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry),
      });

      return response.ok;
    } catch (error) {
      console.error(`Failed to update journal entry ${id}:`, error);
      return false;
    }
  },

  deleteEntry: async (id: number): Promise<boolean> => {
    try {
      const response = await fetch(`${REACT_APP_API_URL}/journal/${id}`, {
        method: 'DELETE',
      });

      return response.ok;
    } catch (error) {
      console.error(`Failed to delete journal entry ${id}:`, error);
      return false;
    }
  },
};

export default journalService;
