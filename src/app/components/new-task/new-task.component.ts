import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  @Output() closed = new EventEmitter<boolean>();

  newTask!: Task;

  constructor(private _tasksService: TasksService) { }

  ngOnInit(): void {
    this.newTask = new Task({});
  }

  saveTask() {
    this._tasksService.addTask(this.newTask).subscribe(() => this.closeModal());
  }

  closeModal() {
    this.closed.emit(true);
  }
}
