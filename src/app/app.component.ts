import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>GSB Bill Payment</h1>
                <div>
                  <h2><a routerLink='/admin'>Admin</a>
                  <a routerLink='/user'>Users</a></h2>

                  <router-outlet></router-outlet>`,

})
export class AppComponent  {}
