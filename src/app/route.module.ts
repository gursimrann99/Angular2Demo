import { NgModule }      from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { UserComponent } from './user.component';
import { AdminComp } from './admin.comp';

const routes: Routes =[
    { path: 'user', component: UserComponent },
    { path: 'admin', component: AdminComp },
 ];

 @NgModule({
   imports:      [ RouterModule.forRoot(routes) ],
   exports:     [ RouterModule ]
 })

 export class RouteModule { }
 export const routingComps = [ UserComponent, AdminComp ]
