import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userID: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced topics to be an expert.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userID: 'u2',
      title: 'Master Azure',
      summary: 'Learn all the basic and advanced topics to be an expert.',
      dueDate: '2025-12-31',
    },
    {
      id: 't3',
      userID: 'u3',
      title: 'Master Cloud',
      summary: 'Learn all the basic and advanced topics to be an expert.',
      dueDate: '2025-12-31',
    },
    {
      id: 't4',
      userID: 'u3',
      title: 'Master AWS',
      summary: 'Learn all the basic and advanced topics to be an expert.',
      dueDate: '2025-12-31',
    },
  ];

  constructor() {
    const storedTask = localStorage.getItem('tasks');
    if (storedTask) {
      {
        this.tasks = JSON.parse(storedTask);
      }
    }
  }

  //Add more common methods here if needed
  getSelectedUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userID === userId);
  }

  addTask(newTask: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: Math.random().toString(),
      userID: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });
    this.saveTasksToLocalStorage();
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasksToLocalStorage();
  }

  private saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
