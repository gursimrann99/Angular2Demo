import { Component } from '@angular/core';
import { Router } from '@angular/router';

var userArray:any = [];
var register:any = [];
var billsToBePaid:any = [];
var paidLists:any = [];
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
        for( var i = 0; i < data.length; i++) {
            if( data[0] == value) {
              alert("User already registered with this biller");
              break;
            }
            else {
              data.push(value);
              alert("Biller successfully registered with user");
              this.registerFlag = false;
              break;
            }
        }
      }
      else {
        var data = [];
        data.push(value);
        alert("Biller successfully registered with user");
        this.registerFlag = false;
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
        if (this.billToBePaid == null || this.billToBePaid.length == 0) {
          alert("No bills generated for "+value);
        }
        else {
          this.payingFlag = true;
        }
    }
    paid(index:any,value:any) {
      var billToBePaid = [];
      billToBePaid =JSON.parse(localStorage.getItem(value.user.concat('Pay')));
      billToBePaid.splice(index,1);
      var obj1 = JSON.stringify(billToBePaid);
      localStorage.setItem(value.user.concat('Pay'), obj1);
      alert(value.user+"'s' "+value.biller+" bill paid :)");
      this.payingFlag = false;

      var paidBill = [];
      paidBill = JSON.parse(localStorage.getItem('billsPaid'));
      if(paidBill != null) {
        paidBill.push(value);
      }
      else {
        var paidBill = [];
        paidBill.push(value);
      }
      var obj2 = JSON.stringify(paidBill);
      localStorage.setItem('billsPaid', obj2);
      console.log(paidBill);
    }
    paidFlag = false;
    public paidList = paidLists;
    totalBillsPaid() {
      this.paidList = JSON.parse(localStorage.getItem('billsPaid'));
      if( this.paidList == null) {
        alert("No bills paid yet");
      }
      else {
        this.paidFlag = true;
        console.log(this.paidList);

      }
    }
}
