"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_component_1 = require("./user.component");
var admin_comp_1 = require("./admin.comp");
var routes = [
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'admin', component: admin_comp_1.AdminComp },
];
var RouteModule = (function () {
    function RouteModule() {
    }
    return RouteModule;
}());
RouteModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], RouteModule);
exports.RouteModule = RouteModule;
exports.routingComps = [user_component_1.UserComponent, admin_comp_1.AdminComp];
//# sourceMappingURL=route.module.js.map