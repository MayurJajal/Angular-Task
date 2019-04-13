import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'panel',
  template:`
    <div class="mypanel">
      <div class="title" (click)="toggle.emit()">
        {{myTitle}}
      </div>
      <div class="body" [ngClass]="{'hidden': !opened}">
          <ng-content></ng-content>
      </div>
    </div>`,
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input() myTitle: string;
  @Input() opened = false;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
