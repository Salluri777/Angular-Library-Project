import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../books';
import { RestService } from '../rest.service';
import { Users } from '../users';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private rest:RestService,private router:Router) { }
  Booksdata:Books[]=[];
  users:Users[]=[];
  i:number=0;
  j:number=0;
  k:number=0;
  username:string='';
  success:boolean=false;
  addedToWishList:boolean=true;
  wishListBooks:Books[]=[];
  wishList:number[]=[];
  
  addmore(){
    this.router.navigateByUrl('/home');
  }

  ngOnInit(): void {
    this.success=this.rest.getMessage();
    this.rest.getBooks().subscribe(data=>this.Booksdata=data);
  
    this.rest.getUsers().subscribe(
      (response: any)=>
      {
          this.users=response;
          this.wishList=this.users[this.rest.getUserLoggedIn()]["WishList"];
          for(this.i=0;this.i<this.wishList.length;this.i++){
            for(this.j=0;this.j<this.Booksdata.length;this.j++){
              if(this.wishList[this.i]==this.Booksdata[this.j]["id"]){
                this.wishListBooks.push(this.Booksdata[this.j]);
                break;
              }
          }
        }
      }
    )
    if(this.rest.getMessage()){
      this.username=this.rest.getFullUsersDetails()['userName'];}
  }
  

}
