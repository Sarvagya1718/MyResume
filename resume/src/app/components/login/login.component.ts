import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login: any = FormGroup;
  userData: any = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private commonserv: CommonService,
  ) {}
   ngOnInit() {
    this.login = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.commonserv.getUsers().subscribe((data:any) => {
      this.userData = data;
    });

  }

  loginSubmit(formdata: any) {
    if (formdata) {      
      this.userData.forEach((item: any) => {
        if (
          item.email === formdata.email &&
          item.password === formdata.password
        ) {
          localStorage.setItem("isLoggedIn","true")
          this.router.navigate(['dashboard'])
        this.login.reset();
        }
      });
    }
  }

  gotoRegister() {
    this.router.navigate(['register']);
  }
}
