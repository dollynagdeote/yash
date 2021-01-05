import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpRequestService } from '../services/http-service'
import { Global } from '../services/global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginURL: string = Global.ST_USER_LOGIN_URL;

  loginForm: FormGroup;
  user: any[];

  constructor(private fb: FormBuilder,
    private httpService: HttpRequestService,
    private router: Router) {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  submitForm(){
  //   this.user = this.loginForm.value;
  //   this.httpService.postService(this.loginURL, this.user).subscribe(
  //     data=>{
  //       console.log(data);
  //       this.router.navigateByUrl('/user')
  //     },
  //     error =>{
  //       console.log('Error:' + error)
  //     }
  //   )

    this.router.navigateByUrl('/user-list')
  }

}
