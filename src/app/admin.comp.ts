import { Component } from '@angular/core';
  var array:any= [];
  var arrayforbiller:any = [];
@Component ({
  selector: 'second-user',
  templateUrl: './admin.comp.html',

  styles: [` h3,li,option {
   cursor:pointer
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #F4F6F6;
    min-width: 160px;
    overflow: auto;
    }
  .show {
    display:block;
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
        this.billingFlag = !this.billingFlag;
        alert("No biller associated with "+value);
        }
        else {
          this.billingFlag = true;
          this.second = value;
        }

      }

      myDD() {
        document.getElementById("myDropdown").classList.toggle("show");
      }

      onSubmit(value:any) {

       var billToBePaid = [];
       billToBePaid =JSON.parse(localStorage.getItem(this.second.concat('Pay')));
       console.log(billToBePaid+"sfsedcs"+value.biller)
       if(billToBePaid!=null){
       console.log("asdfasda");
         for(var i=0; i<billToBePaid.length; i++) {
           console.log(billToBePaid[i].biller);
           if(billToBePaid[i].biller == value.biller)
           {
           console.log("d");
              alert("This biller is already associated with this user");
           }
           else{
           console.log("ds");

           value.user = this.second;
            billToBePaid.push(value);
           }
         }
       }
       else {
       console.log("Sdfds");
         var billToBePaid = [];
         value.user = this.second;
         billToBePaid.push(value);
       }

       var JSONreadyUsers = JSON.stringify(billToBePaid);
       localStorage.setItem(this.second.concat('Pay'), JSONreadyUsers);
      }
}
