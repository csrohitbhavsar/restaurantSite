import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: [''],
      mobile: [''],
      email: [''],
      password: ['']
    })
  }

  signup(){
    var info = this.http.post<any>("http://localhost:3000/users", this.signupForm.value).subscribe(_res =>{
      alert("registration succesfully");
      this.signupForm.reset();
      console.log(info)
      this.router.navigate(['login'])
    },
    _err=>{
      alert("somthing went wrong")
    })
    }
}
