import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { Users } from '../users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private rest:RestService,private router:Router) { }
  users!:Users[];
  id:number=0;
  username:string="";
  password:string="";
  phone:string="";
  Email:string="";
  onClick:boolean=false;
  UserType:string="Customer";
  wishList:number[]=[];
  completed:number[]=[];
  user!:Users;
  i:number=0;
  length:number=0;
  success:boolean=false;
  userexist:boolean=false;
  ngOnInit(): void {
    this.rest.getUsers().subscribe((data)=>{
      this.users=data;
      this.length=this.users.length;
      this.success=this.rest.getMessage();
    })
  }
  register(){
    this.onClick=true;
    this.user={
      "id":(this.length)+1,
      "userName":this.username,
      "Password":this.password,
      "Phone":this.phone,
      "Email":this.Email,
      "UserType":"Customer",
      "WishList":[],
      "Completed":[]
    }

    for(this.i=0;this.i<this.users.length;this.i++){
      if(this.users[this.i]["userName"]==this.username && this.users[this.i]["Password"]==this.password && this.users[this.i]["Email"]==this.Email){
        this.userexist=true;
        console.log("exit");
        break;
      }
      else{
        this.userexist=false;
      }
    }
    console.log(this.userexist);
    if(!this.userexist){
      this.userexist=false;
      this.rest.registerUser(this.user);
      alert('Registration successful')
      this.router.navigateByUrl("/login");
    }
}
logout(){
  this.rest.setMessage(false);
  alert("Logout successful")
  this.router.navigateByUrl('/login');

}
  


}
