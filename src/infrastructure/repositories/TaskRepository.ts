import { Task } from '../../domain/entities/Task';
import * as fs from 'fs';
import * as path from 'path';

const DATA_PATH = path.join(__dirname, '../data/tasks.json');

export class TaskRepository {
  findAll(): Task[] {
    const rawData = fs.readFileSync(DATA_PATH, 'utf8');
    return JSON.parse(rawData);
  }

  findById(id: number): Task | undefined {
    const tasks = this.findAll();
    return tasks.find(task => task.id === id);
  }
}