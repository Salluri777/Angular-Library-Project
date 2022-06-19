import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './completed/completed.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersessionComponent } from './usersession/usersession.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'completed',component:CompletedComponent},
    {path:'home',component:HomeComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,UsersessionComponent,RegisterComponent,HomeComponent,WishlistComponent,CompletedComponent]
