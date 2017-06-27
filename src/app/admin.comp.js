"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var array = [];
var arrayforbiller = [];
var AdminComp = (function () {
    function AdminComp() {
        this.userFlag = false;
        this.billerFlag = false;
        this.viewFlag = false;
        this.arrays = array;
        this.billingFlag = false;
        this.arrayforbillers = arrayforbiller;
        this.keepGoing = true;
    }
    AdminComp.prototype.forUser = function () {
        this.userFlag = !this.userFlag;
        console.log("hioh");
    };
    AdminComp.prototype.createUser = function (value1) {
        var newoneis = [];
        var data = JSON.parse(localStorage.getItem('newoneis'));
        if (data != null) {
            for (var i = 0; i < data.length; i++) {
                newoneis.push(data[i]);
            }
        }
        if (value1 == "") {
            alert("plz write something");
        }
        else {
            newoneis.push(value1);
        }
        var JSONreadyUsers = JSON.stringify(newoneis);
        localStorage.setItem('newoneis', JSONreadyUsers);
        var hh = JSON.parse(localStorage['newoneis']);
        console.log(hh + " Local storage length " + hh.length);
        alert("user created");
        this.userFlag = !this.userFlag;
    };
    AdminComp.prototype.forBiller = function () {
        this.billerFlag = !this.billerFlag;
        console.log("ada");
    };
    AdminComp.prototype.createBiller = function (value1) {
        var BBBAYYY = [];
        var data = JSON.parse(localStorage.getItem('BBBAYYY'));
        if (data != null) {
            for (var i = 0; i < data.length; i++) {
                BBBAYYY.push(data[i]);
            }
        }
        if (value1 == "") {
            alert("plz write something");
        }
        else {
            BBBAYYY.push(value1);
        }
        var JSONreadyUsers = JSON.stringify(BBBAYYY);
        localStorage.setItem('BBBAYYY', JSONreadyUsers);
        var hh = JSON.parse(localStorage['BBBAYYY']);
        console.log(hh + " Local storage length " + hh.length);
        alert("Biller created");
        this.billerFlag = !this.billerFlag;
    };
    AdminComp.prototype.viewUsers = function () {
        this.viewFlag = !this.viewFlag;
        console.log("adaadjkkas");
        this.arrays = JSON.parse(localStorage.getItem('newoneis'));
        if (this.arrays == null) {
            alert("Plz add user first");
        }
    };
    AdminComp.prototype.billing = function (value) {
        this.arrayforbillers = JSON.parse(localStorage.getItem(value));
        if (this.arrayforbillers == null) {
            this.billingFlag = false;
            alert("No biller associated with " + value);
        }
        else {
            this.billingFlag = !this.billingFlag;
            this.second = value;
        }
    };
    AdminComp.prototype.onSubmit = function (value) {
        if (value.bill == '' || value.bill == null) {
            alert("Pl add value");
        }
        else {
            var billToBePaid = [];
            billToBePaid = JSON.parse(localStorage.getItem(this.second.concat('Pay')));
            console.log(this.second.concat('Pay') + " yoyoyoyo");
            console.log(billToBePaid + "sfsedcs" + value.biller + " yoyoyoyoyo");
            if (billToBePaid != null) {
                console.log("inside parent if");
                for (var i = 0; i < billToBePaid.length; i++) {
                    console.log(billToBePaid[i].biller + "inside for loop");
                    if (billToBePaid[i].biller == value.biller) {
                        console.log("1st if");
                        alert("This biller is already associated with this user");
                        this.keepGoing = false;
                        break;
                    }
                }
                if (this.keepGoing) {
                    value.user = this.second;
                    billToBePaid.push(value);
                    alert("bill added");
                }
            }
            else {
                console.log("child if");
                var billToBePaid = [];
                value.user = this.second;
                billToBePaid.push(value);
                alert("bill added");
            }
            var JSONreadyUsers = JSON.stringify(billToBePaid);
            localStorage.setItem(this.second.concat('Pay'), JSONreadyUsers);
        }
    };
    return AdminComp;
}());
AdminComp = __decorate([
    core_1.Component({
        selector: 'second-user',
        templateUrl: './admin.comp.html',
        styles: [" h3,li,option {\n   cursor:pointer\n  }\n   #dropdwn {\n    list-style: none;\n    }"],
    })
], AdminComp);
exports.AdminComp = AdminComp;
//# sourceMappingURL=admin.comp.js.map