import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent} from './faq/faq.component';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
const routes: Routes = [
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'faq',
    component: FaqComponent,
  },
  {
    path:'Navpage1',
    component: Page1Component
  },
  {
    path:'Navpage2',
    component: Page2Component
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
