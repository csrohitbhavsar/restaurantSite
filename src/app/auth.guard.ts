import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService : AuthService , private  route : Router){}

  canActivate()
 {

  if (this.authService.isUserLogedin){
    return true;
    this.route.navigate(['restaurant'])
  }
  else {
    this.route.navigate(['login'])
    return false;
  } 
 }
}
