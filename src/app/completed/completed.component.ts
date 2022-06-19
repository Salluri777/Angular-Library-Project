import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../books';
import { RestService } from '../rest.service';
import { Users } from '../users';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  constructor(private rest:RestService,private router:Router) { }
  usersCompleted:Users[]=[];
  booksCompleted:Books[]=[];
  completedElements:Books[]=[];
  completedBooks:number[]=[];
  success!:boolean;
  i:number=0;
  j:number=0;

  addmore(){
    this.router.navigateByUrl('/home');
  }

  ngOnInit(): void {
    this.success=this.rest.getMessage();
        console.log(this.success);
        this.rest.getBooks().subscribe((response:any)=>{
        console.log(response);
        this.booksCompleted=response;
        console.log(this.booksCompleted);
        });
        this.rest.getUsers().subscribe((response:any)=>{
          console.log(response);
          this.usersCompleted=response;
          console.log(this.usersCompleted);
        console.log(this.booksCompleted);
        console.log(this.usersCompleted);
        console.log(this.rest.getUserLoggedIn());
        console.log(this.usersCompleted[this.rest.getUserLoggedIn()]["id"]);
        this.completedBooks=this.usersCompleted[this.rest.getUserLoggedIn()]["Completed"];
        console.log(this.completedBooks);
        for(this.i=0;this.i<this.completedBooks.length;this.i++){
          for(this.j=0;this.j<this.booksCompleted.length;this.j++){
            if(this.completedBooks[this.i]==this.booksCompleted[this.j]["id"])
            {
              this.completedElements.push(this.booksCompleted[this.j]);
            }
          }
        }
      });
  }

}
