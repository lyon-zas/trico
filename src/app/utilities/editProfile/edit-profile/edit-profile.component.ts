import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpAPIsService } from 'src/app/RestAPI/http-apis.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from 'src/app/userClass/user';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  users: User[] = [];
  userId: number = 1;
  userName: string | any = '';
  webMail: string | any = '';
  firstName: string | any = '';
  lastName: string | any = '';
  accountStatus: string | any = '';
  userRole: string | any = '';
  password: string | any = '';
  confirmPassword: string | any = '';
  profilePicture: any | string = '';
  todayDate: Date | any = '';

  user: User = new User(this.userId, this.userName, this.webMail, this.firstName, this.lastName, this.accountStatus,this.userRole, this.password,this.confirmPassword, this.profilePicture, this.todayDate)


  constructor(private router: Router, private route: ActivatedRoute, private service: HttpAPIsService, private fb:FormBuilder, private http: HttpClient) { }


  newUserForm = this.fb.group({
    userName: ['', Validators.required],
    webMail: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    profilePicture: ['', Validators.required],
    todayDate: [Date, Validators.required],
    userId: [1, Validators.required]
  })


  // submit(){
  //   this.user = this.newUserForm.getRawValue();
  //   this.service.setUsersArray(this.user).subscribe((elem:any)=>{
  //     console.log("submitted Arrays>>", this.newUserForm.value, elem);
  //     this.setLocalStorage();
  //     alert('Account has been updated succesfully');
  //   })
  // }

  submit(){
    this.user = this.newUserForm.getRawValue();
    this.http.post('https://tricomms-2fe5d-default-rtdb.firebaseio.com/users.json', this.user).subscribe((response:any)=>{
      console.log("reponseFromFireBase>>", this.newUserForm.value);
    })
  }

  setLocalStorage(){
    localStorage.setItem('userId',this.userId.toString());
    localStorage.setItem('userName', this.newUserForm.value.userName);
    localStorage.setItem('webMail', this.newUserForm.value.webMail);
    localStorage.setItem('firstName', this.newUserForm.value.firstName);
    localStorage.setItem('lastName', this.newUserForm.value.lastName);
    localStorage.setItem('profilePicture', this.newUserForm.value.profilePicture);
    localStorage.setItem('todayDate', this.newUserForm.value.todayDate);
  }


  ngOnInit(): void {
    this.newUserForm.patchValue(localStorage);
    console.log("Arrays>>", this.setLocalStorage());
  }

}
