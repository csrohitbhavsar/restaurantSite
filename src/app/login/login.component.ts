import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup  , FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginVal! : FormGroup;

  constructor(private fb : FormBuilder , private http : HttpClient , private router : Router) { }
  ngOnInit(): void {

    this.loginVal = this.fb.group({
      email : [''],
      password : ['']
    })
    
  }

  onLogin(){
    this.http.get<any>("http://localhost:3000/users").subscribe(res=> {
      const user = res.find((a : any)=>{
        return a.email === this.loginVal.value.email && a.password == this.loginVal.value.password
      });
      if (user){
        alert("login successfull")
        this.loginVal.reset();
        this.router.navigate(['restaurant'])
      }else {
        alert("user not found!")
      }
    },
    err =>{
      alert("somthing went wrong!")
    })   
  }
}
