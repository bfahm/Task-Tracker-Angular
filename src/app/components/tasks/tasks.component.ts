import { Component, OnInit } from '@angular/core';
import { Task } from '../../mock-persistance/task';
import { TASKS } from '../../mock-persistance/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks : Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
