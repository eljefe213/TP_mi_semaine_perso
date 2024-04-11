import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { taskRouter } from './infrastructure/web/routes/taskRoutes';
import { logger } from './middlewares/logger';

const app = express();

app.use(express.json());
app.use(logger);
app.use('/tasks', taskRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});