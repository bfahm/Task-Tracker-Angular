import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(){
    console.log('3. uiService received the update, updated the boolean, and notified globally (subject) so observers could react.')
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggleAddTask() : Observable<any>{
    console.log('-- Initialized subject observable. --')
    return this.subject.asObservable();
  }
}
