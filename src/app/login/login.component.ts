import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { Users } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rest:RestService,private router:Router) { }
  success:boolean=false;
  users:Users[]=[];
  username:string="";
  password:string="";
  var:boolean=true;
  user!:Users;
  onclick:boolean=false;
  i:number=0;
  ngOnInit(): void {
    this.success=this.rest.getMessage();
    this.rest.getUsers().subscribe(
      (response)=>
      {
          this.users=response;
      }
    );
  }
  login(){
    this.onclick=true;
    for(this.i=0;this.i<this.users.length;this.i++){
      if((this.users[this.i]["userName"]==this.username) && (this.users[this.i]["Password"]==this.password)){
        this.success=true;
        console.log("success");
        this.rest.setMessage(true);
        console.log(this.success);
        this.rest.setUserLoggedIn(this.i);
        this.user={
          "id":this.users[this.i]["id"],
          "userName":this.users[this.i]["userName"],
          "Password":this.users[this.i]["Password"],
          "Phone":this.users[this.i]["Phone"],
          "Email":this.users[this.i]["Email"],
          "UserType":this.users[this.i]["UserType"],
          "WishList":this.users[this.i]["WishList"],
          "Completed":this.users[this.i]["Completed"],
          
        }
        this.rest.setFullUsersDetails(this.user);
        alert("Login successful");
        this.rest.setLoginorLogout('Logout');
        this.router.navigateByUrl('/home');
        break;
      }
      else{
        this.rest.setMessage(false);
        console.log(this.success);
      }
  }

  }

}
