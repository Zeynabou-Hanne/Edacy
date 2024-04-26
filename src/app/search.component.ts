import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `<div style="margin: 8px">
  <input type="text" [placeholder]="placeholderMessage"  (keyup)="searchanged($event)">
  </div>`,
  styles: ['']
})
export class SearchComponent implements OnInit{
   @Input() placeholderMessage!:string; //ecoute des messages
   @Output() searched:EventEmitter<string>=new EventEmitter();//nouvelle liason d'evenement,transfer un message
  constructor(){}
  //Avant de demarrer fais ceci
  ngOnInit(): void {}
  searchanged(ev:any){
    const text:string=ev.target.value;
    this.searched.emit(text);
  }
 
}
