import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filters: string[] = [];
  selectedTask!: Task;
  modalIsOpen: Boolean = false;

  constructor(private _tasksService: TasksService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  deleteTask() {
    this._tasksService.removeTask(this.selectedTask).subscribe(() => {
      this.selectedTask.id = undefined;
      this.getTasks();
    });
  }

  filterTasks(filters: any) {
    this.filters = filters;
    this.filteredTasks = !filters.length ? this.tasks : this.tasks.filter((item: Task) => {
      return this.filters.includes(item.category);
    });
  }

  getTasks() {
    this._tasksService.getTasks().subscribe((items) => {
      this.tasks = items.map((item: any) => new Task(item));
      this.filterTasks(this.filters);
    });
  }

  getCategories() {
    return this.tasks.map((task: Task) => task.category);
  } 

  onModalClose(closed: Boolean) {
    this.modalIsOpen = !closed;
    this.getTasks();
  }

  selectTask(task: Task) {
    this.selectedTask = task;
  }

  toggleTaskIsDone() {
    this.selectedTask.setDone();
    this._tasksService.updateTask(this.selectedTask).subscribe(() => {
      this.getTasks();
    });
  }
}
