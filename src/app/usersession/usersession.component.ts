import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-usersession',
  templateUrl: './usersession.component.html',
  styleUrls: ['./usersession.component.css']
})
export class UsersessionComponent implements OnInit {

  constructor(private rest:RestService,private router:Router) { }

  ngOnInit(): void {

  }

  loggedin(){
    return this.rest.getMessage();
  }
  logout(){
    this.rest.setMessage(false);
    alert("Logout successful")
    this.router.navigateByUrl('/login');

  }
}
