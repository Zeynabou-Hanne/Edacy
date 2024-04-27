import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-resuable-buttons',
  templateUrl: './resuable-buttons.component.html',
  styleUrl: './resuable-buttons.component.css'
})
export class ResuableButtonsComponent {
@Output() buttonClicked:EventEmitter<any>= new EventEmitter();

clicked(){
  this.buttonClicked
}
}
//1.11.14