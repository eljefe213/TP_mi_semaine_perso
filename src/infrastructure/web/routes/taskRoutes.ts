import { Router } from 'express';
import { TaskController } from '../controllers/TaskController';
import { TaskService } from '../../../domain/services/TaskService';
import { TaskRepository } from '../../../infrastructure/repositories/TaskRepository';

export const taskRouter = Router();

const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

taskRouter.get('/', (req, res) => taskController.getAllTasks(req, res));
taskRouter.get('/:id', (req, res) => taskController.getTaskById(req, res));