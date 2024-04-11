import { TaskRepository } from '../../infrastructure/repositories/TaskRepository';

export class TaskService {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  getAllTasks() {
    return this.taskRepository.findAll();
  }

  getTaskById(id: number) {
    return this.taskRepository.findById(id);
  }
}