import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{title}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' [routerLink]="['/home']">Home</a></li>
        <li><a class='nav-link' [routerLink]="['/faq']">FAQs</a></li>
        <li><a class='nav-link' [routerLink]="['/Navpage1']">Nav Page1</a></li>
        <li><a class='nav-link' [routerLink]="['/Navpage2']">Nav Page2</a></li>
      </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTask Demo';
}
