import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../mock-persistance/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length === 0){
      alert('Please add a task first!');
      return;
    }

    const task: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onAddTask.emit(task);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
