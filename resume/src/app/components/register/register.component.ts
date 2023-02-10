import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registrationForm: any = FormGroup;
  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router){}
  ngOnInit(){
    this.registrationForm= this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }
  
  signUp(){
    this.http.post("http://localhost:3000/user",this.registrationForm.value)
    .subscribe(res=>{
      this.registrationForm.reset();
      this.router.navigate(['login'])
      console.log("Registration Successful");
      
    },err=>{
      console.log("Something went Wrong");
      
    })
  }
}
