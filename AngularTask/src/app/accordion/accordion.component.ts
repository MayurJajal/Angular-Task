import { Component, AfterContentInit, QueryList, ContentChildren } from '@angular/core';

import { PanelComponent } from '../panel/panel.component';
@Component({
  selector: 'accordion',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements AfterContentInit {

  @ContentChildren(PanelComponent) panels: QueryList<PanelComponent>;
  constructor() { }



  ngAfterContentInit(){
    this.panels.toArray()[0].opened = true;
    this.panels.toArray().forEach((panel)=> {
      panel.toggle.subscribe(()=>{
          this.panelOpen(panel);
      });
    });
  }

  panelOpen(panel: PanelComponent){
    this.panels.toArray().forEach(p=>p.opened =false);
    panel.opened = true;
  }
}
