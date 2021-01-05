import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Global } from '../services/global';
import { HttpRequestService } from '../services/http-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit{

    userList: any[];
    userId: any;

    constructor(private httpService: HttpRequestService, private router: Router){}

    ngOnInit(): void{
        this.getUserList();
    }

    getUserList() {
        let url = Global.ST_USER_LIST
        this.httpService.getServie(url).subscribe(
          data=>{
                console.log(data);
                this.userList = data;
              },
              error =>{ console.log("Error Page");
        })
    }

    deleteUser(userId){
        let url = Global.ST_USER_DELETE_URL
        this.userId = userId
        console.log(this.userId)
        
        this.httpService.postService(url, this.userId).subscribe(
            data=>{
                console.log(data);
                this.getUserList();
            },
            error => {
                console.log('Error:' + error)
            }
        )
    }

    editProfile(userId){
        this.userId = userId;
        sessionStorage.setItem('userId',this.userId);
        console.log(sessionStorage);
        this.router.navigateByUrl('/update-profile');
    }
}