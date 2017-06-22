import { Component } from '@angular/core';
import { Router } from '@angular/router';

var userArray:any = [];
var register:any = [];
var billsToBePaid:any = [];
@Component ({
  selector: 'first user',
  templateUrl: './user.comp.html',
  styles: [ ` h3 {
   cursor:pointer
  }
  #billers {
  cursor:pointer;
  }
  #billpay {
  list-style: none;

  }`],
})

export class UserComponent {

    userFlag = false;
    public userArrays = userArray;
    viewUsers() {
      this.userFlag = !this.userFlag;
      this.userArrays =JSON.parse(localStorage.getItem('newoneis'));
      if(this.userArrays == null){
       alert("No user created");
      }
    }

    registerFlag = false;
    username: any;
    public registers = register;
    registerBiller(value:any) {
      this.registers = JSON.parse(localStorage.getItem('BBBAYYY'));
      if(this.registers == null) {
        alert("No billers added by admin");
      }
      else{
        this.registerFlag = true;
        this.username = value;
      }
    }
    billerAdded(value:any){
      var data = [];
      data =JSON.parse(localStorage.getItem(this.username));
      if(data!=null){
          data.push(value);
      }
      else {
        var data = [];
        data.push(value);
      }
      var JSONreadyUsers = JSON.stringify(data);
      localStorage.setItem(this.username, JSONreadyUsers);
          console.log(data+"d");
    }
    billFlag = false;
    userBills() {
        this.billFlag = !this.billFlag;
        this.userArrays =JSON.parse(localStorage.getItem('newoneis'));
        if(this.userArrays == null){
         alert("No user created");
        }
    }
    payingFlag = false;
    public billToBePaid = billsToBePaid;
    payBills(value:any) {
        this.billToBePaid =JSON.parse(localStorage.getItem(value.concat('Pay')));
        if (this.billToBePaid == null) {
          alert("No bills generated for "+value);
        }
        else {
          this.payingFlag = true;
        }
        console.log(this.billToBePaid);
    }
}
