import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CompletedComponent } from './completed/completed.component';
import { HomeComponent } from './home/home.component';
import { UsersessionComponent } from './usersession/usersession.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WishlistComponent,
    CompletedComponent,
    HomeComponent,
    UsersessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
