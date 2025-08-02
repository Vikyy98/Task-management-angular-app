import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  constructor(private taskService: TasksService) {}

  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  OnComplete() {
    this.taskService.deleteTask(this.task.id);
  }
}
