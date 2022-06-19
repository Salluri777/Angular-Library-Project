import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../books';
import { RestService } from '../rest.service';

import { Users } from '../users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rest:RestService,private router:Router) { }
  result=[];
  public Booksdata:any=[];
  i:number=0;
  username:string='';
  user!:Users;
  flag:boolean=true;
  users:Users[]=[]
  success:boolean=false;
  wishBooks:number[]=[];
  CompletedBooks:number[]=[];
  getUserDetails!:Users;
  addToWishList:boolean=true;
  books:Books[]=[];
  wishList(ele:Books){
    this.success=this.rest.getMessage();
    
    if(this.success){
    console.log("hii");
    this.wishBooks=this.rest.getFullUsersDetails()["WishList"]
      this.flag=true;
      for(this.i=0;this.i<this.wishBooks.length;this.i++){
          if(this.wishBooks[this.i]==ele["id"]){
            alert("Already added to Wishlist")
            this.flag=false;
          }
      }
      if(this.flag){  
        alert("added to wishlist");
        //console.log("hii");
        this.getUserDetails=this.rest.getFullUsersDetails();
        this.wishBooks=this.rest.getFullUsersDetails()["WishList"];
        this.wishBooks.push(ele["id"]);
        this.CompletedBooks=this.rest.getFullUsersDetails()["Completed"];
        this.user={"id": this.rest.getFullUsersDetails()['id'],
        "userName":  this.rest.getFullUsersDetails()['userName'],
        "Password": this.rest.getFullUsersDetails()['Password'],
        "Phone":  this.rest.getFullUsersDetails()['Phone'],
        "Email":  this.rest.getFullUsersDetails()['Email'],
        "UserType": "Customer",
        "WishList": this.wishBooks,
        "Completed": this.CompletedBooks
      }
        this.rest.addWishList(this.user);
      }
      console.log(this.wishBooks);
    }
    else{

        this.router.navigateByUrl("/login");
    }
  }
  completed(ele:Books){
    this.success=this.rest.getMessage();
    
    if(this.success){
      this.flag=true;
      this.CompletedBooks=this.rest.getFullUsersDetails()["Completed"];
      for(this.i=0;this.i<this.CompletedBooks.length;this.i++){
          if(this.CompletedBooks[this.i]==ele["id"]){
            this.flag=false;
            alert("Already added to Completed");
            
          }
      }
      if(this.flag){
        alert("Added to Completed");
        this.CompletedBooks=this.rest.getFullUsersDetails()["Completed"];
        this.CompletedBooks.push(ele["id"]);
        this.wishBooks=this.rest.getFullUsersDetails()["WishList"];
        this.user={"id": this.rest.getFullUsersDetails()['id'],
        "userName":  this.rest.getFullUsersDetails()['userName'],
        "Password":  this.rest.getFullUsersDetails()['Password'],
        "Phone":  this.rest.getFullUsersDetails()['Phone'],
        "Email":  this.rest.getFullUsersDetails()['Email'],
        "UserType": "Customer",
        "WishList": this.wishBooks,
        "Completed": this.CompletedBooks
      }
        this.rest.addCompletedList(this.user);

      }
      console.log(this.CompletedBooks);
    }
    else{
        this.router.navigateByUrl("/login");
    } 
  }
  ngOnInit(): void {
    this.rest.getBooks().subscribe(data=>this.Booksdata=data);
    
    this.rest.getUsers().subscribe(
      (response: any)=>
      {
          this.users=response;
          for(this.i=0;this.i<this.users.length;this.i++){
            this.wishBooks=this.users[this.i]["WishList"];
            this.CompletedBooks=this.users[this.i]["Completed"];
          }
      }
    )
    if(this.rest.getMessage()){
    this.username=this.rest.getFullUsersDetails()['userName'];}
    this.success=this.rest.getMessage();
  
  }

}
