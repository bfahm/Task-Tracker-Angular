import { Injectable } from '@angular/core';
import { Task } from '../mock-persistance/task';
import { TASKS } from '../mock-persistance/mock-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }
}
