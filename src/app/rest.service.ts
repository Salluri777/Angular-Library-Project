import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Books } from './books';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
  url1:string="http://localhost:3000/Books";
  url2:string="http://localhost:3000/Users";
  success:boolean=false;
  wishList:number[]=[];
  loginsession:string='Login'
  wishELements:Books[]=[];
  user:number=0;
  completed:number[]=[];
  userDetails!:Users;
  getLoginorLogout(){
    return this.loginsession;
  }
  setLoginorLogout(s:string){
    this.loginsession=s;
  }
  addCompleted(completed:number){
    this.completed.push(completed);
  }
  getBooks():Observable<Books[]>{
    return this.http.get<Books[]>(this.url1);
  }
  getUsers():Observable<Users[]>{
    return this.http.get<Users[]>(this.url2);
  }
  getMessage(){
    return this.success;
  }
  setMessage(success:boolean){
    this.success=success;
  }
  addWishList(user:Users){  
    this.http.put(this.url2+'/'+user.id ,user).subscribe((data)=>{
      console.log(data);
    });
  }
  addCompletedList(user:Users){
    this.http.put(this.url2+'/'+user.id,user).subscribe((data)=>{
      console.log(data);
    })
  }
  getWishList(){
    return this.http.get("http://localhost:3000/Users");
  }
  getWishListElements(){
    return this.wishELements;
  }
  setWishListElements(ele:Books){
    this.wishELements.push(ele);
  }
  setUserLoggedIn(user:number){
    this.user=user;
  }
  getUserLoggedIn(){
    return this.user;
  }
  getCompleted(){
    return this.http.get("http://localhost:3000/Users");

  }
  getFullUsersDetails(){
    return this.userDetails;
  }
  setFullUsersDetails(user:Users){
    this.userDetails=user;
  }
  registerUser(user:Users){
    
    this.http.post("http://localhost:3000/Users",user).subscribe((data=>{
      console.log(data);
    }));
  }
  getusername(){
    return this.userDetails["userName"];
  }

}
