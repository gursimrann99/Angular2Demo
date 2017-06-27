import { Component } from '@angular/core';
  var array:any= [];
  var arrayforbiller:any = [];
@Component ({
  selector: 'second-user',
  templateUrl: './admin.comp.html',

  styles: [` h3,li,option {
   cursor:pointer
  }
   #dropdwn {
    list-style: none;
    }`],
})

export class AdminComp {

    userFlag = false;
      forUser() {
            this.userFlag = !this.userFlag;
            console.log("hioh");
      }

      createUser(value1:any) {
        var newoneis= [];
        var data =JSON.parse(localStorage.getItem('newoneis'));
        if(data!=null){
          for(var i=0; i<data.length; i++) {
            newoneis.push(data[i]);
          }
        }
        if(value1 == "")
        {
          alert("plz write something");
        }
        else {
          newoneis.push(value1);
        }
        var JSONreadyUsers = JSON.stringify(newoneis);
        localStorage.setItem('newoneis', JSONreadyUsers);
        var hh = JSON.parse(localStorage['newoneis']);
        console.log(hh+" Local storage length "+hh.length);
        alert("user created");
        this.userFlag = !this.userFlag;
      }

      billerFlag = false;
        forBiller() {
            this.billerFlag = !this.billerFlag;
            console.log("ada");
      }

      createBiller(value1:any) {
        var BBBAYYY= [];
        var data =JSON.parse(localStorage.getItem('BBBAYYY'));
        if(data!=null){
          for(var i=0; i<data.length; i++) {
            BBBAYYY.push(data[i]);
          }
        }
        if(value1 == "")
        {
          alert("plz write something");
        }
        else {
          BBBAYYY.push(value1);
        }
        var JSONreadyUsers = JSON.stringify(BBBAYYY);
        localStorage.setItem('BBBAYYY', JSONreadyUsers);
        var hh = JSON.parse(localStorage['BBBAYYY']);
        console.log(hh+" Local storage length "+hh.length);
        alert("Biller created");
        this.billerFlag = !this.billerFlag;
      }

      viewFlag = false;
      public arrays = array;
      viewUsers() {
      this.viewFlag = !this.viewFlag;
      console.log("adaadjkkas");
         this.arrays =JSON.parse(localStorage.getItem('newoneis'));
         if(this.arrays == null){
          alert("Plz add user first");
         }
      }

      billingFlag = false;
      public arrayforbillers = arrayforbiller;
      second:any;
      billing(value:any) {

        this.arrayforbillers = JSON.parse(localStorage.getItem(value));
        if(this.arrayforbillers == null) {
          this.billingFlag = false;
        alert("No biller associated with "+value);
        }
        else {
          this.billingFlag = !this.billingFlag;
          this.second = value;
        }

      }
      keepGoing = true;
      onSubmit(value:any) {
        if(value.bill == '' || value.bill == null)
        {
          alert("Pl add value");
        }
        else {
           var billToBePaid = [];
           billToBePaid =JSON.parse(localStorage.getItem(this.second.concat('Pay')));
           console.log(this.second.concat('Pay')+" yoyoyoyo");
           console.log(billToBePaid+"sfsedcs"+value.biller+" yoyoyoyoyo");


              if(billToBePaid!=null){
                  console.log("inside parent if");
                  for(var i=0; i<billToBePaid.length; i++) {
                      console.log(billToBePaid[i].biller+"inside for loop");
                      if(billToBePaid[i].biller == value.biller)
                      {
                         console.log("1st if");
                         alert("This biller is already associated with this user");
                         this.keepGoing = false;
                         break;
                       }
                  }
                  if(this.keepGoing) {
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
       }
}
