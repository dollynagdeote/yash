import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpRequestService } from '../services/http-service'
import { Global } from '../services/global';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerURL: string = Global.ST_USER_REGISTRATION_URL;

  registerForm: FormGroup;
  customer: any = [];

  constructor(private fb: FormBuilder, 
    private httpService: HttpRequestService,
    private router: Router){
    this.registerForm = this.fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  submitRegisterForm(){
    // let registerDetails = {
    //   firstName: this.registerForm.get('firstName').value,
    //   lastName: this.registerForm.get('lastName').value,
    //   email: this.registerForm.get('email').value,
    //   password: this.registerForm.get('password').value,
    // }
    this.customer = this.registerForm.value
    console.log(this.customer)

    this.httpService.postService(this.registerURL, this.customer).subscribe(
      data=> {
          console.log(data);
          this.router.navigateByUrl('/login')
      },
      error =>{
        console.log("Error :" + error)
      });
  }
}