import { Request, Response } from 'express';
import { TaskService } from '../../../domain/services/TaskService';

export class TaskController {
  private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  public getAllTasks(req: Request, res: Response) {
    const tasks = this.taskService.getAllTasks();
    res.json(tasks);
  }

  public getTaskById(req: Request, res: Response) {
    const task = this.taskService.getTaskById(Number(req.params.id));
    if (task) {
      res.json(task);
    } else {
      res.status(404).send('Task not found');
    }
  }

  // Ajoute d'autres méthodes de gestion des requêtes si nécessaire
}