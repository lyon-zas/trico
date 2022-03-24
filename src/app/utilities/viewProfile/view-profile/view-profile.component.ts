import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/userClass/user';
import { HttpAPIsService } from 'src/app/RestAPI/http-apis.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  userId: number = 1;
  userMail: string | any = '';
  userName: string | any = '';
  webMail: string | any = '';
  firstName: string | any = '';
  lastName: string | any = '';
  profilePicture: any = '';
  todayDate: Date | any = '';
  user: User = new User(0,'','','','','','','','','','');
  users: User[] = [];
  constructor(private router: Router, private route: ActivatedRoute, private service: HttpAPIsService) { }

  getUserMail(){
    this.userMail = localStorage.getItem('userMail');
    return this.userMail = this.userMail;
  }

  getUserId(){
    this.userId = Number(localStorage.getItem('userId'));
    return this.userId = this.userId;
  }
  getUserName(){
    this.userName = localStorage.getItem('userName');
    return this.userName = this.userName;
  }
  getWebMail(){
    this.webMail = localStorage.getItem('webMail');
    return this.webMail = this.webMail;
  }
  getFirstName(){
    this.firstName = localStorage.getItem('firstName');
    return this.firstName = this.firstName;
  }
  getLastName(){
    this.lastName = localStorage.getItem('lastName');
    return this.lastName = this.lastName;
  }
  getProfilePicture(){
    this.profilePicture = localStorage.getItem('profilePicture');
    return this.profilePicture = this.profilePicture;
  }
  getTodaysDate(){
    this.todayDate = localStorage.getItem('todayDate');
    return this.todayDate = this.todayDate;
  }

  getAllLocalStorage(){
    this.getUserId(); this.getUserName(); this.getWebMail(); this.getFirstName();
    this.getLastName(); this.getProfilePicture(); this.getTodaysDate();
  }


  getProfile(){
    this.user = this.service.getUserArray();
  }


  editProfile(user: User){
    this.router.navigate(['/utilities/editProfile'],{relativeTo:this.route});
  }


  ngOnInit(): void {
    this.getUserName();
    this.getProfile();
    this.getAllLocalStorage();

  }

}
