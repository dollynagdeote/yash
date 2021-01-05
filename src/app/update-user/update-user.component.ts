import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Global } from '../services/global';
import { HttpRequestService } from '../services/http-service';

@Component({
    selector: 'app-update-user',
    templateUrl: 'update-user.component.html',
    styleUrls: ['update-user.component.css']
})

export class UpdateUser implements OnInit {

    updateUrl = Global.ST_USER_UPDATE_URL

    updateForm:FormGroup;
    updateProfile: any[];
    userId: any;

    constructor(private fb: FormBuilder, private httpService: HttpRequestService, private router: Router){
        this.updateForm = this.fb.group({
            'firstName': ['', Validators.required],
            'lastName': ['', Validators.required],
            'email': ['', Validators.required],
        })
    }

    ngOnInit(): void {
        this.userId = sessionStorage.getItem('userId');
        console.log(this.userId);
    }

    submitUpdateForm(){
        this.updateProfile = this.updateForm.value;
        console.log(this.updateProfile);
        this.httpService.postService(this.updateUrl, this.updateProfile).subscribe(
            data => {
                console.log(data);
                this.router.navigateByUrl('/user-list');
            },
            error => {
                console.log("Error:" + error)
            }
        )
    }
}