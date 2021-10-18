import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  apiUrl = 'http://localhost:3000/tasks';
  tasks!: Task[];

  constructor(private _http: HttpClient) {}

  getTasks() {
    return this._http.get<Task[]>(this.apiUrl);
  }

  getTask(id: Number) {
    return this._http.get<Task>(`${this.apiUrl}/${id}`);
  }

  addTask(task: Task) {
    return this._http.post<Task>(`${this.apiUrl}`, task);
  }

  removeTask(task: Task) {
    return this._http.delete<Task>(`${this.apiUrl}/${task.id}`);
  }

  updateTask(task: Task) {
    return this._http.patch<Task>(`${this.apiUrl}/${task.id}`, task);
  }
}
