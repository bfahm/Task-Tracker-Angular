import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: string = 'Undefined';
  @Input() color: string = 'Red';
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log('1. Emitted that the button was clicked, no other custom logic implemented inside the button component.')
    this.btnClick.emit();
  }

}
