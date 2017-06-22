"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var userArray = [];
var register = [];
var billsToBePaid = [];
var UserComponent = (function () {
    function UserComponent() {
        this.userFlag = false;
        this.userArrays = userArray;
        this.registerFlag = false;
        this.registers = register;
        this.billFlag = false;
        this.payingFlag = false;
        this.billToBePaid = billsToBePaid;
    }
    UserComponent.prototype.viewUsers = function () {
        this.userFlag = !this.userFlag;
        this.userArrays = JSON.parse(localStorage.getItem('newoneis'));
        if (this.userArrays == null) {
            alert("No user created");
        }
    };
    UserComponent.prototype.registerBiller = function (value) {
        this.registers = JSON.parse(localStorage.getItem('BBBAYYY'));
        if (this.registers == null) {
            alert("No billers added by admin");
        }
        else {
            this.registerFlag = true;
            this.username = value;
        }
    };
    UserComponent.prototype.billerAdded = function (value) {
        var data = [];
        data = JSON.parse(localStorage.getItem(this.username));
        if (data != null) {
            data.push(value);
        }
        else {
            var data = [];
            data.push(value);
        }
        var JSONreadyUsers = JSON.stringify(data);
        localStorage.setItem(this.username, JSONreadyUsers);
        console.log(data + "d");
    };
    UserComponent.prototype.userBills = function () {
        this.billFlag = !this.billFlag;
        this.userArrays = JSON.parse(localStorage.getItem('newoneis'));
        if (this.userArrays == null) {
            alert("No user created");
        }
    };
    UserComponent.prototype.payBills = function (value) {
        this.billToBePaid = JSON.parse(localStorage.getItem(value.concat('Pay')));
        if (this.billToBePaid == null) {
            alert("No bills generated for " + value);
        }
        else {
            this.payingFlag = true;
        }
        console.log(this.billToBePaid);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'first user',
        templateUrl: './user.comp.html',
        styles: [" h3 {\n   cursor:pointer\n  }\n  #billers {\n  cursor:pointer;\n  }\n  #billpay {\n  list-style: none;\n\n  }"],
    })
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map