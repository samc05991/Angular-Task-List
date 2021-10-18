import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TasksService],
})

export class AppComponent {
  title = 'techTest';
}
