import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http : HttpClient) { } 
  postSignup(data : any){
    return this.http.post<any>("http://localhost:3000/signup" , data).pipe(map((res:any)=>{
       return res;
    }))
 }
 //get data 

 getSignup(){
   return this.http.get("http://localhost:3000/signup").pipe(map((res:any)=>{
     return res;
   }))
 }
}