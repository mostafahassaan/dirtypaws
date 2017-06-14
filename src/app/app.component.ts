import { Component } from '@angular/core';
@Component({
  selector: 'app',
  template: `
     <nav>
      <a routerLink="/home">Home</a>
      <a routerLink="/reports" >Reports</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent  { 
}