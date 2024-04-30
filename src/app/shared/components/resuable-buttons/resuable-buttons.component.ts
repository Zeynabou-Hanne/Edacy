import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-resuable-buttons',
  templateUrl: './resuable-buttons.component.html',
  styleUrl: './resuable-buttons.component.css'
})
export class ResuableButtonsComponent {
@Output() buttonClicked:EventEmitter<any>= new EventEmitter();
@Input() isPrincipal!:boolean;
@Input() isSecondary!:boolean;
clicked(){
  this.buttonClicked
}
}
