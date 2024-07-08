import express from 'express';
import 'dotenv/config';
import { connectDB } from './utils/db';
import authRoutes from './routes/authRoutes';
import journalRoutes from './routes/journalRoutes';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/journals', journalRoutes);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database', error);
    process.exit(1);
  }
};

startServer();
