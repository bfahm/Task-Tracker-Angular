import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private readonly uiService: UiService) {
    this.subscription = this.uiService.onToggleAddTask().subscribe(
      (showAddTask: boolean) => {
        console.log(`4. Received an observed update on the header since it's subscribed, the update was: ${showAddTask}.`)
        this.showAddTask = showAddTask;
      }
    );
   }

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log('2. Header component listened to the emit and will notify uiService.')
    this.uiService.toggleAddTask()
  }

}
